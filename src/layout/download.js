
import { DARK } from "@/utils/const";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiArrowDown } from "react-icons/fi";

export default function DownloadCVButton() {
  const { resolvedTheme } = useTheme();

  const gradient =
    resolvedTheme === DARK
      ? "from-indigo-800 via-purple-900 to-pink-900"
      : "from-purple-600 via-pink-500 to-yellow-400";

  const sparkleColor = resolvedTheme === DARK ? "bg-white/60" : "bg-white/70";

  return (
    <div className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 z-[99]">
      <motion.div
        className="relative flex justify-end items-end"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.a
          // href="/assets/cv/ShaluGole_CV.pdf"
          href="https://drive.google.com/file/d/1lkW-7TEYE5dd6G_raNE_MXmyqr2iLI7p/view"
          target="_blank"
          download
          className={`text-xs lg:text-base group transition-all duration-300 ease-in-out relative inline-flex items-center gap-1 px-3 lg:px-5 py-3 rounded-full font-bold text-white shadow-lg bg-gradient-to-r ${gradient} overflow-hidden`}
          whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0], y: -5 }}
          animate={{
            y: [0, -6, 0], // floating motion
            boxShadow: [
              resolvedTheme === DARK
                ? "0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)"
                : "0 10px 20px rgba(255, 255, 255, 0.2), 0 20px 30px rgba(255, 255, 255, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* <FiArrowDown className=" text-base lg:text-xl" /> Download My CV{" "} */}
          {/* <FiArrowDown className=" text-base lg:text-xl" />  */}
          Peek My CV{" "}
          <span className="group-hover:hidden block">🙂</span>
          <span className="group-hover:block hidden">😃</span>

          {/* Sparkles */}
          {[...Array(6)].map((_, i) => {
            const top = Math.random() * 80 + "%";
            const left = Math.random() * 80 + "%";
            const size = Math.random() * 4 + 2;
            const delay = Math.random() * 2;
            return (
              <motion.span
                key={i}
                className={`absolute rounded-full ${sparkleColor}`}
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
    </div>
  );
}

