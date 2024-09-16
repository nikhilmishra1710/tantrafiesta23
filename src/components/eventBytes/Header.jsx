"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "../bytes/OrganiserBadge";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
 
const Header = ({
  title,
  theme,
  children,
  details,
  organizer,
  url,
  sponsor,
  sponsor_url,
  width,
}) => {
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
      className="eventCard z-20 col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[400px] "
    >
      <div
        style={{ backgroundColor: "#000000" }}
        className="eventCard-content  flex flex-col-reverse md:flex-row"
      >
        <div
          style={{
            "--rotateY": `${-rotation.x * 3}deg`,
            "--rotateX": `${rotation.y * 3}deg`,
          }}
          className="eventGimmick w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full md:h-full "
        >
          {children}
        </div>
        <div className="w-full h-2/3 md:h-full z-10  md:w-1/2 flex flex-col justify-between">
          <div className="">
            <OrganiserBadge text={organizer} theme={theme[1]} />
            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg  mt-4 mb-8 font-bold text-4xl md:text-6xl "
            >
              {title}
            </div>
            <div className="tracking-wider xl:text-xl opacity-50">
              {details}
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mb-4 justify-between items-center">
            <Link to={url} target="_blank">
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: `${theme[0]}`,
                }}
                className="w-[200px] h-[50px] mt-8 md:mt-0 md:mb-0 mb-4  text-2xl  rounded-xl flex justify-center  items-center cursor-pointer"
              >
                Register Now
              </motion.div>
            </Link>
            {sponsor && (
              <Link to={sponsor_url}>
                <img src={sponsor} height={50} width={width ? width : 200} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
