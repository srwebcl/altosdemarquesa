"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        timeframe: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        // Here you would handle success logic
        alert("Mensaje enviado con éxito")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section id="contacto" className="py-24 bg-stone-900 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 blur-3xl -translate-y-1/4 translate-x-1/4 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/5 blur-3xl translate-y-1/4 -translate-x-1/4 rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-primary font-medium tracking-widest uppercase text-xs">
                            Comienza tu Historia
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Hablemos de tu Futuro
                        </h2>
                        <p className="text-stone-400 text-lg max-w-xl mx-auto">
                            Déjanos tus datos y un asesor especializado te contactará para resolver todas tus dudas sobre Altos de Marquesa.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-stone-300 ml-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/10"
                                        placeholder="Juan Pérez"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-stone-300 ml-1">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/10"
                                        placeholder="+56 9 1234 5678"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-stone-300 ml-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/10"
                                        placeholder="juan@ejemplo.com"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="timeframe" className="text-sm font-medium text-stone-300 ml-1">¿Cuándo te gustaría invertir?</label>
                                    <select
                                        name="timeframe"
                                        id="timeframe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/10 [&>option]:text-black"
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled selected>Selecciona una opción</option>
                                        <option value="inmediato">Lo antes posible</option>
                                        <option value="3meses">En los próximos 3 meses</option>
                                        <option value="6meses">En 6 meses o más</option>
                                        <option value="info">Solo busco información</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-stone-300 ml-1">Mensaje (Opcional)</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/10 resize-none"
                                    placeholder="Cuéntanos qué estás buscando en un terreno..."
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20 w-full md:w-auto"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Solicitar Información
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
