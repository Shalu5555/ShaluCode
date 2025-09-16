
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "@/components/Logo";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import CurlyBorder from "@/components/SVG/curlyBorder";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Work", href: "#work", id: "work" },
  // { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (router.pathname === "/about") setActiveSection("about");
    else if (router.pathname === "/projects") setActiveSection("projects");
    else if (router.pathname === "/") setActiveSection("");
  }, [router.pathname]);

  // Handle hash (#work, #contact etc.)
  useEffect(() => {
    if (router.asPath.includes("#")) {
      const hash = router.asPath.split("#")[1];
      if (hash) setActiveSection(hash.toLowerCase());
    }
  }, [router.asPath]);

  // Intersection Observer for same-page scrolling highlights
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newSection = entry.target.id.toLowerCase();

            // Update active section state
            setActiveSection(newSection);

            // Update URL hash without reloading the page
            // if (router.pathname === "/") {
            //   window.history.replaceState(
            //     null,
            //     "",
            //     `/#${newSection}`
            //   );
            // }
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, [router.pathname]);


  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);


  const handleNavClick = (e, link) => {
    if (link.href.startsWith("#")) {
      e.preventDefault();
      const sectionId = link.href.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${sectionId}`);
      }
      setIsDrawerOpen(false);
    }
  };
  const isDark = resolvedTheme === "dark";

  // If not mounted yet, don't render theme-dependent UI (prevents flicker/hydration mismatch)
  if (!mounted) { }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-40 transition-colors duration-500 ${scrolled ? "bg-[#0b0b0b7a] backdrop-blur-md shadow-md " : "bg-transparent"
        }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-3 lg:px-6 py-3">
        <div className=" -ml-10 lg:ml-0 ">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium relative">
          <div className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`cursor-pointer relative transition-colors ${isActive ? "font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 bg-clip-text text-transparent" : " text-white"}`}
                >
                  {link.name}

                  {isActive && (<CurlyBorder />)}
                </Link>
              );
            })}
          </div>

          <div
            className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer flex items-center p-1"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            <motion.div
              className={`absolute top-1 ${isDark ? "bg-[#e5e7eb]" : "bg-[#ff0000]"
                } w-6 h-6 rounded-full shadow-md flex items-center justify-center`}
              animate={{ x: isDark ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
              {isDark ? (
                <BsMoonStarsFill className="text-blue-600 w-5 h-5" />
              ) : (
                <MdSunny className="text-yellow-400 w-5 h-5" />
              )}
            </motion.div>
          </div>
        </nav>

        <div className="flex items-center space-x-2 md:hidden">
          <div
            className="relative w-13 h-7 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer flex items-center p-1"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            <motion.div
              className={`absolute top-1 ${isDark ? "bg-[#e5e7eb]" : "bg-[#ff0000]"
                } w-5 h-5 rounded-full shadow-md flex items-center justify-center`}
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
              {isDark ? (
                <BsMoonStarsFill className="text-blue-600 w-4 h-4" />
              ) : (
                <MdSunny className="text-yellow-400 w-4 h-4" />
              )}
            </motion.div>
          </div>

          {/* Drawer Toggle */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isDrawerOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed h-screen inset-0 z-40 bg-[#000000a1] bg-opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-gray-900 via-gray-800 to-black backdrop-blur-sm shadow-lg z-50 flex flex-col items-start p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="self-end text-white text-2xl mb-4"
            >
              <FiX />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-lg border-b-2 w-full ${activeSection === link.id
                  ? "font-bold text-pink-500"
                  : "text-gray-200"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
