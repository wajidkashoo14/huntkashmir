"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "919596041460";
const WA_MESSAGE = encodeURIComponent(
  "Hi Hunt Kashmir 365! 👋\nI'm interested in booking a Kashmir tour.\nCould you help me plan my trip?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [pinged,  setPinged]  = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* Tooltip / mini-card — shows on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[220px] pointer-events-none"
          >
            <div className="flex items-center gap-2.5 mb-2">
              {/* Green dot — "online" */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
              </span>
              <span className="text-[#1B4332] font-bold text-sm">Hunt Kashmir 365</span>
            </div>
            <p className="text-gray-500 text-xs leading-snug">
              Chat with us on WhatsApp — we usually reply within minutes 🕐
            </p>
            <div className="mt-3 bg-[#25D366]/10 rounded-xl px-3 py-2">
              <p className="text-[#128C7E] text-xs font-medium">👋 Tap to start chatting</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => { setHovered(true); setPinged(false); }}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        animate={hovered ? { rotate: [0, -8, 8, -4, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl"
        style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
      >
        {/* Pulse ring */}
        {pinged && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-40"
            style={{ background: "#25D366" }} />
        )}

        {/* WhatsApp icon */}
        <svg viewBox="0 0 32 32" fill="white" width={34} height={34} aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.52.66 4.883 1.817 6.928L2 30l7.298-1.794A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.293 19.43c-.305.858-1.513 1.572-2.487 1.78-.663.139-1.528.25-4.438-.955-3.731-1.502-6.14-5.277-6.327-5.523-.18-.245-1.5-1.996-1.5-3.806s.936-2.7 1.287-3.075c.286-.307.76-.449 1.215-.449.147 0 .28.007.4.013.35.015.528.036.759.59.305.72 1.047 2.53 1.138 2.716.092.186.184.435.055.7-.122.272-.23.393-.416.61-.185.215-.36.38-.545.612-.17.207-.36.43-.147.78.214.343.95 1.562 2.04 2.53 1.403 1.25 2.552 1.64 2.939 1.81.386.17.61.142.836-.085.232-.232.993-1.16 1.257-1.56.257-.392.516-.327.87-.196.36.13 2.28 1.075 2.667 1.27.387.195.645.288.74.452.094.163.094.944-.21 1.8z"/>
        </svg>

        {/* "Book Now" badge */}
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
          className="absolute -top-1.5 -right-1.5 bg-[#C9A84C] text-[#1B4332] text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full shadow-md whitespace-nowrap"
        >
          Book Now
        </motion.span>
      </motion.a>
    </div>
  );
}
