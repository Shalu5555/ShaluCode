
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

const DayNightToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`relative w-20 md:w-24 h-10 md:h-12 rounded-full overflow-hidden cursor-pointer
        ${isDark
          ? "bg-gradient-to-b from-[#0d0d26] to-[#1a1a40]"
          : "bg-gradient-to-b from-sky-300 to-sky-400"}
      `}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Stars (night only) */}
      {isDark && (
        <motion.div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 90}%`,
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      )}

      {/* Sun / Moon path */}
      <motion.div
        className="absolute"
        initial={false}
        animate={{
          x: isDark ? ["5%", "50%", "90%"] : ["60%", "50%", "10%"],
          y: ["10%", "20%", "20%"],
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        {isDark ? (
          <BsMoonStarsFill className="text-white w-5 h-5" />
        ) : (
          <MdSunny className="text-yellow-400 md:w-8 w-6 h-6 md:h-8" />
        )}
      </motion.div>

      {/* Clouds (day only) */}
      {!isDark && (
        <motion.div
          className="absolute w-4 md:w-6 h-2 md:h-3 bg-white rounded-full top-2 left-10 opacity-70"
          animate={{ x: [10, -15, 10] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}

      {/* Tiny trees at bottom (day only) */}
      {!isDark && (
        <div className="absolute bottom-2 left-2 flex gap-1">
          <motion.div
            className="w-2 h-3 bg-green-600 rounded-t-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-3 bg-green-700 rounded-t-full"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-3 bg-green-500 rounded-t-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      )}

      {/* Water strip (day/night) */}
      <motion.div
        className={`absolute bottom-0 left-0 w-full h-2 ${
          isDark ? "bg-blue-900" : "bg-blue-600"
        } opacity-90`}
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Moon reflection (night only) */}
      {isDark && (
        <motion.div
          className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-white/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default DayNightToggle;
