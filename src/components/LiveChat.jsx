import React, { useEffect, useRef, useState } from "react";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"; // Pastikan path firebase sesuai
import { Send, MessageCircle, X, Loader2 } from "lucide-react"; // Menggunakan Lucide Icons

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

 // Auto scroll ke bawah saat ada pesan baru
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
    unread: 1, // Set unread untuk admin
    createdAt: serverTimestamp(),
    lastMessageAt: serverTimestamp(),
    // === FIELD BARU UNTUK CLAIMING (DIPERTAHANKAN) ===
    status: "open",
    claimedBy: null,
    claimedByName: null,
    // =================================
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
   unread: 1, // Tandai chat ini punya pesan baru untuk admin
  });
 }

 return (
  <>
   {/* Floating Button */}
   <div className="fixed right-6 bottom-6 z-50">
    <button
     onClick={() => setOpen((o) => !o)}
     className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
    >
     {/* Mengganti '💬' dengan ikon Lucide */}
     {open ? <X size={24} /> : <MessageCircle size={24} />}
    </button>
   </div>

   {open && (
    {/* Menyesuaikan posisi ke atas dan styling container */}
    <div className="fixed right-6 bottom-24 z-50 w-80 md:w-96 bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-2xl rounded-xl overflow-hidden flex flex-col h-[450px] transition-colors duration-300">
     {/* HEADER */}
     <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
       <MessageCircle size={20} />
       <span className="font-semibold tracking-wide">Live Chat</span>
      </div>
      <button onClick={() => setOpen(false)} className="hover:bg-blue-700 p-1 rounded-full transition-colors">
       <X size={18} />
      </button>
     </div>

     {/* BODY */}
     {!isStarted ? (
      {/* ================================ */}
      {/* FORM NAMA + PERTANYAAN (Menggunakan styling yang lebih detail) */}
      {/* ================================ */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-center bg-white dark:bg-gray-800 transition-colors">
       <div>
        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1 block">Nama Lengkap</label>
        <input
         value={userName}
         onChange={(e) => setUserName(e.target.value)}
         className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
         placeholder="Masukkan nama Anda..."
        />
       </div>

       <div>
        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1 block">Pesan</label>
        <textarea
         value={firstMessage}
         onChange={(e) => setFirstMessage(e.target.value)}
         className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
         placeholder="Tulis pertanyaan Anda..."
        />
       </div>

       <button
        onClick={createChat}
        disabled={loading || !userName.trim() || !firstMessage.trim()}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
       >
        {loading ? <Loader2 size={18} className="animate-spin" /> : "Mulai Chat"}
       </button>
      </div>
     ) : (
      <>
       {/* MESSAGE LIST */}
       {/* h-64 diubah menjadi flex-1 dan menambahkan overflow-y-auto */}
       <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 custom-scrollbar transition-colors">
        <div className="space-y-3">
         {/* Pesan Sambutan Otomatis (opsional, disalin dari contoh) */}
         <div className="flex justify-center my-4">
          <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">Percakapan dimulai</span>
         </div>

         {messages.map((m) => (
          {/* Menggunakan flex dan justify-end/start */}
          <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
           {/* Mengubah styling gelembung pesan */}
           <div
            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
             m.sender === "user"
              ? "bg-blue-600 text-white rounded-br-none" // User: Biru, Sudut kanan bawah kotak
              : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-none" // Admin: Putih/Abu, Sudut kiri bawah kotak
            }`}
           >
            {m.text}
           </div>
          </div>
         ))}
        </div>
       </div>

       {/* INPUT AREA */}
       <form onSubmit={sendMessage} className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2 items-center transition-colors">
        <input
         value={text}
         onChange={(e) => setText(e.target.value)}
         className="flex-1 border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full px-4 py-2.5 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-sm"
         placeholder="Ketik pesan..."
        />
        <button
         type="submit"
         disabled={!text.trim()}
         className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
         <Send size={18} />
        </button>
       </form>
      </>
     )}
    </div>
   )}
  </>
 );
}