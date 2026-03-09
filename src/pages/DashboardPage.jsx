import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWhatsApp } from "../hooks/useWhatsApp";
import ConnectionStatus from "../components/Dashboard/ConnectionStatus";
import MessageForm from "../components/Message/MessageForm";
import MessageLog from "../components/Message/MessageLog";

const DashboardPage = () => {
  const { isConnected } = useWhatsApp();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  // Disconnected = Home
  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected]);

  // message log
  const handleMessageSent = (newMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">
            Send messages via WhatsApp API
          </p>
        </div>

        {/* Connection Status */}
        <div className="mb-6">
          <ConnectionStatus />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-gray-400 text-sm">Total Sent</p>
            <p className="text-3xl font-bold text-green-600 mt-1">
              {messages.filter((m) => m.status === "sent").length}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-gray-400 text-sm">Failed</p>
            <p className="text-3xl font-bold text-red-500 mt-1">
              {messages.filter((m) => m.status === "failed").length}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Message Form */}
          <MessageForm onMessageSent={handleMessageSent} />

          {/* Message Log */}
          <MessageLog messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
