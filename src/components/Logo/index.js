import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const flowers = ["🌸", "🌼", "💮", "🌺", "🌻"];

const Logo = () => {
    const router = useRouter();
    const [sprinkles, setSprinkles] = useState([]);
    const intervalRef = useRef(null);

    const handleClick = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > 200) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                router.push("/");
            }
        }
    };

    // function to create sprinkles
    const createSprinkles = () => {
        const newSprinkles = Array.from({ length: 5 }).map((_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 200 - 100,
            emoji: flowers[Math.floor(Math.random() * flowers.length)],
        }));
        setSprinkles((prev) => [...prev, ...newSprinkles]);

        // remove old ones after 2s
        setTimeout(() => {
            setSprinkles((prev) =>
                prev.filter((s) => Date.now() - s.id < 1800)
            );
        }, 2000);
    };

    // start loop on hover
    const handleMouseEnter = () => {
        if (!intervalRef.current) {
            createSprinkles(); // spawn immediately
            intervalRef.current = setInterval(createSprinkles, 400); // keep spawning
        }
    };

    // stop loop when hover ends
    const handleMouseLeave = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative cursor-pointer"
            onClick={handleClick}
            aria-label="Go to top or home"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 120"
                role="img"
                // aria-labelledby="logoTitle"
                className="w-44 h-auto"
                initial={{ y: -6 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <title className="hover:scale-110 hover:font-bold " >Shalu</title>

                {/* optional gradient */}
                <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#FF7AC6" />
                        <stop offset="60%" stopColor="#FF5A9E" />
                        <stop offset="100%" stopColor="#C430FF" />
                    </linearGradient>

                    {/* subtle drop shadow filter */}
                    <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.12" />
                    </filter>
                </defs>

                {/* Background invisible rect to increase click area */}
                <rect x="0" y="0" width="100%" height="100%" fill="transparent" />

                {/* Text using Great Vibes (cursive). Make sure font is loaded as shown above */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fontFamily="'Great Vibes', cursive"
                    fontWeight="600"
                    fontSize="74"
                    fill="url(#g1)"
                    style={{ paintOrder: "stroke" }}
                    filter="url(#f1)"
                >
                    Shalu
                </text>

                <motion.path
                    d="M100 82 Q200 110 300 82"
                    fill="transparent"
                    stroke="url(#g1)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                />

            </motion.svg>


            {/* sprinkle container */}
            <div className="absolute left-1/2 top-0 w-0 h-0 overflow-visible">
                <AnimatePresence>
                    {sprinkles.map((s) => (
                        <motion.div
                            key={s.id}
                            initial={{ y: 0, opacity: 1 }}
                            animate={{
                                y: 200 + Math.random() * 120, // fall
                                x: s.x,
                                opacity: 0,
                                rotate: Math.random() * 360,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                            className="absolute text-2xl select-none"
                        >
                            {s.emoji}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Logo;
