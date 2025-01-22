import { Contact } from "@/components/sections/Contact/Contact";
import { Cooperation } from "@/components/sections/Cooperation/Cooperation";
import { IntroSection } from "@/components/sections/Intro/IntroSection";
import { OfferIntro } from "@/components/sections/OfferIntro/OfferIntro";
import { Products } from "@/components/sections/Products/Products";
import { Footer } from "@/components/sections/shared/Footer/Footer";
import { Navbar } from "@/components/sections/shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <IntroSection />
      <OfferIntro />
      <Products />
      <Cooperation />
      <Contact />
      <Footer />
    </main>
  );
}
