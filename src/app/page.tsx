import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
      <Hero />
      <Mission />
      <Team />
      <Contact />
    </main>
  );
}
