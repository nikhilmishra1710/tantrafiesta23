"use client";
import React, { useEffect, useRef } from "react";

const CardSection = ({ children, start, end }) => {
  const cardsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollCard = scrollRef.current;
    // Add a load event listener to the window object
    scrollCard.scroll({
      top: start,
      behavior: "smooth",
    });
    setTimeout(() => {
      scrollCard.scroll({
        top: end,
        behavior: "smooth",
      });
    }, 10000);
  }, []);

  useEffect(() => {
    // Get cards element reference
    const cards = cardsRef.current;

    // Define mousemove handler function
    const handleOnMove = (e) => {
      // Loop through card elements
      for (const card of cards.children) {
        // Get card element dimensions
        const rect = card.getBoundingClientRect();
        // Get mouse position relative to card element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Set CSS variables for mouse position
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      }
    };
    // Add event listener for mousemove events
    cards.addEventListener("mousemove", handleOnMove);
    // Return a cleanup function that removes event listener
    return () => {
      cards.removeEventListener("mousemove", handleOnMove);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-[360px] lg:w-[30vw] lg:h-screen flex justify-center  overflow-y-scroll no-scrollbar "
    >
      <div className="scrollDiv h-full lg:h-[250vh] w-full px-4 mt-2 lg:mt-56 lg:mb-56">
        <div id="eventCards" ref={cardsRef} className="grid grid-cols-1 gap-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
