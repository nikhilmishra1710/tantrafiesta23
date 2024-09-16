"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
 
import { FaInstagram, FaDiscord } from "react-icons/fa6";
const Workshop = ({ organizer, theme, details, url }) => {
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
      className="eventCard col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[440px] "
    >
      <div className="eventCard-content flex flex-col-reverse md:flex-row">
        <div
          style={{
            "--rotateY": `${-rotation.x * 3}deg`,
            "--rotateX": `${rotation.y * 3}deg`,
          }}
          className="eventGimmick w-full mt-4 md:mt-0 md:w-1/2 h-full md:h-full "
        >
          <Link
            to={url}
            className=" md:ml-8 bg-transparent h-full w-full flex flex-col justify-center"
          >
            <img
              className="rounded-xl "
              src="/assets/banner/gamedev_banner.jpg"
              height={380}
              width={380}
            />
          </Link>
        </div>
        <div className="w-full z-10 h-2/3 md:h-full   md:w-1/2 flex flex-col justify-between">
          <div className="">
            <Link to={url} target="_blank">
              <OrganiserBadge text={organizer} theme={theme[1]} />
            </Link>

            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg  mt-4 mb-4 font-bold text-2xl md:text-4xl "
            >
              LevelUp: <i>Intro to Game Dev</i>
            </div>
            <div className="tracking-wider opacity-50 text-sm xl:text-base">
              Your gateway to the world of game development! Hosted by
              GameDevUtopia, on 13th October from 2-5 PM is perfect for aspiring
              game creators. Try your hand at practical exercises, & receive
              participation certificates. Plus, stand a chance to win cool
              LevelUp T-shirts. Grab your laptops and unlock your game
              development potential!
            </div>
            <div className="w-full bg-white/5 text-green-600 font-bold mt-2 p-2 rounded-2xl">
              <Typewriter
                className=" opacity-50"
                options={{
                  delay: 30,
                  cursor: "|",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      "Timings: 2 PM to 5PM <br> Date: 13th October, 2023"
                    )

                    .start();
                }}
              />
            </div>
          </div>
          <div className="flex flex-row  justify-start gap-2 items-center">
            <Link
              to="https://instagram.com/gamedevutopia?igshid=MmU2YjMzNjRlOQ=="
              target="_blank"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-[50px] hover:text-pink-400 h-[50px]  mb-4  text-4xl  rounded-xl flex justify-center  items-center cursor-pointer"
              >
                <FaInstagram />
              </motion.div>
            </Link>
            <Link to="https://discord.gg/hbpSnBXtwq" target="_blank">
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-[50px] hover:text-blue-600  h-[50px] mb-4  text-4xl  rounded-xl flex justify-center  items-center cursor-pointer"
              >
                <FaDiscord />
              </motion.div>
            </Link>
            {/* <Link to="https://www.geeksforgeeks.org/" target="_blank">
              <img
                className="z-50 mb-4 ml-2 md:mr-10"
                src="/assets/logo/gfg_logo.svg"
                height={25}
                width={250}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
