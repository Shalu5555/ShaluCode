
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { DARK, LINKS } from "@/utils/const";
import { TbFileCv } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { useState } from "react";

const SOCIAL_LINKS = [
  {
    href: LINKS.GITLAB,
    icon: <FaGithub size={30} />,
    hoverColor: "#fbbf24",
  },
  {
    href: LINKS.LINKEDIN,
    icon: <FaLinkedin size={30} />,
    hoverColor: "#0ea5e9",
  },
  {
    href: LINKS.EMAIL,
    icon: <FaEnvelope size={30} />,
    hoverColor: "#ef4444",
  },
  {
    href: LINKS.INSTA,
    icon: <FaInstagram size={30} />,
    hoverColor: "#ef4444",
  },
];

export default function ContactSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === DARK;
  const [hearts, setHearts] = useState([]);

  const handleHover = () => {
    const newHearts = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      left: (Math.random() - 0.5) * 60, // thoda left/right random
      size: Math.random() * 14 + 12, // random size
      duration: Math.random() * 1.5 + 1.5, // 1.5–3 sec
    }));
    setHearts((prev) => [...prev, ...newHearts]);
  };

  return (
    <section
      id="contact"
      className={`relative py-20 lg:py-40 px-3 sm:px-12 lg:px-24 overflow-hidden ${isDark
        ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-white"
        : "bg-gradient-to-bl from-pink-300 via-purple-600 to-indigo-700 text-white"
        }`}
    >
      <div className="pointer-events-none absolute inset-0 z-4">
        <svg className="absolute left-6 top-6 w-44 opacity-30" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#ff9a9e" />
              <stop offset="1" stopColor="#fad0c4" />
            </linearGradient>
          </defs>
          <g transform="translate(100 100)">
            <path
              d="M0 -40 C 22 -40 40 -22 40 0 C 40 22 22 40 0 40 C -22 40 -40 22 -40 0 C -40 -22 -22 -40 0 -40 Z"
              fill="url(#g1)"
            />
            <circle r="8" fill="#fff" opacity="0.6" />
          </g>
        </svg>

        <svg className="absolute right-6 bottom-6 w-56 opacity-25" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0" stopColor="#c4fdf5" />
              <stop offset="1" stopColor="#c4ffd6" />
            </linearGradient>
          </defs>
          <g transform="translate(100 100)">
            <path
              d="M0 -48 C 26 -48 48 -26 48 0 C 48 26 26 48 0 48 C -26 48 -48 26 -48 0 C -48 -26 -26 -48 0 -48 Z"
              fill="url(#g2)"
            />
            <circle r="6" fill="#fff" opacity="0.4" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col justify-center items-center ">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-5xl font-extrabold leading-tight"
        >
          Let's build something beautiful ✨
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Have a project, collaboration, or just want to say hi? Reach out via email or connect on socials.
        </motion.p>

        <motion.div
          className="flex gap-6 mt-6 text-2xl text-white z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 2.5 },
            },
          }}
        >
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              whileHover={{ scale: 1.5, color: link.hoverColor }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 gap-4 z-4 flex justify-center flex-wrap relative"
        >
          <motion.a
            href="mailto:shalugole369@gmail.com"
            className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold shadow-lg overflow-hidden ${isDark
              ? "bg-gradient-to-tl from-indigo-800 via-purple-900 to-pink-900 text-white"
              : "bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 text-white"
              }`}
            animate={{
              x: [0, -5, 5, -5, 5, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
          >
            <MdOutlineAlternateEmail size={28} className="z-10" /> Pop Me to Email

            {[...Array(5)].map((_, i) => {
              const top = Math.random() * 80 + "%";
              const left = Math.random() * 80 + "%";
              const size = Math.random() * 4 + 2;
              const delay = Math.random() * 2;
              return (
                <motion.span
                  key={i}
                  className="absolute rounded-full bg-white/90"
                  style={{ width: size, height: size, top, left }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.a>

          <motion.a
            href="/ShaluGole_CV.pdf"
            target="_blank"
            className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold shadow-lg overflow-hidden ${isDark
              ? "bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 text-white"
              : "bg-gradient-to-tl from-indigo-800 via-purple-900 to-pink-900 text-white"
              }`}
            animate={{
              y: [0, -5, 5, -5, 5, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <TbFileCv className="z-10" size={28} /> See My CV

            {[...Array(5)].map((_, i) => {
              const top = Math.random() * 80 + "%";
              const left = Math.random() * 80 + "%";
              const size = Math.random() * 4 + 2;
              const delay = Math.random() * 2;
              return (
                <motion.span
                  key={i}
                  className="absolute rounded-full bg-white/90"
                  style={{ width: size, height: size, top, left }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8 text-sm text-center flex items-center "
        >
          © Copyright 2023-2025 Shalu
          <span onMouseEnter={handleHover} className="relative inline-block text-red-500 text-2xl hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer z-10 ">
            ❤️{hearts.map((heart) => (
              <motion.span
                key={heart.id}
                initial={{ y: 0, opacity: 1, scale: 1 }}
                animate={{ y: -80, opacity: 0, scale: 0.8, x: heart.left, }}
                transition={{ duration: heart.duration, ease: "easeOut" }}
                className="absolute left-1/2 top-0 "
                style={{
                  fontSize: heart.size,
                  transform: "translateX(-50%)",
                }}
              >
               ❤️
                {/* <FaHeart className="text-red-500" /> */}
              </motion.span>
            ))}
          </span>
        </motion.p>
      </div>

      <div className="absolute inset-0 z-4 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 2;
          const size = 8 + Math.random() * 24;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{ left: `${left}%`, width: size, height: size, bottom: -40, transform: "translateX(-50%)" }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -700, opacity: [0, 0.8, 0] }}
              transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, delay }}
            />
          );
        })}
      </div>
    </section>
  );
}
