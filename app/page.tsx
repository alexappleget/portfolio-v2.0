import { About } from "@/sections/About/about";
import { Contact } from "@/sections/Contact/contact";
import { Footer } from "@/sections/Footer/footer";
import { Hero } from "@/sections/Hero/hero";
import { Services } from "@/sections/Services/services";

export default function Home() {
  return (
    <main className="bg-[#20242d] px-8 md:px-16 lg:px-32">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
