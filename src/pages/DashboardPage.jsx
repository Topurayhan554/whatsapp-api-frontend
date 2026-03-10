import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWhatsApp } from "../hooks/useWhatsApp";
import ConnectionStatus from "../components/Dashboard/ConnectionStatus";
import MessageForm from "../components/Message/MessageForm";
import MessageLog from "../components/Message/MessageLog";
import { MdDashboard } from "react-icons/md";
import { BsCheckCircleFill, BsXCircleFill, BsClock } from "react-icons/bs";
import Loader from "../components/common/Loader";

const DashboardPage = () => {
  const { isConnected, isLoading } = useWhatsApp();
  const navigate = useNavigate();

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("whatsapp_messages");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (!isLoading && !isConnected) {
      navigate("/");
    }
  }, [isConnected, isLoading]);

  useEffect(() => {
    localStorage.setItem("whatsapp_messages", JSON.stringify(messages));
  }, [messages]);

  const handleMessageSent = (newMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

  const handleClearLog = () => {
    setMessages([]);
    localStorage.removeItem("whatsapp_messages");
  };

  const totalSent = messages.filter((m) => m.status === "sent").length;
  const totalFailed = messages.filter((m) => m.status === "failed").length;

  // Loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader message="Checking connection..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2">
          <MdDashboard className="text-green-600 text-3xl" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-400 text-sm">
              Send messages via WhatsApp API
            </p>
          </div>
        </div>

        {/* Connection Status */}
        <div className="mb-6">
          <ConnectionStatus />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Sent</p>
              <BsCheckCircleFill className="text-green-500 text-lg" />
            </div>
            <p className="text-3xl font-bold text-green-600">{totalSent}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Failed</p>
              <BsXCircleFill className="text-red-500 text-lg" />
            </div>
            <p className="text-3xl font-bold text-red-500">{totalFailed}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total</p>
              <BsClock className="text-blue-400 text-lg" />
            </div>
            <p className="text-3xl font-bold text-blue-500">
              {messages.length}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MessageForm onMessageSent={handleMessageSent} />
          <MessageLog messages={messages} onClearLog={handleClearLog} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
