import { useState } from "react";
import toast from "react-hot-toast";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import Button from "../common/Button";
import { MdSend } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { sendMessage } from "../../services/api";

const MessageForm = ({ onMessageSent }) => {
  const { isConnected } = useWhatsApp();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    if (!isConnected) {
      toast.error("WhatsApp is not connected!");
      return;
    }

    setIsSending(true);
    try {
      const response = await sendMessage(phone, message);
      toast.success("Message sent successfully!");

      onMessageSent({
        phone,
        message,
        messageId: response.data.messageId,
        timestamp: response.data.timestamp,
        status: "sent",
      });

      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error.message);
      onMessageSent({
        phone,
        message,
        timestamp: new Date().toISOString(),
        status: "failed",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MdSend className="text-green-600 text-xl" />
        Send Message
      </h2>

      <div className="flex flex-col gap-4">
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <FaPhone className="text-green-500 text-xs" />
            Phone Number
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01712345678"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 text-sm"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <BsChatTextFill className="text-green-500 text-xs" />
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 resize-none text-sm"
          />
          <p
            className={`text-xs text-right mt-1 ${
              message.length > 900 ? "text-red-400" : "text-gray-400"
            }`}
          >
            {message.length}/1000
          </p>
        </div>

        {/* Button */}
        <Button
          onClick={handleSubmit}
          disabled={isSending || !phone || !message}
          loading={isSending}
          fullWidth
          icon={<MdSend />}
        >
          {isSending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </div>
  );
};

export default MessageForm;
