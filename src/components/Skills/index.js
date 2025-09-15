// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { DARK } from "@/utils/const";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";

// const skills = [
//   { src: "/assets/tech/html.png", name: "HTML" },
//   { src: "/assets/tech/css.png", name: "CSS" },
//   { src: "/assets/tech/figma.png", name: "Figma" },
//   { src: "/assets/tech/docker.png", name: "Docker" },
//   { src: "/assets/tech/nodejs.png", name: "Node.js" },
//   { src: "/assets/tech/reactjs.png", name: "React" },
//   { src: "/assets/tech/git.png", name: "Git" },
//   { src: "/assets/tech/javascript.png", name: "JavaScript" },
//   { src: "/assets/tech/mongodb.png", name: "MongoDB" },
//   { src: "/assets/tech/redux.png", name: "Redux" },
// ];

// const Skills = () => {
//   const refs = useRef([]);
//   const animations = useRef([]);
//   const { resolvedTheme } = useTheme();
//   const isDark = resolvedTheme === DARK;

//   const addRef = (el) => {
//     if (el && !refs.current.includes(el)) {
//       refs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     // Continuous random rotation for each icon
//     refs.current.forEach((el, index) => {
//       animations.current[index] = gsap.to(el, {
//         rotationY: Math.random() * 180,
//         rotationX: Math.random() * 180,
//         rotationZ: Math.random() * 30 - 15,
//         duration: 6 + Math.random() * 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     });
//   }, []);

//   const handleMouseEnter = (index) => {
//     const tooltip = refs.current[index].querySelector(".tooltip");
//     // Stop rotation and reset icon orientation
//     animations.current[index].pause();
//     gsap.to(refs.current[index], {
//       rotationX: 0,
//       rotationY: 0,
//       rotationZ: 0,
//       scale: 1.4,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//     gsap.to(tooltip, { opacity: 1, y: -12, duration: 0.4, ease: "power3.out" });
//   };

//   const handleMouseLeave = (index) => {
//     const tooltip = refs.current[index].querySelector(".tooltip");
//     // Resume rotation
//     animations.current[index].resume();
//     gsap.to(refs.current[index], {
//       scale: 1,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//     gsap.to(tooltip, { opacity: 0, y: 0, duration: 0.4, ease: "power3.out" });
//   };

//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const generatedStars = [...Array(30)].map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       duration: Math.random() * 15 + 10,
//       moveY: Math.random() * -800,
//     }));
//     setStars(generatedStars);
//   }, []);


//   return (
//     <section
//       className={`w-full py-10 lg:py-20 px-2 sm:px-6 md:px-12 lg:px-24 text-white 
//     ${isDark ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
//           : "bg-gradient-to-bl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
//         }
//     `}

//     >
//       <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//         <Typewriter
//           words={["My Skills", "My Story", "Who I Am", "Introduction", "Personal Background"]}
//           loop={true}
//           cursor
//           cursorStyle="*"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1500}
//         />
//       </h2>

//       <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-7xl justify-items-center items-center text-center mx-auto">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             ref={addRef}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//             className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center cursor-pointer transform perspective-500 transition-transform duration-300"
//           >
//             <Image
//               width={500}
//               height={500}
//               src={skill.src}
//               alt={skill.name}
//               className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-lg transition-transform duration-300"
//             />
//             {/* Tooltip */}
//             <div className="tooltip absolute bottom-full px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white opacity-0 pointer-events-none">
//               {skill.name}
//             </div>
//           </div>
//         ))}
//       </div>

//       {stars.map((star, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1.5 h-1.5 bg-white rounded-full lg:block hidden "
//           initial={{ x: star.x, y: star.y, opacity: 0 }}
//           animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
//           transition={{ duration: star.duration, repeat: Infinity }}
//         />
//       ))}
//       {/* Stars layer (behind skills) */}
//       <div className="absolute inset-0 z-0 overflow-hidden lg:hidden block">
//         {stars.map((star, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1.5 h-1.5 bg-white rounded-full"
//             initial={{ x: star.x, y: star.y, opacity: 0 }}
//             animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
//             transition={{ duration: star.duration, repeat: Infinity }}
//           />
//         ))}
//       </div>
//     </section>

//   );
// };

// export default Skills;



