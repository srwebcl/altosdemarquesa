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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-2" : "bg-transparent py-4 pt-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    <span className={isScrolled ? "text-primary" : "text-white drop-shadow-md"}>
                        Altos de Marquesa
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-muted-foreground" : "text-white/90 hover:text-white drop-shadow-sm"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "default" : "white"}
                        size="sm"
                        className="shadow-lg"
                        onClick={openBooking}
                    >
                        Contacto
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-foreground" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-foreground" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 glass border-b border-border p-4 md:hidden shadow-lg"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-foreground hover:text-primary p-2 rounded-md hover:bg-muted/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); openBooking(); }}>Contacto</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
