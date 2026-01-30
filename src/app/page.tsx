import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ImmersiveTour } from "@/components/sections/immersive-tour";
import { InteractiveMap } from "@/components/sections/interactive-map";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustSection />
      <GallerySection />
      <ImmersiveTour />
      <InteractiveMap />
      <ContactForm />
    </main>
  );
}
