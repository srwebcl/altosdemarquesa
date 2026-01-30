"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
    const phoneNumber = "56989921014"
    const message = encodeURIComponent("Hola, quiero información sobre el sitio de 5.000 m2 en Altos de Marquesa")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle className="w-8 h-8 text-white" />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center text-[10px] text-white font-bold">1</span>
            </span>

            {/* Tooltip text on hover */}
            <span className="absolute right-full mr-3 bg-white text-stone-900 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                ¿Hablamos?
            </span>
        </motion.a>
    )
}
