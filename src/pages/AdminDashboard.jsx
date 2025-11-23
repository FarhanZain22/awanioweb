// pages/AdminDashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import { collection, doc, query, onSnapshot, orderBy, addDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../components/firebase";
import {
  Search,
  MoreHorizontal, // Ganti MoreVertical jadi Horizontal biar beda
  Paperclip,
  Send,
  ArrowLeft,
  User,
  LogOut,
  MessageSquare,
  Clock,
} from "lucide-react";

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [drafts, setDrafts] = useState({});
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const currentMessage = drafts[selectedChatId] || "";
  const activeChat = chats.find((c) => c.id === selectedChatId);

  // --- LOGIC (Tetap Sama) ---
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setAdminName("Admin");
        return;
      }
      try {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          setAdminName(data.username || data.name || "Admin");
        } else {
          setAdminName(user.email || "Admin");
        }
      } catch (err) {
        console.error(err);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "livechats"));
    const unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setChats(items);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!selectedChatId) return;
    const messagesRef = collection(db, "livechats", selectedChatId, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        time: d.data()?.createdAt ? new Date(d.data().createdAt.toDate()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--",
      }));
      setChats((prev) => prev.map((c) => (c.id === selectedChatId ? { ...c, messages: msgs } : c)));
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    });
    return () => unsub();
  }, [selectedChatId]);

  const handleChatSelect = async (id) => {
    setSelectedChatId(id);
    try {
      await updateDoc(doc(db, "livechats", id), { unread: 0 });
    } catch (err) {
      console.error(err);
    }
  };

  const handleBackToList = () => {
    setSelectedChatId(null);
  };

  const handleInputChange = (e) => {
    setDrafts((prev) => ({ ...prev, [selectedChatId]: e.target.value }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!currentMessage.trim() || !selectedChatId) return;
    const messageData = { text: currentMessage.trim(), sender: "admin", createdAt: serverTimestamp() };
    try {
      await addDoc(collection(db, "livechats", selectedChatId, "messages"), messageData);
      await updateDoc(doc(db, "livechats", selectedChatId), {
        lastMessage: currentMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      setDrafts((prev) => ({ ...prev, [selectedChatId]: "" }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  const filteredChats = chats.filter((c) => (c.name || "").toLowerCase().includes(search.toLowerCase()));

  // --- UI RENDER ---

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* ================= SIDEBAR ================= 
        Style: Modern Card, White Background, Border Right
      */}
      <div
        className={`
          flex-col h-full bg-white border-r border-slate-200 
          w-full md:w-80 md:shrink-0 z-20 shadow-sm
          ${selectedChatId ? "hidden md:flex" : "flex"} 
        `}
      >
        {/* Header Dashboard */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">Messages</h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 block animate-pulse"></span>
              {adminName} is Active
            </p>
          </div>
          <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
            <LogOut size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 shrink-0">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>
        </div>

        {/* List Chat */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-2 pb-2">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat.id)}
              className={`group flex items-start gap-3 p-3 mb-1 rounded-xl cursor-pointer transition-all duration-200 ${
                selectedChatId === chat.id ? "bg-indigo-50 border border-indigo-100" : "bg-white border border-transparent hover:bg-slate-50 hover:border-slate-100"
              }`}
            >
              {/* Avatar Square Rounded */}
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm transition-transform group-hover:scale-105 shrink-0 ${
                  selectedChatId === chat.id ? "bg-indigo-600" : "bg-slate-400"
                }`}
              >
                {chat.initial || (chat.name ? chat.name.charAt(0).toUpperCase() : "?")}
              </div>

              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`text-sm font-semibold truncate ${selectedChatId === chat.id ? "text-indigo-900" : "text-slate-700"}`}>{chat.name}</h3>
                  <span className="text-[10px] text-slate-400 font-medium">{chat.time}</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-500 truncate pr-2 w-32">{drafts[chat.id] ? <span className="text-indigo-500 italic">Drafting...</span> : chat.lastMessage}</p>
                  {chat.unread > 0 && <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[18px] text-center shadow-sm">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN AREA ================= 
        Style: Clean Canvas, Light Gray, No "Doodle" Pattern
      */}
      <div className={`flex-1 flex flex-col h-full bg-slate-50 relative ${selectedChatId ? "flex" : "hidden md:flex"}`}>
        {selectedChatId ? (
          <>
            {/* Header Chat */}
            <div className="px-6 py-4 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm z-10 shrink-0">
              <div className="flex items-center gap-4">
                <button onClick={handleBackToList} className="md:hidden p-2 -ml-3 text-slate-500 hover:bg-slate-100 rounded-full">
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <h2 className="font-bold text-slate-800 text-base">{activeChat?.name}</h2>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Guest User
                  </p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50">
              {activeChat?.messages?.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex flex-col max-w-[80%] md:max-w-[65%] ${msg.sender === "admin" ? "items-end" : "items-start"}`}>
                    {/* Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm shadow-sm leading-relaxed border ${
                        msg.sender === "admin"
                          ? "bg-indigo-600 text-white border-indigo-600 rounded-br-none" // Admin Style
                          : "bg-white text-slate-700 border-slate-200 rounded-bl-none" // Guest Style
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Time Stamp Outside Bubble */}
                    <span className="text-[10px] text-slate-400 mt-1 px-1 flex items-center gap-1">
                      {msg.sender === "admin" && <Clock size={10} />} {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-3 items-end max-w-5xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={handleInputChange}
                    placeholder="Type your reply here..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors">
                    <Paperclip size={18} />
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={!currentMessage.trim()}
                  className="p-3.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 hover:shadow-lg disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </>
        ) : (
          // Empty State Modern Dashboard Style
          <div className="hidden md:flex flex-col items-center justify-center h-full text-slate-400">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <MessageSquare size={40} className="text-slate-300" />
            </div>
            <h2 className="text-xl font-bold text-slate-700">No Chat Selected</h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xs text-center">Select a conversation from the sidebar to start managing guest inquiries.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
