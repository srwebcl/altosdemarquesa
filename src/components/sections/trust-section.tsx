"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Droplets, Zap, Shield, Activity, Leaf, Check } from "lucide-react"

export function TrustSection() {
    const amenities = [
        {
            icon: <Droplets className="w-5 h-5" />,
            title: "Agua",
            description: "Suministro garantizado."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Luz",
            description: "Conexión subterránea."
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Seguridad",
            description: "Acceso protegido."
        },
        {
            icon: <Activity className="w-5 h-5" />,
            title: "Deporte",
            description: "Áreas recreativas."
        }
    ]

    return (
        <section id="caracteristicas" className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/foto_10.jpg"
                                alt="Naturaleza Altos de Marquesa"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-stone-900/10" />
                        </div>

                        {/* Float Card */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-stone-100 hidden md:block">
                            <h4 className="font-serif text-lg font-bold text-primary mb-2">Compromiso Valle & Mar</h4>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                Nuestra prioridad es mantener la armonía del entorno.
                                <span className="font-medium text-stone-900 block mt-1">Más de 50 hectáreas de conservación.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">
                                Estilo de Vida
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-tight">
                                Donde el Silencio <br />
                                <span className="italic text-stone-500">es el Lujo.</span>
                            </h2>
                            <p className="text-stone-600 mt-6 text-lg leading-relaxed text-pretty">
                                Altos de Marquesa no es solo tierra; es un refugio diseñado para quienes valoran la privacidad, el diseño y la conexión honesta con la naturaleza.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-stone-200 pt-10">
                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl text-stone-900">Servicios Básicos</h3>
                                <ul className="space-y-3">
                                    {amenities.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-stone-600 text-sm">
                                            <span className="bg-primary/10 text-primary p-1.5 rounded-full">
                                                <Check className="w-3 h-3" />
                                            </span>
                                            {item.title}: {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-serif text-2xl text-stone-900">Sostenibilidad</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm flex items-start gap-3">
                                        <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-stone-900 text-sm">Huella Neutral</h4>
                                            <p className="text-xs text-stone-500 mt-1">Reforestación nativa activa.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm flex items-start gap-3">
                                        <div className="text-primary font-bold text-lg leading-none">A+</div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 text-sm">Eficiencia</h4>
                                            <p className="text-xs text-stone-500 mt-1">Diseño de bajo impacto.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
