"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Users } from "lucide-react"
import { useUI } from "@/context/ui-context"

export function HeroSection() {
    const { openBooking } = useUI()

    const scrollToMap = () => {
        const element = document.getElementById('masterplan');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image/Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
                <Image
                    src="/images/foto_26.jpg"
                    alt="Altos de Marquesa - Vista Aérea"
                    fill
                    priority
                    className="object-cover animate-in fade-in zoom-in duration-1000"
                    sizes="100vw"
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-white/90">
                            Oportunidad de Lanzamiento
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 text-balance shadow-black/50 drop-shadow-2xl">
                        Tu Vida Soñada en <br /><span className="text-primary-foreground italic">Altos de Marquesa</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed text-balance drop-shadow-md">
                        Exclusivos sitios de 5.000 m² urbanizados en el Valle de Elqui.
                        Conectividad, naturaleza y plusvalía garantizada.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={openBooking}
                            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-[0_0_20px_-5px_rgba(63,98,18,0.5)] hover:shadow-[0_0_30px_-5px_rgba(63,98,18,0.7)] transition-all duration-300 border border-primary/20"
                        >
                            Agendar una Visita
                        </Button>

                        <Button
                            onClick={scrollToMap}
                            variant="white"
                            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-stone-900 text-lg px-8 py-6 rounded-full transition-all duration-300"
                        >
                            Explorar Masterplan
                        </Button>
                    </div>

                    {/* Social Proof Widget */}
                    <div className="mt-12 flex justify-center">
                        <div className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-3 border border-white/10">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-black flex items-center justify-center text-[10px] text-black font-bold overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-white/80">
                                <span className="font-bold text-white">12 personas</span> están viendo este proyecto ahora
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    )
}
