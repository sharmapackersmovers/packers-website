"use client";

import { m } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <m.a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20a%20quote%20for%20moving%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/40 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-2xl bg-green-500 animate-ping opacity-25" />
      <MessageCircle className="w-6 h-6 text-white fill-white relative z-10" />
    </m.a>
  );
}
