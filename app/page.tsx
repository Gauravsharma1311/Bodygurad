import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { VideoSection } from "@/components/video-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
