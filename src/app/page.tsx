import { ContactForm } from "@/components/sections/ContactForm/ContactForm";
import { Cooperation } from "@/components/sections/Cooperation/Cooperation";
import { IntroSection } from "@/components/sections/Intro/IntroSection";
import { OfferIntro } from "@/components/sections/OfferIntro/OfferIntro";
import { Products } from "@/components/sections/Products/Products";
import { SatisfiedClients } from "@/components/sections/SatisfiedClients/SatisfiedClients";
import { Footer } from "@/components/sections/shared/Footer/Footer";
import { Navbar } from "@/components/sections/shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <IntroSection />
      <SatisfiedClients />
      <OfferIntro />
      <Products />
      <Cooperation />
      <ContactForm />
      <Footer />
    </main>
  );
}
