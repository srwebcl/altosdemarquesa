"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUI } from "@/context/ui-context"

export function BookingModal() {
    const { isBookingOpen, closeBooking } = useUI()

    // Mock slots
    const slots = ["10:00", "11:30", "15:00", "16:30"]

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBooking}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white w-full max-w-lg rounded-3xl p-0 overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-stone-900 text-white p-6 relative">
                            <button
                                onClick={closeBooking}
                                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h3 className="text-2xl font-serif font-bold">Agenda tu Visita</h3>
                            <p className="text-stone-400 text-sm mt-1">Conoce Altos de Marquesa en persona.</p>
                        </div>

                        <div className="p-6">
                            {/* Calendar UI Mock */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Selecciona un Día
                                </label>
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <button key={i} className={`flex flex-col items-center justify-center min-w-[60px] h-16 rounded-xl border ${i === 1 ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-stone-200 hover:border-primary/50'}`}>
                                            <span className="text-xs text-stone-500">FEB</span>
                                            <span className={`text-lg font-bold ${i === 1 ? 'text-primary' : 'text-stone-900'}`}>{10 + i}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Horarios Disponibles
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {slots.map((slot, i) => (
                                        <button key={i} className={`py-2 px-4 rounded-lg text-sm border ${i === 0 ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-200 text-stone-700 hover:border-stone-900'}`}>
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Nombre" className="w-full p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    <input type="text" placeholder="Apellido" className="w-full p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                </div>
                                <input type="email" placeholder="Correo Electrónico" className="w-full p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                <input type="tel" placeholder="Teléfono" className="w-full p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />

                                <Button className="w-full py-6 text-lg">Confirmar Visita</Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
