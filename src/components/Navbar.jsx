"use client";
import Image from "next/image";
import Link from "next/link";
import { list } from "postcss";
import { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { motion } from "framer-motion";

const links = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: 'about/',
    title: 'About',
  },
  {
    url: 'profolio/',
    title: 'Portfolio',
  },
  {
    url: 'contact/',
    title: 'Contact',
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when:"beforeChildren",
        staggerChildren: 0.2,
      }
    },
  };

  const ListItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">Home</Link>
        <Link href="about/">About</Link>
        <Link href="portfolio/">Porfolio</Link>
        <Link href="contact/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white">Dreamer</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 items-center w-1/3">
        <Link href="https://github.com/asaiah4812/"  className="">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://dribbble.com/asaiah2023">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com/dreamer_webdev">
          <FaSquareXTwitter className="w-6 h-6 fill-current" />
        </Link>
        <Link href="https://twitter.com/dreamer_webdev">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.behance.net/asaiahhenson21">
          <FaSquareBehance className="w-6 h-6 fill-current" />
        </Link>
        <Link href="https://www.linkedin.com/in/asaiah-henson-440bb62a6/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* MENULIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            <motion.div variants={ListItemVariants} className="">
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div variants={ListItemVariants} className="">
              <Link href="about/">About</Link>
            </motion.div>
            <motion.div variants={ListItemVariants} className="">
              <Link href="portfolio/">Porfolio</Link>
            </motion.div>

            <motion.div variants={ListItemVariants} className="">
              <Link href="contact/">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
