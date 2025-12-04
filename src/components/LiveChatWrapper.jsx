import { useLocation } from "react-router-dom";
import LiveChat from "./LiveChat";

const LiveChatWrapper = () => {
  const location = useLocation();

  // halaman yang ingin disembunyikan livechat
  const hiddenPaths = ["/admin", "/login"];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return <LiveChat userName="Pengunjung" />;
};

export default LiveChatWrapper;
