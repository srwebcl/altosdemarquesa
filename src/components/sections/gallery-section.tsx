"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Expand, ChevronLeft, ChevronRight } from "lucide-react"

const IMAGES = [
    { src: "/images/foto_26.jpg", alt: "Vista Panorámica del Valle" },
    { src: "/images/foto_10.jpg", alt: "Flora Nativa y Entorno" },
    { src: "/images/foto_26.jpg", alt: "Atardeceres Únicos" },
    { src: "/images/foto_10.jpg", alt: "Detalles del Paisaje" },
    { src: "/images/foto_26.jpg", alt: "Conectividad y Acceso" },
    { src: "/images/foto_10.jpg", alt: "Vida Tranquila en Marquesa" },
]

export function GallerySection() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selectedId !== null) {
            setSelectedId((selectedId + 1) % IMAGES.length)
        }
    }

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selectedId !== null) {
            setSelectedId((selectedId - 1 + IMAGES.length) % IMAGES.length)
        }
    }

    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-primary font-medium tracking-widest uppercase text-xs mb-3 block">
                            Galería Fotográfica
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                            La Esencia del Valle
                        </h2>
                        <p className="text-stone-600 mt-4 text-pretty">
                            Descubre la belleza natural y la tranquilidad que definen a Altos de Marquesa. Un entorno privilegiado para tu nueva vida.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-xs text-stone-400 uppercase tracking-widest border-b border-stone-200 pb-1">
                            {IMAGES.length} Fotografías
                        </p>
                    </div>
                </div>

                {/* Clean, Uniform Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {IMAGES.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`img-${index}`}
                            onClick={() => setSelectedId(index)}
                            className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg cursor-zoom-in bg-stone-200 shadow-sm hover:shadow-xl transition-all duration-500"
                            whileHover={{ y: -5 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                            {/* Hover Caption */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-black/60 to-transparent">
                                <p className="text-white font-serif text-lg">{img.alt}</p>
                                <div className="flex items-center gap-2 text-white/80 text-xs mt-1 uppercase tracking-wider font-medium">
                                    <Expand className="w-3 h-3" /> Ver pantalla completa
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedId !== null && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">

                            {/* Backdrop Click to Close */}
                            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedId(null)} />

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                            </button>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all"
                            >
                                <X className="w-6 h-6 md:w-8 md:h-8" />
                            </button>

                            {/* Main Image */}
                            <motion.div
                                layoutId={`img-${selectedId}`}
                                className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] mx-4 pointer-events-none"
                            >
                                <Image
                                    src={IMAGES[selectedId].src}
                                    alt={IMAGES[selectedId].alt}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="100vw"
                                />
                                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-auto">
                                    <p className="inline-block px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                        {IMAGES[selectedId].alt}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