// import { DARK } from "@/utils/const";
// import Bootstrap from "@/utils/icons/bootstrap";
// import Canva from "@/utils/icons/canva";
// import CPlusPlus from "@/utils/icons/CPlusPlus";
// import Css from "@/utils/icons/css";
// import Django from "@/utils/icons/django";
// import Docker from "@/utils/icons/docker";
// import Figma from "@/utils/icons/figma";
// import FrameMotion from "@/utils/icons/frameMotion";
// import Git from "@/utils/icons/git";
// import GitHub from "@/utils/icons/github";
// import Gitlab from "@/utils/icons/gitlab";
// import Google from "@/utils/icons/google";
// import Html from "@/utils/icons/html";
// import Jquery from "@/utils/icons/jquery";
// import Js from "@/utils/icons/js";
// import MongoDb from "@/utils/icons/mongodb";
// import Mysql from "@/utils/icons/mysql";
// import NextJs from "@/utils/icons/nextjs";
// import NodeJs from "@/utils/icons/node";
// import Node from "@/utils/icons/node";
// import Npm from "@/utils/icons/npm";
// import Php from "@/utils/icons/php";
// import Python from "@/utils/icons/python";
// import React from "@/utils/icons/react";
// import Redux from "@/utils/icons/redux";
// import Talwind from "@/utils/icons/talwind";
// import TypeScript from "@/utils/icons/typescript";
// import ViteJs from "@/utils/icons/vite";
// import Vscode from "@/utils/icons/vscode";
// import Wordpress from "@/utils/icons/wordpress";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { Typewriter } from "react-simple-typewriter";

// const skills = [
//   { src: <Html />, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//   { src: <Css />, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//   { src: <Figma />, name: "Figma", link: "https://help.figma.com/" },
//   { src: <Docker />, name: "Docker", link: "https://docs.docker.com/get-started/" },
//   { src: <Node />, name: "Node.js", link: "https://nodejs.org/en/learn" },
//   { src: <React />, name: "React", link: "https://react.dev/learn" },
//   { src: <Git />, name: "Git", link: "https://git-scm.com/doc" },
//   { src: <Js />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
//   { src: <MongoDb />, name: "MongoDB", link: "https://www.mongodb.com/docs/" },
//   { src: <Redux />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Bootstrap />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Canva />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <CPlusPlus />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Django />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <FrameMotion />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <GitHub />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Gitlab />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Google />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Jquery />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Mysql />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <NextJs />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <NodeJs />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Npm />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Php />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Python />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Talwind />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <TypeScript />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Vscode />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <Wordpress />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
//   { src: <ViteJs />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
// ];

// export default function SkillsSection() {
//   const { resolvedTheme } = useTheme();
//   const isDark = resolvedTheme === DARK;

//   return (
//     <section
//       id="skills"
//       className={`relative py-20  text-white overflow-hidden

//       ${isDark
//           ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
//           : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
//         }`}
//     >
//       <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
//         <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           <Typewriter
//             words={["My Skills⚡", "Tech Stack I Master", "My Development Playground 🎯", "Languages, Libraries & Beyond 📚"]}
//             loop={true}
//             cursor
//             cursorStyle="*"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
//           {skills.map((skill, i) => (
//             <motion.a
//               key={i}
//               href={skill.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30, scale: 0.8 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               whileHover={{
//                 scale: 1.15,
//                 rotate: [0, -5, 5, 0],
//                 transition: { duration: 0.5 },
//               }}
//               viewport={{ once: true }}
//               className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-pink-500/50 cursor-pointer group"
//             >
//               {/* <motion.img
//                 src={skill.src}
//                 alt={skill.name}
//                 className="w-16 h-16 mb-3 drop-shadow-lg"
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: i * 0.2,
//                 }}
//               /> */}
//               <p className="text-sm font-semibold hover:text-white  hover:font-black transition">
//                 {skill.src}
//               </p>

