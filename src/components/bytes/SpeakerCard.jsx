"use client";

import { useState, useEffect, useRef } from "react";
 
import { FaLinkedin } from "react-icons/fa6";
import {Link} from "react-router-dom";
const chars = "0101";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))];
const randomString = (length) => [...Array(length)].map(randomChar).join("");

const SpeakerCard = ({ name, details, link, image }) => {
  const [letters, setLetters] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    // Initialize letters with a random string
    setLetters(randomString(1500));
  }, []);

  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Update position state
    setPosition({ x, y });
    // Update letters state with a new random string
    setLetters(randomString(1500));
  };

  useEffect(() => {
    // Get card element reference
    const card = cardRef.current;
    // Add event listeners for mousemove and touchmove events
    card.addEventListener("mousemove", handleOnMove);
    card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    // Return a cleanup function that removes event listeners
    return () => {
      card.removeEventListener("mousemove", handleOnMove);
      card.removeEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    };
  }, []);
  return (
    <div className="card-body min-w-[350px] max-w-[400px] h-[500px] mb-16 border border-white/10  rounded-3xl p-2">
      <div className="card_wrapper relative h-4/5">
        <div
          className="card overflow-hidden relative cursor-pointer flex justify-center items-center rounded-3xl mb-10 h-full"
          ref={cardRef}
        >
          <div className="card_image flex justify-center items-center z-10  relative">
            <img className="w-[200px] rounded-full" src={image} />
          </div>
          <div className="card-gradient"></div>
          <div
            className="card-letters break-all absolute text-sm font-medium"
            style={{
              "--x": `${position.x}px`,
              "--y": `${position.y + 150}px`,
            }}
          >
            {letters}
          </div>
        </div>
      </div>
      <div className="h-1/4 w-full flex flex-col p-5 justify-center">
        <div className="text-2xl">{name}</div>
        <Link to={link}
          target="_blank"
          className="text-3xl hover:text-blue-800 cursor-pointer flex items-center"
        >
          <FaLinkedin />
          <p className="text-sm ml-2">{details}</p>
        </Link>
      </div>
    </div>
  );
};
export default SpeakerCard;
