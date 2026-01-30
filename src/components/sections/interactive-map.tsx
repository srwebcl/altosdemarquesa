"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, MapPin, Search } from "lucide-react"

// Mock Data for 18 Lots
const LOTS = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    size: 5000,
    price: 5000 + (i * 100), // UF
    status: [1, 5, 12].includes(i + 1) ? "sold" : [3, 8, 15].includes(i + 1) ? "reserved" : "available",
    description: `Sitio ${i + 1} con vista privilegiada al valle.`
}))

export function InteractiveMap() {
    const [selectedLot, setSelectedLot] = useState<typeof LOTS[0] | null>(null)
    const [filter, setFilter] = useState<'all' | 'available'>('all')

    const filteredLots = filter === 'all' ? LOTS : LOTS.filter(l => l.status === 'available')

    return (
        <section id="masterplan" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header simple y elegante */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-stone-100 pb-8">
                    <div>
                        <span className="text-primary font-medium tracking-widest uppercase text-xs block mb-2">
                            Masterplan
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
                            Disponibilidad Actualizada
                        </h2>
                    </div>

                    <div className="flex gap-2 bg-stone-50 p-1 rounded-lg">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 text-sm rounded-md transition-all ${filter === 'all' ? 'bg-white shadow-sm text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-900'}`}
                        >
                            Ver Todos
                        </button>
                        <button
                            onClick={() => setFilter('available')}
                            className={`px-4 py-2 text-sm rounded-md transition-all ${filter === 'available' ? 'bg-white shadow-sm text-green-700 font-medium' : 'text-stone-500 hover:text-stone-900'}`}
                        >
                            Solo Disponibles
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Map Area - Much cleaner */}
                    <div className="lg:w-2/3 relative">
                        <div className="relative aspect-[16/9] w-full bg-stone-100 rounded-3xl overflow-hidden shadow-sm group">
                            <Image
                                src="/images/plano_marquesa01.jpg"
                                alt="Masterplan Altos de Marquesa"
                                fill
                                className="object-contain hover:scale-[1.02] transition-transform duration-700"
                                sizes="(max-width: 1024px) 100vw, 75vw"
                            />

                            {/* Interactive Overlay Hint */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                                    Explora el Masterplan
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-stone-400 mt-4 text-center lg:text-left">
                            * El plano es referencial. Los deslindes exactos se confirman en terreno.
                        </p>
                    </div>

                    {/* List/Grid Area - Clean Layout */}
                    <div className="lg:w-1/3 flex flex-col h-[600px]">
                        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                            {filteredLots.map((lot) => (
                                <motion.button
                                    key={lot.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onClick={() => setSelectedLot(lot)}
                                    disabled={lot.status === 'sold'}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left group
                                ${lot.status === 'sold'
                                            ? 'bg-stone-50 border-stone-100 opacity-60'
                                            : 'bg-white border-stone-100 hover:border-primary/30 hover:shadow-md'
                                        }
                            `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                    ${lot.status === 'available' ? 'bg-primary/10 text-primary' :
                                                lot.status === 'reserved' ? 'bg-orange-100 text-orange-600' : 'bg-stone-200 text-stone-500'}
                                `}>
                                            {lot.id}
                                        </div>
                                        <div>
                                            <p className={`text-sm font-medium ${lot.status === 'sold' ? 'text-stone-400' : 'text-stone-900 group-hover:text-primary transition-colors'}`}>
                                                Sitio {lot.id}
                                            </p>
                                            <p className="text-xs text-stone-500">
                                                {lot.status === 'available' ? `${lot.size.toLocaleString('es-CL')} m²` :
                                                    lot.status === 'reserved' ? 'Reservado' : 'Vendido'}
                                            </p>
                                        </div>
                                    </div>

                                    {lot.status === 'available' && (
                                        <div className="text-right">
                                            <span className="text-xs font-bold text-stone-900 block">{lot.price.toLocaleString('es-CL')} UF</span>
                                            <span className="text-[10px] text-green-600 uppercase font-medium">Disponible</span>
                                        </div>
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Detail Modal */}
            <AnimatePresence>
                {selectedLot && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLot(null)}
                            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="h-32 bg-stone-900 relative p-6 flex items-end">
                                <button
                                    onClick={() => setSelectedLot(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div>
                                    <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2
                                ${selectedLot.status === 'available' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}
                            `}>
                                        {selectedLot.status === 'available' ? 'Disponible' : 'Reservado'}
                                    </span>
                                    <h3 className="text-3xl font-serif text-white">Sitio {selectedLot.id}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Superficie</p>
                                        <p className="text-xl font-bold text-stone-900">{selectedLot.size.toLocaleString('es-CL')} m²</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Valor</p>
                                        <p className="text-xl font-bold text-primary">{selectedLot.price.toLocaleString('es-CL')} UF</p>
                                    </div>
                                </div>

                                <p className="text-stone-600 text-sm leading-relaxed mb-8 bg-stone-50 p-4 rounded-xl border border-stone-100">
                                    {selectedLot.description} <br />
                                    <span className="block mt-2 text-stone-400 italic font-serif">"El lugar perfecto para tu proyecto de vida."</span>
                                </p>

                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-stone-200"
                                        onClick={() => setSelectedLot(null)}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button
                                        className="flex-[2] bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                                        onClick={() => {
                                            const message = encodeURIComponent(`Hola, estoy interesado en el Sitio ${selectedLot.id} de Altos de Marquesa. ¿Me podrían dar más información?`);
                                            window.open(`https://wa.me/56989921014?text=${message}`, '_blank');
                                        }}
                                    >
                                        Cotizar en WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