//               {/* Glow effect on hover */}
//               <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500" />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import { DARK } from "@/utils/const";
import Bootstrap from "@/utils/icons/bootstrap";
import Canva from "@/utils/icons/canva";
import CPlusPlus from "@/utils/icons/CPlusPlus";
import Css from "@/utils/icons/css";
import Django from "@/utils/icons/django";
import Docker from "@/utils/icons/docker";
import Figma from "@/utils/icons/figma";
import FrameMotion from "@/utils/icons/frameMotion";
import Git from "@/utils/icons/git";
import GitHub from "@/utils/icons/github";
import Gitlab from "@/utils/icons/gitlab";
import Google from "@/utils/icons/google";
import Html from "@/utils/icons/html";
import Jquery from "@/utils/icons/jquery";
import Js from "@/utils/icons/js";
import MongoDb from "@/utils/icons/mongodb";
import Mysql from "@/utils/icons/mysql";
import NextJs from "@/utils/icons/nextjs";
import Node from "@/utils/icons/node";
import Npm from "@/utils/icons/npm";
import Php from "@/utils/icons/php";
import Python from "@/utils/icons/python";
import React from "@/utils/icons/react";
import Redux from "@/utils/icons/redux";
import Talwind from "@/utils/icons/talwind";
import TypeScript from "@/utils/icons/typescript";
import ViteJs from "@/utils/icons/vite";
import Vscode from "@/utils/icons/vscode";
import Wordpress from "@/utils/icons/wordpress";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  { src: <Html />, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: <Css />, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: <Js />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: <TypeScript />, name: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
  { src: <React />, name: "React", link: "https://react.dev/learn" },
  { src: <Redux />, name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
  { src: <NextJs />, name: "Next.js", link: "https://nextjs.org/docs" },
  { src: <Node />, name: "Node.js", link: "https://nodejs.org/en/learn" },
  { src: <Npm />, name: "NPM", link: "https://docs.npmjs.com/" },
  { src: <Bootstrap />, name: "Bootstrap", link: "https://getbootstrap.com/docs/" },
  { src: <Talwind />, name: "Tailwind CSS", link: "https://tailwindcss.com/docs" },
  { src: <Jquery />, name: "jQuery", link: "https://api.jquery.com/" },
  { src: <Figma />, name: "Figma", link: "https://help.figma.com/" },
  { src: <Canva />, name: "Canva", link: "https://www.canva.com/learn/" },
  { src: <Git />, name: "Git", link: "https://git-scm.com/doc" },
  { src: <GitHub />, name: "GitHub", link: "https://docs.github.com/en" },
  { src: <Gitlab />, name: "GitLab", link: "https://docs.gitlab.com/" },
  { src: <MongoDb />, name: "MongoDB", link: "https://www.mongodb.com/docs/" },
  { src: <Mysql />, name: "MySQL", link: "https://dev.mysql.com/doc/" },
  { src: <Python />, name: "Python", link: "https://docs.python.org/3/" },
  { src: <Vscode />, name: "VS Code", link: "https://code.visualstudio.com/docs" },
  { src: <Wordpress />, name: "WordPress", link: "https://developer.wordpress.org/" },
  { src: <FrameMotion />, name: "Framer Motion", link: "https://www.framer.com/motion/" },
  // { src: <ViteJs />, name: "Vite", link: "https://vitejs.dev/guide/" },
  // { src: <Google />, name: "Google", link: "https://developers.google.com/" },
  // { src: <Docker />, name: "Docker", link: "https://docs.docker.com/get-started/" },
  // { src: <Php />, name: "PHP", link: "https://www.php.net/manual/en/" },
  // { src: <Django />, name: "Django", link: "https://docs.djangoproject.com/en/stable/" },
  // { src: <CPlusPlus />, name: "C++", link: "https://cplusplus.com/doc/tutorial/" },
];

export default function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === DARK;

  return (
    <section
      id="skills"
      className={`relative py-20 overflow-hidden
      ${isDark
        ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
        : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center px-2 md:px-8 ">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <Typewriter
            words={[
              "My Skills⚡",
              "Tech Stack I Master",
              "My Development Playground 🎯",
              "Languages, Libraries & Beyond 📚"
            ]}
            loop
            cursor
            cursorStyle="*"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {skills.map((skill, i) => (
            <motion.a
              key={i}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-pink-500/50 cursor-pointer group"
            >
              <div className="w-16 h-16 mb-2 z-30 drop-shadow-lg">
                {skill.src}
              </div>
              <p className="text-sm z-30  font-semibold text-white hover:font-black transition">
                {skill.name}
              </p>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
