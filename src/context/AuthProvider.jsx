import { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import socket from "../services/socket";
import { getStatus } from "../services/api";

export const AuthProvider = ({ children }) => {
  const [qrCode, setQrCode] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Connecting...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // status check
    checkStatus();

    // Socket connect
    socket.connect();

    // QR save
    socket.onQR((qrImage) => {
      setQrCode(qrImage);
      setIsLoading(false);
    });

    // Status update
    socket.onStatus((status) => {
      setIsConnected(status.connected);
      setStatusMessage(status.message);
      setIsLoading(false);

      if (status.connected) {
        setQrCode(null);
      }
    });

    // Cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  const checkStatus = async () => {
    try {
      const response = await getStatus();
      setIsConnected(response.data.whatsapp.connected);
      setStatusMessage(response.data.whatsapp.message);
    } catch (error) {
      console.error("Status check failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const authInfo = {
    qrCode,
    isConnected,
    statusMessage,
    isLoading,
    checkStatus,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
