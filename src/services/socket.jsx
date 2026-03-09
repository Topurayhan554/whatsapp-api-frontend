import { io } from "socket.io-client";

class SocketService {
  constructor() {
    this.socket = null;
  }

  // Socket connect
  connect() {
    this.socket = io(import.meta.env.VITE_SOCKET_URL, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    this.socket.on("connect", () => {
      console.log("Socket connected!");
    });

    this.socket.on("disconnect", () => {
      console.log("Socket disconnected!");
    });

    return this.socket;
  }

  // QR event listen
  onQR(callback) {
    this.socket?.on("qr", callback);
  }

  // Status event listen
  onStatus(callback) {
    this.socket?.on("status", callback);
  }

  // Socket disconnect
  disconnect() {
    this.socket?.disconnect();
  }

  // Socket instance
  getSocket() {
    return this.socket;
  }
}

export default new SocketService();
