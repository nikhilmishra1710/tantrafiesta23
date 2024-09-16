"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
 
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
const EventCardShort = ({
  organizer,
  title,
  details,
  theme,
  logo,
  textColor,
  url,
  image,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

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
        "--gradientBefore": `${theme[1]}33`,
        "--gradientAfter": `${theme[1]}aa`,
      }}
      className="eventCard w-3/4 md:w-full h-[400px]"
    >
      <img
        className=" z-50 absolute h-10 w-10 md:h-20 md:w-20 top-2 right-2"
        src={logo}
        height={80}
        width={80}
      />
      <div className="eventCard-content p-2 relative flex flex-col justify-between overflow-hidden">
        {image && (
          <img
            className="absolute  -z-10 bottom-0 lg:right-10  opacity-20 "
            src={image}
            height={400}
            width={400}
          />
        )}
        <div>
          <OrganiserBadge text={organizer} theme={theme[0]} />
          <div
            style={{
              "--c1": `${theme[0]}`,
              "--c2": `${theme[1]}`,
              "--c3": `${theme[2]}`,
            }}
            className="transText transBg  overflow-hidden mt-4 mb-7 font-bold pb-1 text-4xl md:text-5xl z-10"
          >
            {title}
          </div>
          <div className="tracking-wider text-sm sm:text-base xl:text-xl opacity-50 w-full ">
            {details}
          </div>
        </div>
        <Link to={url} target="_blank">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{
              backgroundColor: `${theme[1]}`,
              color: `${textColor ? textColor : "white"}`,
            }}
            className="w-[150px] text-center p-2 text-xl  md:m-2 rounded-2xl "
          >
            <p>Learn More</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default EventCardShort;
