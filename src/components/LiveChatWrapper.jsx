import { useLocation } from "react-router-dom";
import LiveChat from "./LiveChat";

const LiveChatWrapper = () => {
  const location = useLocation();

  if (location.pathname === "/admin") {
    return null; // Don't render LiveChat on the admin page
  }

  return <LiveChat userName="Pengunjung" />;
};

export default LiveChatWrapper;
