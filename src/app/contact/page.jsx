"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

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
            
          </div>
        </div>

        {/* SOCIAL */}
        <div className="visible md:hidden justify-center gap-6 flex my-5">
          <Link href="https://github.com/ayushsonone07" className="hover:">
            <Image src="/github.png" alt="" width={32} height={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/ayush-sonone-4a3100220/">
            <Image src="/linkedin1.png" alt="" width={32} height={32} />
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=%2B918349307304&text&type=phone_number&app_absent=0">
            <Image src="/WhatsApp.png" alt="" width={32} height={32} />
          </Link>
          <Link href="https://t.me/Ayushsonone07">
            <Image src="/telegram.png" alt="" width={32} height={32} />
          </Link>
          <Link href="https://www.facebook.com/aayush.sonone.7">
            <Image src="/facebook.png" alt="" width={32} height={32} />
          </Link>
          <Link href="https://www.instagram.com/ayushsonone07/">
            <Image src="/instagram.png" alt="" width={32} height={32} />
          </Link>
          <Link href="https://www.youtube.com/@ayushsonone4772">
            <Image src="/youtube.png" alt="" width={32} height={32} />
          </Link>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Ayush Sonone,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
