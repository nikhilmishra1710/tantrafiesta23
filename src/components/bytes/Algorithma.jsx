"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
 
const Algorithmia = ({ theme }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [min, setMin] = useState(false);
  const cardRef = useRef(null);
  const [tab, setTab] = useState(0);

  const activeButtonStyle = {
    opacity: 1,
  };
  //function to remove cursor
  const hideCursor = () => {
    const cursor = document.querySelector(".custom_cursor");

    cursor.style.opacity = 0;
  };
  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 3;
    const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 3;

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
        "--rotateX": `${-rotation.y}deg`,
        "--gradientBefore": `${theme[0]}1f`,
        "--gradientAfter": `${theme[0]}aa`,
      }}
      className="eventCard col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[400px]"
    >
      <div className="eventCard-content flex flex-col-reverse items-center md:flex-row">
        <div className="w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full flex flex-col justify-between">
          <div>
            <OrganiserBadge text="DotSlash" theme={theme[0]} />
            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg mt-4 mb-8 font-bold text-4xl md:text-6xl "
            >
              Algorithmia
            </div>
            <div className="tracking-wider text-xl opacity-50">
              An ICPC-type contest that offers a platform for every coding geek
              out there, to hone their coding skills and compete with the rising
              coders.
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-between items-center mt-4">
            <Link to="/events/algorithmia" target="_blank">
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: `${theme[1]}`,
                }}
                className="w-[200px] h-[50px]  mb-4  text-2xl  rounded-xl flex justify-center  items-center cursor-pointer"
              >
                Learn More
              </motion.div>
            </Link>
            <Link to="https://www.codingninjas.com/" target="_blank">
              <img
                className="z-50 mb-4 ml-2 md:mr-10"
                src="/assets/logo/ninjas_logo.png"
                height={25}
                width={150}
              />
            </Link>
          </div>
        </div>
        <div
          style={{
            "--rotateY": `${-rotation.x * 3}deg`,
            "--rotateX": `${rotation.y * 3}deg`,
          }}
          className="eventGimmick w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full md:h-full "
        >
          <div className=" bg-transparent absolute right-10 h-full  flex flex-col justify-center">
            <img
              src="/assets/banner/genathon_banner.svg"
              height={390}
              width={390}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithmia;
