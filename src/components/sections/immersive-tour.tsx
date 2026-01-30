"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Maximize } from "lucide-react"

export function ImmersiveTour() {
    return (
        <section id="tour" className="py-20 bg-stone-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            Inmersión Total
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold">
                            Recorre tu Futuro Hogar
                        </h2>
                        <p className="text-stone-400 text-lg">
                            Explora cada rincón de Altos de Marquesa sin salir de casa.
                            Nuestra tecnología 360º te permite visualizar las vistas reales desde cada parcela.
                        </p>
                    </div>

                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-stone-900 gap-2">
                        <Maximize className="w-4 h-4" />
                        Ver en Pantalla Completa
                    </Button>
                </div>

                {/* 360 Iframe Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-stone-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                    <iframe
                        src="https://www.lanube360.com/marquesa/"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        title="Tour Virtual Altos de Marquesa"
                    ></iframe>

                    {/* Overlay for interaction hint (optional, disappears on click logic handled by iframe usually) 
                 Since iframe captures events, we just present it clearly.
             */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10 pointer-events-none">
                        Interactivo 360º
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <p className="text-sm text-stone-500 flex items-center gap-2">
                        ¿Prefieres verlo en persona?
                        <a href="#" className="text-primary hover:underline flex items-center gap-1">
                            Agendar Visita <ExternalLink className="w-3 h-3" />
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
