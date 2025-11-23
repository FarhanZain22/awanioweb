// src/components/LiveChat.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "./firebase"; // firebase.js kamu ada di components

export default function LiveChat({ userName = "Pengunjung" }) {
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Jika sudah ada chatId, listen realtime untuk messages
  useEffect(() => {
    if (!chatId) return;
    setLoading(true);
    const msgsCol = collection(doc(collection(db, "chats"), chatId), "messages");
    const q = query(msgsCol, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, (err) => {
      console.error("listen messages error", err);
      setLoading(false);
    });

    // mark chat as read for admin? (optional) handled by admin open
    return () => unsub();
  }, [chatId]);

  // Create new chat doc and first message
  async function createChatAndSend(m) {
    try {
      setLoading(true);
      const chatsCol = collection(db, "chats");
      const chatDocRef = await addDoc(chatsCol, {
        displayName: userName,
        createdAt: serverTimestamp(),
        lastMessage: m,
        unreadForAdmin: true,
        // add info about user if available:
        uid: auth?.currentUser?.uid || null,
      });

      // add message in subcollection
      const msgsCol = collection(doc(chatsCol, chatDocRef.id), "messages");
      await addDoc(msgsCol, {
        sender: "user",
        text: m,
        createdAt: serverTimestamp(),
        read: false,
      });

      setChatId(chatDocRef.id);
      setLoading(false);
    } catch (e) {
      console.error("createChatAndSend", e);
      setLoading(false);
    }
  }

  // Send message when chat exists
  async function sendMessageToChat(chatDocId, m) {
    try {
      const msgsCol = collection(doc(collection(db, "chats"), chatDocId), "messages");
      await addDoc(msgsCol, {
        sender: "user",
        text: m,
        createdAt: serverTimestamp(),
        read: false,
      });
      // update lastMessage and unread flag
      const chatRef = doc(db, "chats", chatDocId);
      await updateDoc(chatRef, {
        lastMessage: m,
        unreadForAdmin: true,
      });
    } catch (e) {
      console.error("sendMessageToChat", e);
    }
  }

  async function handleSend(e) {
    e?.preventDefault();
    if (!text.trim()) return;
    const m = text.trim();
    setText("");

    if (!chatId) {
      await createChatAndSend(m);
    } else {
      await sendMessageToChat(chatId, m);
    }
  }

  // Optional: Restore existing chat for current user if uid exists (simple heuristic)
  // NOTE: This queries chats collection for uid == current user (if logged in)
  useEffect(() => {
    async function tryRestore() {
      if (!auth?.currentUser) return;
      try {
        const q = query(collection(db, "chats"));
        const snap = await getDocs(q);
        const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        // naive: find chat with same uid
        const found = all.find(c => c.uid && c.uid === auth.currentUser.uid);
        if (found) setChatId(found.id);
      } catch (err) {
        console.error("restore chat", err);
      }
    }
    tryRestore();
  }, []);

  return (
    <>
      {/* Floating bubble */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Open live chat"
          className="w-14 h-14 rounded-full bg-blue-700 text-white shadow-lg flex items-center justify-center"
        >
          💬
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 md:w-96 bg-white shadow-xl rounded-lg overflow-hidden border">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">🙂</div>
              <div>
                <div className="font-semibold">Hi, There</div>
                <div className="text-xs opacity-80">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { setOpen(false); }} aria-label="Close chat" className="text-white/80">✖</button>
            </div>
          </div>

          <div ref={scrollRef} className="p-3 h-64 overflow-auto bg-white">
            {loading && <div className="text-sm text-gray-400">Loading...</div>}
            {!loading && messages.length === 0 && <div className="text-sm text-gray-400">Mulai chat untuk menghubungi admin...</div>}
            {messages.map((m) => (
              <div key={m.id} className={`mb-3 max-w-[80%] ${m.sender === "user" ? "ml-auto text-right" : "mr-auto text-left"}`}>
                <div className={`${m.sender === "user" ? "bg-blue-700 text-white rounded-l-lg rounded-tr-lg" : "bg-gray-100 text-gray-900 rounded-r-lg rounded-tl-lg"} inline-block px-3 py-2`}>
                  {m.text}
                </div>
                {/* createdAt bisa di-format jika diperlukan */}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-gray-50 flex items-center gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 rounded-full px-4 py-2 outline-none border border-gray-200"
              placeholder="Enter your message"
            />
            <button type="submit" className="px-4 py-2 rounded-full bg-blue-600 text-white">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
