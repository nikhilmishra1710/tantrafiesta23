"use client";

import { motion } from "framer-motion";
import "./comingSoon.css";
// import Logo from "/assets/logo2.svg";
// import LogoPart2 from "/assets/f.svg";
import Background from "./Background";

export default function ComingSoon() {
    
    return (
        <>
            <div className="flex md:min-h-screen h-auto flex-col items-center justify-between bg-black text-white p-4">
                <Background />
                <div className="absolute w-full h-full uppercase flex flex-col justify-center items-center text-4xl md:text-7xl overflow-hidden">
                    <div className="w-full h-52 flex justify-center items-center">
                        <div className="absolute">
                            <img src="/assets/logo2.svg" width={140} height={140} alt="logo2" />
                        </div>
                        <motion.div className="absolute" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4, delay: 0.8 }}>
                            <img src="/assets/f.svg" width={140} height={140} alt="f" />
                        </motion.div>
                    </div>
                    <div className="text-white font-bord flex">
                        T
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            a
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }}>
                            nt
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.4 }}>
                            ra
                        </motion.span>
                        <div >
                            <span className="gradient-text-noAnim">f</span>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            <span className="gradient-text">iesta</span>
                            </motion.span>
                        </div>
                    </div>
                    <p className="font-bord">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            20
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }}>
                            2
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.4 }}>
                            4
                        </motion.span>
                    </p>
                    <p className="font-buenard md:text-6xl text-2xl">
                        C
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            om
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }}>
                            ming
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2.4 }}>
                            <span> </span>
                            Soon
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop", delay: 3 }}>
                            .
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 4, repeat: Infinity, repeatType: "loop" }}>
                            .
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 5, repeat: Infinity, repeatType: "loop" }}>
                            .
                        </motion.span>
                    </p>
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 4, delay: 4 }}
                        className="absolute h-full w-full -z-10 overflow-hidden"
                    >
                       
                    </motion.div>
                </div>
            </div>
        </>
    );
}
