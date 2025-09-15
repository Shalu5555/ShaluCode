
import { useTheme } from "next-themes";
import { DARK } from "@/utils/const";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ResumePreview = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === DARK;


    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generatedStars = [...Array(30)].map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            duration: Math.random() * 15 + 10,
            moveY: Math.random() * -800,
        }));
        setStars(generatedStars);
    }, []);


    return (
        <section
            className={`
        min-h-screen flex flex-col items-center justify-center md:py-15 py-28 px-1 lg:px-8
        ${isDark ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
                    : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"}
      `}
        >
            <h1 className="text-2xl md:text-5xl font-bold py-4 text-white ">Preview My Resume</h1>

            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#ff0cb6] rounded-full "
                    initial={{ x: star.x, y: star.y,  }}
                    animate={{ y: [star.y, star.moveY] }}
                    transition={{ duration: star.duration, repeat: Infinity }}
                />
            ))}

            <div className="w-full md:w-3/4 h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white">
                <iframe
                    src="/ShaluGole_CV.pdf"
                    className="w-full h-full"
                    title="Shalu Gole Resume"
                />
            </div>

          
        </section>
    );
};

export default ResumePreview;
