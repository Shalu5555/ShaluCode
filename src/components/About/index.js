import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "next-themes";
import { DARK } from "@/utils/const";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === DARK;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        stagger: 0.25,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const triggerIconAnimation = (icon = "✏️") => {
    const iconContainer = document.getElementById("global-pencil-container");
    if (!iconContainer) return;

    for (let i = 0; i < 20; i++) {
      const el = document.createElement("div");
      el.className =
        "fixed text-yellow-300 text-2xl pointer-events-none z-50";
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `-30px`;
      el.innerHTML = icon;

      iconContainer.appendChild(el);

      gsap.to(el, {
        y: window.innerHeight + 100,
        opacity: 0,
        rotation: Math.random() * 360,
        duration: 1 + Math.random(),
        ease: "power2.inOut",
        delay: i * 0.05,
        onComplete: () => el.remove(),
      });
    }
  };

  const addCard = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

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
      id="about"
      ref={sectionRef}
      className={`relative py-5 lg:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 w-full overflow-hidden
    ${isDark
          ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-bl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
        }`}
    >
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          initial={{ x: star.x, y: star.y, opacity: 0 }}
          animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center lg:mb-6 px-2">
        <div className="hidden lg:block w-24 h-24 sm:w-28 sm:h-28 bg-[#00000075] mx-auto mb-4 lg:mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/30">
          <img
            src="/assets/me.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 lg:mb-4 text-white break-words">
          <Typewriter
            words={["About Me", "My Story", "Who I Am", "Introduction", "Personal Background"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 font-medium max-w-3xl mx-auto break-words">
          Passionate Frontend Engineer with a strong focus on building interactive,
          high-performance, and visually stunning user experiences. I craft scalable,
          responsive web & mobile apps using React / Next.js / React Native and the MERN
          stack. I love turning designs into delightful user experiences and optimizing for
          performance and accessibility.
        </p>

        <div className="lg:hidden block w-24 h-24 sm:w-28 sm:h-28 bg-[#00000075] mx-auto mt-4 lg:mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/30">
          <img
            src="/assets/me.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-10 max-w-6xl mx-auto py-4 lg:py-8 text-white w-full">
        <ProfileCard ref={(el) => addCard(el)} triggerIconAnimation={triggerIconAnimation} />
        <div className="flex flex-col gap-4 lg:gap-8">
          <EducationCard ref={(el) => addCard(el)} triggerIconAnimation={triggerIconAnimation} />
          <HighlightsCard ref={(el) => addCard(el)} triggerIconAnimation={triggerIconAnimation} />
        </div>
      </div>

      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          initial={{ x: star.x, y: star.y, opacity: 0 }}
          animate={{ y: [star.y, star.moveY], opacity: [0, 1, 0] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}
         <div
        id="global-pencil-container"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />
    </section>
  );
}

const ProfileCard = React.forwardRef(({ triggerIconAnimation }, ref) => {
  const localRef = useRef(null);

  const handleEnter = () => {
    triggerIconAnimation("💻");
    gsap.to(localRef.current, {
      x: -10,
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(localRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        if (ref) ref.current = el;
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="about-card relative bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-4 lg:p-6 cursor-pointer"
    >
      <h4 className="font-bold text-lg mb-3">👩‍💻 Profile</h4>
      <p className="mb-2 text-xs lg:text-sm">
        <strong>What I do:</strong> Build fast, accessible frontends and reusable
        component systems. Lead feature implementations, API integrations and
        performance optimization.
        <br />
        <br />
        I love transforming creative ideas into digital experiences. Skilled
        in React, JavaScript, Next.js, TailwindCSS, Three.js, Redux, and Node.js.
        Passionate about crafting interactive, high-performance, and visually
        stunning web and mobile applications. Always focusing on accessibility,
        performance, and best engineering practices.
      </p>

      <ul className="list-disc ml-5 space-y-1 text-white/80 text-xs lg:text-sm">
        <li>React / Next.js SPAs & SSR</li>
        <li>MERN stack integrations & REST APIs</li>
        <li>React Native & cross-platform mobile UIs</li>
        <li>Performance optimization & SEO-minded builds</li>
        <li>Component-driven architecture & design systems</li>
      </ul>
    </div>
  );
});

const EducationCard = React.forwardRef(({ triggerIconAnimation }, ref) => {
  const localRef = React.useRef(null);

  const handleEnter = () => {
    triggerIconAnimation("✏️");
    gsap.to(localRef.current, {
      x: -10,
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(localRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        if (ref) ref.current = el;
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="about-card relative bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-2 lg:p-6 cursor-pointer"
    >
      <h4 className="font-bold text-lg mb-3">🎓 Education</h4>
      <ul className="text-xs lg:text-sm text-white/85 list-disc ml-5 space-y-2">
        <li>Master of Computer Applications (MCA) — IGNOU (Ongoing)</li>
        <li>Bachelor of Computer Applications (BCA) — Makhanlal Chaturvedi University (2018–2021)</li>
      </ul>
    </div>
  );
});

const HighlightsCard = React.forwardRef(({ triggerIconAnimation }, ref) => {
  const localRef = React.useRef(null);

  const handleEnter = () => {
    triggerIconAnimation("🌟");
    gsap.to(localRef.current, {
      x: -10,
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(localRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        if (ref) ref.current = el;
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="about-card relative bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-2 lg:p-6 cursor-pointer"
    >
      <h4 className="font-bold text-lg mb-3">🌟 Highlights</h4>
      <ul className=" text-xs lg:text-sm text-white/85 list-disc ml-5 space-y-2">
        <li>Led frontend at Raguested Infotech (UK) — web & mobile projects</li>
        <li>Built production Fintech Payment Portal (secure APIs + UI)</li>
        <li>Optimized code & UI for ~40% performance gains</li>
        <li>Delivered multiple live apps: Jus TV, TopTen Electronics, Jus Radio, and more</li>
      </ul>
    </div>
  );
});

