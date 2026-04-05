import { EXPERIENCES } from "@/utils/const";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function WorkExp() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Mouse move parallax
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate stars only on client
    const generatedStars = [...Array(30)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 15 + 10,
      moveY: Math.random() * -800,
    }));
    setStars(generatedStars);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="work" className="relative py-10 lg:py-24 bg-black text-white overflow-hidden h-auto min-h-screen max-h-auto ">
      {/* Cursor reactive background gradients */}
      <motion.div
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 opacity-30 blur-3xl rounded-full -z-10"
      />
      <motion.div
        animate={{ x: -offset.x, y: -offset.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-pink-500 opacity-30 blur-3xl rounded-full -z-10"
      />

      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          initial={{ x: star.x, y: star.y, opacity: 0 }}
          animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="text-2xl lg:text-5xl font-bold text-center mb-10 lg:mb-20 tracking-wide relative z-1"
      >
        <Typewriter
          words={["My Work Journey 🚀", "Professional Bio ✨", "Work Experience 🤝", "My Career Path"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600"
        />

        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            initial={{ x: star.x, y: star.y, opacity: 0 }}
            animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
            transition={{ duration: star.duration, repeat: Infinity }}
          />
        ))}
        <div className="space-y-24">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150, rotate: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 px-5 ${index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"
                }`}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-2 pt-6 lg:p-8 shadow-xl border border-white/20 relative"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={exp.icon}
                    alt="tech-logo"
                    className="w-8 h-8 lg:w-14 lg:h-14 object-contain"
                  />
                  <h3 className=" text-base lg:text-2xl font-semibold">{exp.role}</h3>
                </div>
                <Link href={exp.company_url} target="_blank" className="text-pink-300 text-xs lg:text-base font-medium">{exp.company}</Link>
                <p className="text-gray-300 mt-2 leading-relaxed text-xs lg:text-base">{exp.desc}</p>
                {exp.points && exp.points.length > 0 && (
                  <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-200 text-xs lg:text-sm text-left">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {stars.map((star, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    initial={{ x: star.x, y: star.y, opacity: 0 }}
                    animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
                    transition={{ duration: star.duration, repeat: Infinity }}
                  />
                ))}
                {/* Year Badge */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-2 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg"
                >
                  {exp.year}
                </motion.span>

                {stars.map((star, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    initial={{ x: star.x, y: star.y, opacity: 0 }}
                    animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
                    transition={{ duration: star.duration, repeat: Infinity }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}