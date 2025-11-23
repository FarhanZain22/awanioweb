// pages/AdminDashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../components/firebase";

import {
  Search,
  MoreVertical,
  Paperclip,
  Send,
  Menu,
  ArrowLeft,
  User,
} from "lucide-react";

const ChatDashboard = () => {
  const [adminName] = useState("Admin");

  // 🔥 STATE
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [drafts, setDrafts] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const activeChat = chats.find((c) => c.id === selectedChatId);
  const messagesEndRef = useRef(null);
  const currentMessage = drafts[selectedChatId] || "";

  // ==============================================
  // 🔥 LISTENER: Real-time chats dari Firestore
  // ==============================================
  useEffect(() => {
    const q = query(collection(db, "livechats"));

    const unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setChats(items);
    });

    return () => unsub();
  }, []);

  // ==============================================
  // 🔥 LISTENER: Real-time messages untuk chat aktif
  // ==============================================
  useEffect(() => {
    if (!selectedChatId) return;

    const messagesRef = collection(
      db,
      "livechats",
      selectedChatId,
      "messages"
    );
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        time: d.data()?.createdAt
          ? new Date(d.data().createdAt.toDate()).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "--:--",
      }));

      // mapping ke chats
      setChats((prev) =>
        prev.map((c) =>
          c.id === selectedChatId ? { ...c, messages: msgs } : c
        )
      );

      scrollToBottom();
    });

    return () => unsub();
  }, [selectedChatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ==============================================
  // 🔥 SELECT CHAT
  // ==============================================
  const handleChatSelect = async (id) => {
    setSelectedChatId(id);

    // reset unread
    await updateDoc(doc(db, "livechats", id), { unread: 0 });
  };

  const handleBackToList = () => {
    setSelectedChatId(null);
    setIsSidebarOpen(true);
  };

  // ==============================================
  // 🔥 UPDATE INPUT (draft)
  // ==============================================
  const handleInputChange = (e) => {
    setDrafts({ ...drafts, [selectedChatId]: e.target.value });
  };

  // ==============================================
  // 🔥 SEND MESSAGE ADMIN
  // ==============================================
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!currentMessage.trim() || !selectedChatId) return;

    const messageData = {
      text: currentMessage,
      sender: "admin",
      createdAt: serverTimestamp(),
    };

    // Simpan ke subcollection "messages"
    await addDoc(
      collection(db, "livechats", selectedChatId, "messages"),
      messageData
    );

    // Update data chat utama
    await updateDoc(doc(db, "livechats", selectedChatId), {
      lastMessage: currentMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    // Reset draft
    setDrafts({ ...drafts, [selectedChatId]: "" });
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // ==============================================
  // 🔥 UI (Tampilan Sama Persis)
  // ==============================================
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* SIDEBAR */}
      <div
        className={`
          ${!isSidebarOpen ? "hidden" : selectedChatId ? "hidden md:flex" : "flex"}
          w-full md:w-80 bg-white border-r border-gray-200 flex-col h-full transition-all duration-300 ease-in-out
        `}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-start shrink-0 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
              <User size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Admin
              </p>
              <h1 className="text-sm font-bold text-gray-800 truncate max-w-[120px]">
                {adminName}
              </h1>
            </div>
          </div>

          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-200 rounded-lg text-gray-500 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari Guest..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat.id)}
              className={`flex items-start gap-3 p-4 cursor-pointer transition-colors border-l-4
                ${
                  selectedChatId === chat.id
                    ? "bg-blue-50 border-blue-600"
                    : "bg-white border-transparent hover:bg-gray-50"
                }`}
            >
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm text-white
                  ${selectedChatId === chat.id ? "bg-blue-600" : "bg-gray-400"}
                `}
              >
                {chat.initial}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3
                    className={`text-sm font-semibold ${
                      selectedChatId === chat.id
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 truncate w-32">
                    {drafts[chat.id] ? (
                      <span className="text-red-400 italic">
                        Draft: {drafts[chat.id]}
                      </span>
                    ) : (
                      chat.lastMessage
                    )}
                  </p>

                  {chat.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CHAT AREA */}
      <div
        className={`${
          selectedChatId ? "flex" : "hidden md:flex"
        } flex-1 flex-col bg-gray-50 h-full w-full`}
      >
        {selectedChatId ? (
          <>
            {/* Chat Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-200 flex justify-between items-center shadow-sm z-10 shrink-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleBackToList}
                  className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full"
                >
                  <ArrowLeft size={20} />
                </button>

                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  {activeChat?.initial}
                </div>

                <div>
                  <h2 className="font-bold text-gray-800 text-sm md:text-base">
                    {activeChat?.name}
                  </h2>
                  <p className="text-xs text-gray-500">Guest</p>
                </div>
              </div>

              <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              <div className="flex justify-center mb-4">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-center">
                  User Guest Tanpa Akun
                </span>
              </div>

              {activeChat?.messages?.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "admin" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow-sm
                      ${
                        msg.sender === "admin"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                      }
                    `}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1 text-right ${
                        msg.sender === "admin"
                          ? "text-blue-200"
                          : "text-gray-400"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef}></div>
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 bg-white border-t border-gray-200 shrink-0">
              <form
                onSubmit={handleSendMessage}
                className="flex gap-2 items-center"
              >
                <button
                  type="button"
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition hidden md:block"
                >
                  <Paperclip size={20} />
                </button>

                <input
                  type="text"
                  value={currentMessage}
                  onChange={handleInputChange}
                  placeholder={`Balas sebagai ${adminName}...`}
                  className="flex-1 bg-gray-100 text-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />

                <button
                  type="submit"
                  disabled={!currentMessage.trim()}
                  className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </>
        ) : (
          // Tampilan Saat Belum Memilih Chat
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 relative">
            {!isSidebarOpen && (
              <button
                onClick={toggleSidebar}
                className="absolute top-4 left-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={24} />
              </button>
            )}

            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <Search size={40} className="text-gray-300" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              Selamat datang, {adminName}!
            </p>
            <p className="text-sm text-gray-400 mt-2 text-center px-4">
              Pilih sesi chat untuk mulai membalas pesan pelanggan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDashboard;
