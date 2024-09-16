"use client";
import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
import { useState, useEffect, useRef } from "react";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
 
import { useInView } from "framer-motion";
import {Link} from "react-router-dom";
const About = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      var marginEdit = (250 / 1200) * window.innerWidth - 125;

      setHeight(marginEdit);
    }

    // Check if window is defined
    if (typeof window !== "undefined") {
      // Set initial height
      setHeight((250 / 1200) * window.innerWidth - 125);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }

    // // Add event listener
    // window.addEventListener("resize", handleResize);

    // // Remove event listener on cleanup
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={divRef}
      id="about"
      className="flex lg:w-[75vw] md:mr-0 md:mt-0  -mt-24
       mb-24"
       
      
    >
      <div className="w-[8%] mr-2 text-3xl flex justify-center relative ">
        <div
          className="flex flex-col  items-center absolute h-full "
          style={{
            transform: `translate(0,${height + 5}px)`,
          }}
        >
          <div className="relative text-blue-200">
            <FiCode className="hidden md:block" />
            <div className="absolute top-[-16px] left-0 -z-10 h-[64px] w-full bg-blue-500 blur-[30px]"></div>
          </div>
          <motion.div
            style={{
              background: `linear-gradient(#d2a8ff, #a371f7 10%, #0C14CB 50%,  #188ABA)`,
            }}
            initial={{ height: "0%" }}
            animate={
              isInView
                ? { height: "100%", opacity: [0.4, 1] }
                : { opacity: [0.4, 1] }
            }
            transition={{
              opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              },
              height: {
                duration: 2,
                ease: "easeOut",
              },
            }}
            exit={{ height: "0%" }}
            className="w-[3px] h-[100%] rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {/* <div className="mb-8 opacity-90 w-[150px]  lg:w-[200px]">
          <img src="/assets/logo/sbi_logo.svg" width={200} height={200} />
        </div> */}
        <Tag text="About" />
        <div className="text-4xl sm:text-7xl font-semibold mt-16 mb-10">
          TantraFiesta
        </div>
        <div className="tracking-wider font-light text-xl sm:text-2xl  w-full opacity-50 mb-16">
          is the flagship annual technical extravaganza proudly presented by the
          Indian Institute of Information Technology, Nagpur (IIITN). With a
          rich tradition of promoting research, problem-solving skills, and
          fostering a sense of community among tech enthusiasts, TantraFiesta
          has evolved into a premier event on the tech calendar.
        </div>

        <div>
          <Link
            to="/sponsors"
            className=" tracking-widest py-2 px-4 font-light   w-[100px] text-center rounded-full border border-[#A418BA] bg-[#A418BA] text-white hover:bg-transparent hover:text-[#A418BA]"
          >
            Sponsors
          </Link>
          <div className="flex flex-col   justify-start mt-3 items-start  w-1/2">
            <div className="mt-3 ml-2">
              Title Sponsor:
              <img
                className="mt-2"
                src="/assets/logo/yatra_logo.png"
                width={150}
                height={100}
              />
            </div>
            <div className="mt-3 ml-2">
              Co-Sponsor:
              <img
                className="mt-2"
                src="/assets/logo/sbi_logo.svg"
                width={150}
                height={100}
              />
            </div>
            <div className="mt-3 ml-2">
              Partners:
              <div className="flex flex-wrap justify-between mt-2">
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/vivo_logo.png"
                    fill={true}
                  />
                </div>

                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/ease_logo.png"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/ntpc_logo.png"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/ninjas_logo.png"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/siuk_logo.png"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/hcl_logo.png"
                    fill={true}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between mt-2">
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/gfg_logo_extended.svg"
                    fill={true}
                  />
                </div>

                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/koed_logo.svg"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/tcs_logo.png"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] ml-2 relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/wolfram_logo.svg"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/appx_logo.jpeg"
                    fill={true}
                  />
                </div>
                <div className="h-[80px] ml-2 w-[120px] relative text-xs text-center flex flex-col justify-center items-center">
                  <img
                    className=" object-scale-down"
                    src="/assets/logo/tsecond_logo.svg"
                    fill={true}
                  />
                </div>
              </div>
            </div>
            {/* <div className="w-full  min-w-[300px] flex justify-start mt-3 items-center">
             
            </div>
            <div className="w-full min-w-[300px] flex justify-start mt-3 items-center">
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
