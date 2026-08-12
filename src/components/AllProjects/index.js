import { DARK, PROJECTS } from "@/utils/const";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Sparkles({ parentRef }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (!parentRef.current) return;

    const rect = parentRef.current.getBoundingClientRect();
    const height = rect.height;
    const width = window.innerWidth;

    const s = new Array(60).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    setSparkles(s);
  }, [parentRef]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          initial={{ x: s.x, y: s.y, opacity: 0, scale: 0 }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * (parentRef.current?.getBoundingClientRect().height || 2000),
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function AllProjects() {
  const { resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex flex-col items-center justify-center px-2 md:px-12 py-16  overflow-hidden 
         ${resolvedTheme === DARK
          ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
        }
        `}
    >
      <Sparkles parentRef={sectionRef} />

      <h2 className="relative z-2 text-2xl lg:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-100 via-white to-pink-200 py-6 lg:py-12">
        <Typewriter
          words={[
            "My Creative Projects 🚀",
            "Work Showcase ✨",
            "Things I Built 💡",
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <div className="relative z-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 w-full  ">
        {PROJECTS.map((p, i) => {
          const isHovered = hovered === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden p-2 lg:p-3 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-30 lg:h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-base lg:text-2xl font-bold text-pink-200">{p.name}</h3>

              <motion.p
                initial={false}
                animate={{
                  maxHeight: isHovered ? 500 : 48,
                  opacity: 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-gray-100 text-[10px] lg:text-sm mt-1 lg:mt-3 overflow-hidden"
              >
                {p.description}
              </motion.p>

              <div className="flex flex-wrap gap-1 lg:gap-2 mt-1 lg:mt-3">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className=" text-[10px] lg:text-xs font-medium px-2 py-1 rounded-md bg-pink-600/40 text-pink-100"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-2 lg:mt-6 flex justify-center items-center relative"
              >
                <motion.a
                   href={p.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative inline-flex items-center gap-2 lg:text-base text-xs px-2 lg:px-4 py-2 justify-center rounded-full w-full text-center font-medium shadow-lg overflow-hidden ${isDark
                      ? "bg-gradient-to-tl from-indigo-800 via-purple-900 to-pink-900 text-white"
                      : "bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white"
                    }`}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1 }}
                >
                  Visit Project <FaExternalLinkAlt size={14}  />

                  {mounted && [...Array(4)].map((_, i) => {
                    const top = Math.random() * 80 + "%";
                    const left = Math.random() * 80 + "%";
                    const size = Math.random() * 3 + 2;
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
              
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
