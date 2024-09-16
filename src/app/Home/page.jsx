import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import FindMore from "@/components/FindMore";
import EventsGrid from "@/components/bytes/EventsGrid";
import Speakers from "@/components/Speakers";
import RoboRumble from "@/components/bytes/RoboRumble";
import CodeFiesta from "@/components/bytes/CodeFiesta";
import EventCardTall from "@/components/bytes/EventCardLong";
import EventCardShort from "@/components/bytes/EventCardShort";
import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import ComingSoon from "@/components/comingSoon/ComingSoon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" -z-50 flex min-h-screen flex-col items-center justify-between bg-black text-white">
      {/* <Hero /> */}
      <Navbar />
      <ComingSoon />
      <About />
      <Events />

      <EventsGrid></EventsGrid>
      <FindMore />
      <Speakers />
      <Venue />
      <Contact />
      <Footer />
    </main>
  );
}
