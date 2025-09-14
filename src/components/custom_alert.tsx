"use client";
import { useEffect } from "react";
import clsx from "clsx";

interface CustomAlertProps {
  message: string;
  type?: "success" | "error";
  show: boolean;
  onClose: () => void;
}

export function CustomAlert({ message, type = "success", show, onClose }: CustomAlertProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000); // auto close after 3s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={clsx(
        "fixed bottom-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white transition-transform duration-300",
        type === "success" ? "bg-green-500" : "bg-red-500"
      )}
    >
      {message}
    </div>
  );
}
