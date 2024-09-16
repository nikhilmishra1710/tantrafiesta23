"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
 
const Innov = ({ theme }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 4;
    const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 4;

    // Update position state

    setRotation({ x, y });
  };

  // Define a function that resets the rotation state to zero
  const handleOnLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    // Get card element reference
    const card = cardRef.current;
    // Add event listeners for mousemove, touchmove, and mouseleave events
    card.addEventListener("mousemove", handleOnMove);
    card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    card.addEventListener("mouseleave", handleOnLeave);
    // Return a cleanup function that removes event listeners
    return () => {
      card.removeEventListener("mousemove", handleOnMove);
      card.removeEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
      card.removeEventListener("mouseleave", handleOnLeave);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      style={{
        "--rotateY": `${rotation.x}deg`,
        "--rotateX": `${rotation.y}deg`,
        "--gradientBefore": `${theme[0]}33`,
        "--gradientAfter": `${theme[0]}aa`,
      }}
      className="eventCard col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[400px] "
    >
      <div className="eventCard-content flex flex-col-reverse md:flex-row">
        <div className="relative w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-1/2 md:h-full ">
          <div
            style={{
              "--rotateY": `${-rotation.x * 3}deg`,
              "--rotateX": `${rotation.y * 3}deg`,
            }}
            className="  eventGimmick w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full md:h-full"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],

                transition: {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 3,
                },
              }}
              className=" md:ml-[100px] bg-transparent h-full w-full flex flex-col justify-center"
            >
              <img
                src="/assets/banner/innov_banner.svg"
                height={300}
                width={400}
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full h-1/2 md:h-full   md:w-1/2 flex flex-col justify-between">
          <div className="">
            <OrganiserBadge text="UDYAM" theme="#7b1fa2" />
            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg  mt-4 mb-8 font-bold text-4xl md:text-6xl "
            >
              Innovation Oasis
            </div>
            <div className="tracking-wider text-xl opacity-50">
              Innovation Oasis is an event that fosters innovation and
              collaboration, encouraging aspiring entrepreneurs to unleash their
              creativity.
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center">
            <Link to="/events/innov" target="_blank">
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: `${theme[0]}`,
                }}
                className="w-[200px] h-[50px] mt-8 md:mt-0 mb-4  text-2xl  rounded-xl flex justify-center  items-center cursor-pointer"
              >
                Learn More
              </motion.div>
            </Link>
            <Link to="https://tsecond.us/" target="_blank">
              <img
                className="z-50 mb-4 ml-2 md:mr-10"
                src="/assets/logo/tsecond_logo.svg"
                height={25}
                width={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innov;
