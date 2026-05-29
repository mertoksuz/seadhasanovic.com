import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Gear from "@/components/Gear";
import Results from "@/components/Results";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

// Single-page composition - App Router root page.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            "IPSC",
            "IDPA",
            "DIVISION · SSP",
            "CANIK RIVAL-S",
            "9×19",
            "BOSNA I HERCEGOVINA",
            "PRACTICAL PISTOL",
            "BALKAN CIRCUIT",
          ]}
        />
        <Bio />
        <Gear />
        <Results />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
