
// import { useTheme } from "next-themes";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function ThemeToggle() {
//   const { theme, setTheme, resolvedTheme, mounted } = useTheme();

//   if (!mounted) return null; // prevent hydration mismatch

//   return (
//     <motion.button
//       onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-110 transition-transform"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
//     </motion.button>
//   );
// }


// "use client"; // required for Next.js 13+ client component
// import { useTheme } from "next-themes";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function ThemeToggle() {
//   const { resolvedTheme, setTheme, mounted } = useTheme();

//   // always render button, but disable click until mounted
//   return (
//     <motion.button
//       onClick={() => mounted && setTheme(resolvedTheme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-110 transition-transform"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       aria-label="Toggle Dark/Light Theme"
//     >
//       {mounted ? (resolvedTheme === "dark" ? <FaSun /> : <FaMoon />) : <FaMoon />}
//     </motion.button>
//   );
// }


"use client";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme, mounted } = useTheme();

  return (
    <motion.button
      onClick={() =>
        mounted && setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-110 transition-transform"
    >
      {mounted ? (resolvedTheme === "dark" ? <FaSun /> : <FaMoon />) : <FaMoon />}
    </motion.button>
  );
}
