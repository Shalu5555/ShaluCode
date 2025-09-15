import { useTheme } from "next-themes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Custom404 = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <div className={`min-h-screen flex flex-col justify-center items-center text-white px-6 text-center
     ${isDark
                ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
                : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
            }
    `}>
            <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg md:text-xl max-w-xl mb-8">
                Oops! The page you're looking for doesn't exist. Maybe it was moved or deleted.
            </p>
           
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="py-2 flex justify-start relative"
            >
                <motion.a
                    href="/"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full  font-semibold shadow-lg hover:scale-105 transition-transform ${isDark
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
                  <FaArrowLeft />   Go Back Home

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
        </div>
    );
};

export default Custom404;
