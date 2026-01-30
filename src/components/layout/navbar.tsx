"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useUI } from "@/context/ui-context"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { openBooking } = useUI()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Características", href: "#caracteristicas" },
        { name: "Tour 360", href: "#tour" },
        { name: "Masterplan", href: "#masterplan" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? "bg-white/80 backdrop-blur-md border-stone-200 py-3" : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo - Maximized Visibility */}
                <Link href="/" className="relative z-50 flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <div className="relative h-16 w-56 md:h-20 md:w-72 transition-all duration-500">
                        <img
                            src="/images/logo-web.svg"
                            alt="Altos de Marquesa"
                            className={`object-contain object-left h-full w-full transition-all duration-500 ${!isScrolled && !isMobileMenuOpen ? "invert brightness-0 drop-shadow-md" : ""}`}
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5 ${isScrolled ? "text-stone-600 hover:text-primary" : "text-white/90 hover:text-white drop-shadow-sm"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "default" : "white"}
                        size="default"
                        className={`shadow-xl hover:shadow-2xl transition-all duration-300 font-serif tracking-wide ${isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-stone-900 hover:bg-stone-100"}`}
                        onClick={openBooking}
                    >
                        Agendar Visita
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="text-stone-400 w-8 h-8" />
                    ) : (
                        <Menu className={`w-8 h-8 ${isScrolled ? "text-stone-900" : "text-white drop-shadow-md"}`} />
                    )}
                </button>
            </div>

            {/* Mobile Menu - Full Screen Pro */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-stone-950/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-serif text-stone-300 hover:text-white transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary text-white text-lg px-8 py-6 rounded-full shadow-2xl shadow-primary/20"
                                    onClick={() => { setIsMobileMenuOpen(false); openBooking(); }}
                                >
                                    Agendar Visita
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-10 text-stone-600 text-xs tracking-widest uppercase"
                            >
                                Valle & Mar Inmobiliaria
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
