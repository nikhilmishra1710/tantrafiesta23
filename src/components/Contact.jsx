"use client";
import { useState } from "react";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import {Link} from "react-router-dom";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(false);
  const [mail, setMail] = useState(false);
  const [message, setMessage] = useState(false);
  const [button, setButton] = useState(false);
  const [nameData, setNameData] = useState("");
  const [mailData, setMailData] = useState("");
  const [messageData, setMessageData] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameData,
        email: mailData,
        message: messageData,
      }),
    }).then((res) => {
      console.log("SENT");
      if (res.status === 200) {
        console.log("SUCCES");
        setSubmitted(true);
        setName("");
        setMail("");
        setMessage("");
      }
    });
  };

  //function to remove cursor
  const hideCursor = (classname) => {
    const cursor = document.querySelector(classname.toString());

    cursor.style.display = "none";
  };

  return (
    <div
      id="contact"
      className="w-[90vw] mx-8 lg:w-[75vw] border border-white/20 bg-transparent  rounded-3xl p-4 flex flex-col justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="text-6xl my-16 cursor-help"
      >
        Queries?
      </motion.div>

      {open && (
        <motion.div
          initial={{ height: "0%" }}
          animate={open ? { height: "100%", opacity: 1 } : { opacity: 0 }}
          className="codeBlock w-3/4 min-h-[200px]  relative flex flex-col justify-center items-center "
        >
          <div className="code w-full mx-2 border border-white/20 bg-[#151515] h-[200px]  relative  rounded-xl">
            <div className="absolute font-light font-mono  p-4 top-0 left-0 h-full w-full text-base md:text-xl">
              {submitted && (
                <>
                  <div className="mt-8 text-green-600 font-extrabold opacity-100">
                    <Typewriter
                      className=" opacity-50"
                      options={{
                        delay: 30,
                        cursor: "|",
                        cursorClassName: "intro_cursor",
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1000)
                          .typeString(
                            "Yay!<br>Your query has been submitted!<br>We'll get back to you as soon as possible<br><br>Check out our Events' List till then!<br>."
                          )
                          .pauseFor(500)
                          .typeString("<br>.")
                          .pauseFor(500)
                          .typeString("<br>.<br>.<br>")
                          .pauseFor(1000)
                          .callFunction(() => hideCursor(".intro_cursor"))
                          .callFunction(() => setButton(true))
                          .start();
                      }}
                    />
                  </div>
                  {button && (
                    <Link
                      className="mt-8 text-green-600 font-extrabold text-5xl opacity-100"
                      to="/events"
                    >
                      <Typewriter
                        options={{
                          delay: 30,
                          cursor: "|",
                          cursorClassName: "query_cursor",
                        }}
                        onInit={(typewriter) => {
                          typewriter

                            .typeString(">>> Events ->")
                            .callFunction(() => hideCursor(".query_cursor"))

                            .start();
                        }}
                      />
                    </Link>
                  )}
                </>
              )}
              {!submitted && (
                <Typewriter
                  className=" opacity-50"
                  options={{
                    delay: 15,
                    cursor: "|",
                    cursorClassName: "intro_cursor",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2500)
                      .typeString(
                        "Contact Nos. <br>Harsh Suhan: +91 8356950713<br>Aayush Jain: +91 9300319597<br><br>Email: tantrafiesta@iiitn.ac.in<br><br>"
                      )

                      .pauseFor(1500)
                      .callFunction(() => hideCursor(".intro_cursor"))
                    
                      .start();
                  }}
                />
              )}
              {name && (
                <form>
                  <div className="mt-8 text-green-600 font-extrabold opacity-100">
                    <Typewriter
                      options={{
                        delay: 15,
                        cursor: "|",
                        cursorClassName: "name_cursor",
                      }}
                      onInit={(typewriter) => {
                        typewriter

                          .typeString("What is your name?")
                          .callFunction(() => hideCursor(".name_cursor"))

                          .start();
                      }}
                    />
                    <span> {">>> "}</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      className="w-1/2 rounded-lg border border-white/10 px-2 bg-transparent text-white"
                      onChange={(e) => setNameData(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          e.preventDefault();
                          setMail(true);
                        }
                      }}
                    />
                  </div>

                  {mail && (
                    <div className="mt-8 text-green-600 font-extrabold opacity-100">
                      <Typewriter
                        options={{
                          delay: 15,
                          cursor: "|",
                          cursorClassName: "mail_cursor",
                        }}
                        onInit={(typewriter) => {
                          typewriter

                            .typeString("Please enter your email :")
                            .callFunction(() => hideCursor(".mail_cursor"))

                            .start();
                        }}
                      />
                      <span> {">>> "}</span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        autoCorrect="off"
                        className="w-1/2 rounded-lg border border-white/10 px-2 bg-transparent text-white"
                        onChange={(e) => setMailData(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key == "Enter") {
                            e.preventDefault();
                            setMessage(true);
                          }
                        }}
                      />
                    </div>
                  )}

                  {message && (
                    <div className="mt-8 text-green-600 font-extrabold opacity-100">
                      <Typewriter
                        options={{
                          delay: 15,
                          cursor: "|",
                          cursorClassName: "query_cursor",
                        }}
                        onInit={(typewriter) => {
                          typewriter

                            .typeString("Tell me your query : ")
                            .callFunction(() => hideCursor(".query_cursor"))

                            .start();
                        }}
                      />
                      <span> {">>> "}</span>
                      <textarea
                        name="message"
                        autoComplete="off"
                        autoCorrect="off"
                        className="w-1/2 rounded-lg border h-[150px] border-white/10 px-2 bg-transparent text-white no-scrollbar"
                        onChange={(e) => setMessageData(e.target.value)}
                        // onKeyDown={(e) => {
                        //   if (e.key == "Enter") {
                        //     e.preventDefault();
                        //     setMessage(true);
                        //   }
                        // }}
                      />
                      <br></br>
                      <br></br>
                      {submitting ? (
                        <div className="flex">
                          <Typewriter
                            options={{
                              delay: 15,
                              cursor: "|",
                              deleteSpeed: 0.001,
                            }}
                            onInit={(typewriter) => {
                              typewriter.typeString("Submitting...").start();
                            }}
                          />
                        </div>
                      ) : (
                        <button type="submit" onClick={(e) => handleSubmit(e)}>
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
