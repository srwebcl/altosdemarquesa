import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div className="relative h-12 w-48">
                            <img
                                src="/images/logo-web.webp"
                                alt="Altos de Marquesa"
                                className="object-contain object-left h-full w-full brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Un proyecto exclusivo de Inmobiliaria Valle & Mar.
                            Vive la tranquilidad del Valle de Elqui con la conectividad que necesitas.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary" />
                                <a href="tel:+56989921014" className="hover:text-white transition-colors">+56 9 8992 1014</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary" />
                                <a href="mailto:contacto@valleymar.cl" className="hover:text-white transition-colors">contacto@valleymar.cl</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                                <span>
                                    Localidad de Marquesa, Valle de Elqui.<br />
                                    A 20 min de La Serena (Ruta 41).
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Enlaces</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#caracteristicas" className="hover:text-primary transition-colors">Características</Link></li>
                            <li><Link href="#masterplan" className="hover:text-primary transition-colors">Masterplan</Link></li>
                            <li><Link href="#tour" className="hover:text-primary transition-colors">Tour Virtual 360º</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
                    <p>© {new Date().getFullYear()} Inmobiliaria Valle & Mar SPA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
