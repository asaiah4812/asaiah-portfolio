"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit, reset] = useForm("{xayrezor}");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  const text = "Say Hello";

 

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   setSuccess(false);
  // };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Asaiah Henson,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <span>My mail address is:</span>
          <input
            name="email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <span>Regards</span>
          <button
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
