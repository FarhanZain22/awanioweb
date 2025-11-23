import React, { useEffect, useRef, useState } from "react";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, doc, updateDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // FORM AWAL
  const [userName, setUserName] = useState("");
  const [firstMessage, setFirstMessage] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  // INPUT SAAT CHAT BERJALAN
  const [text, setText] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // LISTENER MSG
  useEffect(() => {
    if (!chatId) return;

    const msgsCol = collection(doc(collection(db, "livechats"), chatId), "messages");
    const q = query(msgsCol, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setMessages(list);
      setLoading(false);
    });

    return () => unsub();
  }, [chatId]);

  // CREATE CHAT
  async function createChat() {
    if (!userName.trim() || !firstMessage.trim()) return;

    setLoading(true);

    try {
      const chatsCol = collection(db, "livechats");

      const newChat = {
        name: userName,
        initial: userName.charAt(0).toUpperCase(),
        lastMessage: firstMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        unread: 1,
        createdAt: serverTimestamp(),
        lastMessageAt: serverTimestamp(),
      };

      const chatRef = await addDoc(chatsCol, newChat);

      await addDoc(collection(chatsCol, chatRef.id, "messages"), {
        text: firstMessage,
        sender: "user",
        createdAt: serverTimestamp(),
      });

      setChatId(chatRef.id);
      setIsStarted(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  // SEND MSG LANJUTAN
  async function sendMessage(e) {
    e?.preventDefault();
    if (!text.trim() || !chatId) return;

    const message = text.trim();
    setText("");

    const msgsCol = collection(db, "livechats", chatId, "messages");

    await addDoc(msgsCol, {
      text: message,
      sender: "user",
      createdAt: serverTimestamp(),
    });

    await updateDoc(doc(db, "livechats", chatId), {
      lastMessage: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      unread: 1,
    });
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button onClick={() => setOpen((o) => !o)} className="w-14 h-14 rounded-full bg-blue-700 text-white shadow-lg flex items-center justify-center">
          💬
        </button>
      </div>

      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 md:w-96 bg-white border shadow-xl rounded-lg overflow-hidden">
          {/* HEADER */}
          <div className="bg-blue-700 text-white p-3 flex justify-between items-center">
            <div className="font-semibold">Live Chat</div>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* BODY */}
          {!isStarted ? (
            // ================================
            // FORM NAMA + PERTANYAAN
            // ================================
            <div className="p-4 space-y-3">
              <input value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full border p-2 rounded" placeholder="Nama kamu..." />

              <textarea value={firstMessage} onChange={(e) => setFirstMessage(e.target.value)} className="w-full border p-2 rounded h-24" placeholder="Pertanyaan kamu..." />

              <button onClick={createChat} className="w-full bg-blue-700 text-white p-2 rounded">
                Mulai Chat
              </button>
            </div>
          ) : (
            <>
              {/* MESSAGE LIST */}
              <div ref={scrollRef} className="p-3 h-64 overflow-auto bg-white">
                {messages.map((m) => (
                  <div key={m.id} className={`mb-3 max-w-[80%] ${m.sender === "user" ? "ml-auto text-right" : "mr-auto text-left"}`}>
                    <div className={`inline-block px-3 py-2 rounded-lg ${m.sender === "user" ? "bg-blue-700 text-white rounded-tr-lg" : "bg-gray-200 text-gray-900 rounded-tl-lg"}`}>{m.text}</div>
                  </div>
                ))}
              </div>

              {/* INPUT */}
              <form onSubmit={sendMessage} className="p-3 bg-gray-50 flex gap-2">
                <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 border rounded-full px-3 py-2" placeholder="Ketik pesan..." />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Send</button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
