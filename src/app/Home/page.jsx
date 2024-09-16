import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import FindMore from "@/components/FindMore";
import EventsGrid from "@/components/bytes/EventsGrid";
import Speakers from "@/components/Speakers";
import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import ComingSoon from "@/components/comingSoon/ComingSoon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkFontLoaded();
    }, []);

    const checkFontLoaded = () => {
        document.fonts.ready.then(() => {
            setLoading(false);
        });
    };

    return (
        <main className=" -z-50 flex min-h-screen flex-col items-center justify-between bg-black text-white">
            {/* <Hero /> */}
            {loading ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <Loading />
                </div>
            ) : (
                <>
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
                </>
            )}
        </main>
    );
}
