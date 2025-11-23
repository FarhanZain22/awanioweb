// pages/AdminDashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import { collection, doc, query, onSnapshot, orderBy, addDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom"; // Tambah useLocation

import { auth, db } from "../components/firebase";
import {
  Search,
  MoreHorizontal,
  Paperclip,
  Send,
  ArrowLeft,
  LogOut,
  MessageSquare,
  Clock,
  Moon,
  Sun,
  AlertTriangle, // Icon untuk peringatan di modal
  X, // Icon close
  CheckCircle, // Icon untuk popup sukses
} from "lucide-react";

// --- KOMPONEN POPUP SELAMAT DATANG ---
const WelcomePopup = ({ name, onClose }) => {
  return (
    <div className="fixed top-5 right-5 z-[100] animate-bounce-in transition-all duration-500">
      <div className="bg-white dark:bg-slate-700 border-l-4 border-green-500 shadow-2xl rounded-lg p-4 flex items-start gap-3 max-w-sm">
        <div className="text-green-500 mt-1">
          <CheckCircle size={24} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 dark:text-white">Login Berhasil!</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Selamat datang kembali, <span className="font-semibold text-green-600 dark:text-green-400">{name}</span>.
          </p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 ml-auto">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [drafts, setDrafts] = useState({});
  const [search, setSearch] = useState("");

  // --- STATE UNTUK POPUP WELCOME ---
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeName, setWelcomeName] = useState("");

  // --- STATE MODAL LOGOUT ---
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // --- STATE DARK MODE ---
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigate = useNavigate();
  const location = useLocation(); // Hook location untuk terima data
  const messagesEndRef = useRef(null);

  const currentMessage = drafts[selectedChatId] || "";
  const activeChat = chats.find((c) => c.id === selectedChatId);

  // --- LOGIC POPUP WELCOME ---
  useEffect(() => {
    // Cek apakah ada data 'welcomeName' yang dikirim dari Login
    if (location.state?.welcomeName) {
      setWelcomeName(location.state.welcomeName);
      setShowWelcome(true);

      // Bersihkan state history agar popup tidak muncul saat refresh
      window.history.replaceState({}, document.title);

      // Timer tutup otomatis 4 detik
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // --- LOGIC DARK MODE ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // --- LOGIC AUTH & CHAT ---
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      // PERBAIKAN KEAMANAN: Redirect jika tidak ada user
      if (!user) {
        navigate("/login", { replace: true });
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
  }, [navigate]);

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
        time: d.data()?.createdAt
          ? new Date(d.data().createdAt.toDate()).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "--:--",
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
    const messageData = {
      text: currentMessage.trim(),
      sender: "admin",
      createdAt: serverTimestamp(),
    };
    try {
      await addDoc(collection(db, "livechats", selectedChatId, "messages"), messageData);
      await updateDoc(doc(db, "livechats", selectedChatId), {
        lastMessage: currentMessage.trim(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      setDrafts((prev) => ({ ...prev, [selectedChatId]: "" }));
    } catch (err) {
      console.error(err);
    }
  };

  // --- LOGIC LOGOUT POP-UP ---

  // 1. Tombol logout ditekan -> Tampilkan Modal
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  // 2. Konfirmasi YA -> Proses Logout Firebase
  const confirmLogout = async () => {
    await signOut(auth);
    // Navigasi akan dihandle otomatis oleh useEffect auth listener,
    // tapi kita bisa paksa navigasi juga untuk UX instan
    navigate("/login", { replace: true });
  };

  // 3. Konfirmasi TIDAK -> Tutup Modal
  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const filteredChats = chats.filter((c) => (c.name || "").toLowerCase().includes(search.toLowerCase()));

  // --- UI RENDER ---

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans overflow-hidden transition-colors duration-300 relative">
      {/* ================= POPUP WELCOME ================= */}
      {showWelcome && <WelcomePopup name={welcomeName || adminName} onClose={() => setShowWelcome(false)} />}

      {/* ================= MODAL LOGOUT ================= */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-sm p-6 transform transition-all scale-100 border border-slate-100 dark:border-slate-700">
            {/* Icon Header */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Konfirmasi Logout</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Apakah Anda yakin ingin keluar dari dashboard? Anda perlu login kembali untuk mengakses pesan.</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={cancelLogout}
                className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                Batal
              </button>
              <button onClick={confirmLogout} className="flex-1 px-4 py-2.5 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 shadow-md shadow-red-200 dark:shadow-none transition-colors">
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
          flex-col h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 
          w-full md:w-80 md:shrink-0 z-20 shadow-sm transition-colors duration-300
          ${selectedChatId ? "hidden md:flex" : "flex"} 
        `}
      >
        {/* Header Dashboard */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-white dark:bg-slate-800 shrink-0 transition-colors duration-300">
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">Messages</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 block animate-pulse"></span>
              {adminName} is Active
            </p>
          </div>

          <div className="flex items-center gap-1">
            {/* Tombol Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Tombol Logout (Memicu Modal) */}
            <button onClick={handleLogoutClick} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200">
              <LogOut size={18} />
            </button>
          </div>
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
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-700 border border-transparent dark:border-slate-600 rounded-xl text-sm dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/50 transition-all"
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
                selectedChatId === chat.id
                  ? "bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800"
                  : "bg-white dark:bg-slate-800 border border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-slate-100 dark:hover:border-slate-700"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm transition-transform group-hover:scale-105 shrink-0 ${
                  selectedChatId === chat.id ? "bg-indigo-600" : "bg-slate-400 dark:bg-slate-600"
                }`}
              >
                {chat.initial || (chat.name ? chat.name.charAt(0).toUpperCase() : "?")}
              </div>

              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`text-sm font-semibold truncate ${selectedChatId === chat.id ? "text-indigo-900 dark:text-indigo-300" : "text-slate-700 dark:text-slate-200"}`}>{chat.name}</h3>
                  <span className="text-[10px] text-slate-400 font-medium">{chat.time}</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate pr-2 w-32">
                    {drafts[chat.id] ? <span className="text-indigo-500 dark:text-indigo-400 italic">Drafting...</span> : chat.lastMessage}
                  </p>
                  {chat.unread > 0 && <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[18px] text-center shadow-sm">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN AREA ================= */}
      <div className={`flex-1 flex flex-col h-full bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300 ${selectedChatId ? "flex" : "hidden md:flex"}`}>
        {selectedChatId ? (
          <>
            {/* Header Chat */}
            <div className="px-6 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center shadow-sm z-10 shrink-0 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <button onClick={handleBackToList} className="md:hidden p-2 -ml-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full">
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <h2 className="font-bold text-slate-800 dark:text-white text-base">{activeChat?.name}</h2>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-500"></span> Guest User
                  </p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
              {activeChat?.messages?.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex flex-col max-w-[80%] md:max-w-[65%] ${msg.sender === "admin" ? "items-end" : "items-start"}`}>
                    {/* Bubble */}
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm shadow-sm leading-relaxed border ${
                        msg.sender === "admin"
                          ? "bg-indigo-600 text-white border-indigo-600 rounded-br-none"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Time Stamp */}
                    <span className="text-[10px] text-slate-400 mt-1 px-1 flex items-center gap-1">
                      {msg.sender === "admin" && <Clock size={10} />} {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shrink-0 transition-colors duration-300">
              <form onSubmit={handleSendMessage} className="flex gap-3 items-end max-w-5xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={handleInputChange}
                    placeholder="Type your reply here..."
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner dark:placeholder-slate-400"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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
          // Empty State
          <div className="hidden md:flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-500">
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
              <MessageSquare size={40} className="text-slate-300 dark:text-slate-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">No Chat Selected</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xs text-center">Select a conversation from the sidebar to start managing guest inquiries.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
