"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import GPTGimmick from "../gimmicks/GPTGimmick";
 
const GPT5 = ({ theme }) => {
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
              "--rotateY": `${-rotation.x * 7}deg`,
              "--rotateX": `${rotation.y * 3}deg`,
            }}
            className=" eventGimmick absolute top-0 left-0 z-10 bg-transparent h-full w-full flex flex-col justify-center items-center mb-5 "
          >
            <img
              src="/assets/banner/gpt5_banner.png"
              height={230}
              width={230}
            />
          </div>
          <div className="absolute top-0 left-0 bg-transparent h-full w-full flex flex-col justify-center items-center mb-5 ">
            <img
              src="/assets/banner/crispr_logo.png"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="w-full z-50 h-1/2 md:h-full   md:w-1/2 flex flex-col justify-between">
          <div className="">
            <OrganiserBadge text="CRISPR" theme="#7b1fa2" />
            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg  mt-4 mb-4 font-bold text-4xl md:text-5xl xl:text-6xl "
            >
              GPT 3.5 Solve-A-Thon
            </div>
            <div className="tracking-wider text-base xl:text-xl opacity-50">
              Prepare to embark on a journey into the future with the GPT 3.5
              Solve-A-Thon, a groundbreaking event that harnesses the power of
              coding and API synergy.
            </div>
          </div>
          <Link to="/events/gpt3" target="_blank">
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{
                backgroundColor: `${theme[0]}`,
              }}
              className="w-[200px]  h-[50px] mb-4  text-2xl  rounded-xl flex justify-center  items-center cursor-pointer"
            >
              Learn More
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GPT5;
