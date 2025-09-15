
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Cursor() {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     const hoverElements = document.querySelectorAll("a, button,h1");
//     hoverElements.forEach((el) => {
//       el.addEventListener("mouseenter", () => setHovered(true));
//       el.addEventListener("mouseleave", () => setHovered(false));
//     });

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999999] mix-blend-difference bg-white"
//       animate={{
//         x: cursorPos.x - (hovered ? 20 : 12),
//         y: cursorPos.y - (hovered ? 20 : 12),
//         scale: hovered ? 2 : 1,
//       }}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//     />
//   );
// }





import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    // Elements where cursor should just enlarge
    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    // Elements where cursor should disappear
    const hideElements = document.querySelectorAll("h1");
    hideElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHidden(true));
      el.addEventListener("mouseleave", () => setHidden(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (hidden) return null; // Hide cursor entirely when hovering <h1>

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999999] mix-blend-difference bg-white"
      animate={{
        x: cursorPos.x - (hovered ? 20 : 12),
        y: cursorPos.y - (hovered ? 20 : 12),
        scale: hovered ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
}
