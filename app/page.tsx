import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Gear from "@/components/Gear";
import Results from "@/components/Results";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

// Single-page composition - App Router root page.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Gear />
        <Results />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
