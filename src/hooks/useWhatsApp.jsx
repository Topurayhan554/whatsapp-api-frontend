import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useWhatsApp = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useWhatsApp must be used within AuthProvider");
  }
  return context;
};
