"use client";
import Image from "next/image";
import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Badges from "@/components/Badges";
import Certificates from "@/components/Certificates";

const Homepage = () => {
  const experienceRef = useRef();
  const containerRef = useRef();
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  
  const text = "Say Hello,";

  return (
    <div className="h-full overflow-scroll">
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative pt-14">
            <Image src="/Profile.png" alt="profile" width="600" height="800" className="object-contain pr-10" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-pink-50 opacity-70 from-8% " /> */}
          </div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect my
              commitment to excellence.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <Link href="projects" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </Link>
              <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Codeigniter
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                  {/* Badges */}
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  Badges
                </motion.h1>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="mr-8 mt-14"
                >
                  <Badges/>
                </motion.div>
              </div>
              <div className="col-span-full md:col-span-6">
                  {/* Certifications */}
                <motion.h1
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-2xl"
                >
                  Certifications
                </motion.h1>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="md:ml-20 mt-4"
                >
                  <Certificates/>
                </motion.div>
              </div>
            </div>
              <h1 className="text-xl visible md:invisible">You have reached the end.</h1>
              <p className="visible md:invisible">now, follow me : </p>  
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
          </div>
        </div>
      </div>
      </motion.div>


    </div>
  );
};

export default Homepage;
