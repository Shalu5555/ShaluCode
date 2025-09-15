
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Girl from "../Contact/girl";
import { useTheme } from "next-themes";
import { DARK, LINKS } from "@/utils/const";
import { useEffect, useState } from "react";

const text = "Hi, I’m Shalu Gole";
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
  }),
  hover: { scale: 1.3, rotate: -5, color: "#fbbf24" },
};


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

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === DARK;
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [...Array(50)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 20 + 15,
      moveY: Math.random() * -800,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section
      id="hero"
      className={`
        min-h-screen overflow-hidden flex flex-col items-center justify-center lg:pt-10 pt-28 px-1 lg:px-8
        ${resolvedTheme === DARK
          ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
        }
      `}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            initial={{ x: star.x, y: star.y, opacity: 0 }}
            animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
            transition={{ duration: star.duration, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="max-w-7xl w-full grid lg:grid-cols-2 items-center px-2 lg:p-10 rounded-md overflow-hidden ">
        <div className="text-left space-y-2 lg:space-y-6">
          <h1 className={`${resolvedTheme === "dark" ? "text-white" : "text-white "} text-lg md:text-4xl font-extrabold drop-shadow-lg flex flex-wrap relative z-10`}>
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={char === " " ? "mr-2" : ""}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className={`text-3xl md:text-5xl font-extrabold z-10 ${resolvedTheme === "dark" ? "text-white" : "text-white "}`}
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN Stack Engineer",
                "Mobile App Developer",
                "Creative Coder",
                "Software Engineer 💻",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </motion.h2>

          <div className="max-w-xl text-base sm:text-lg font-medium text-white/90 z-10 flex flex-wrap">
            {"Passionate about building beautiful, user-friendly interfaces and bringing designs to life with clean, scalable code. I thrive on crafting modern web experiences that connect with users."
              .split("")
              .map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className={char === " " ? "mr-2" : ""}
                >
                  {char}
                </motion.span>
              ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="py-2 flex justify-start relative"
          >
            <motion.a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("work");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`relative inline-flex items-center gap-2 px-5 lg:px-8 py-3 lg:py-4 rounded-full font-bold shadow-lg overflow-hidden ${isDark
                ? "bg-gradient-to-tl from-indigo-800 via-purple-900 to-pink-900 text-white"
                : "bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white"
                }`}
              animate={{
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
              View My Work

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
        </div>

        <div className="flex justify-center ">
          <Girl />
        </div>

        {/* <div className="xl:block hidden " >
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              initial={{ x: star.x, y: star.y, opacity: 0 }}
              animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
              transition={{ duration: star.duration, repeat: Infinity }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
