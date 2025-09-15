
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const sitemapLinks = [
  { label: "🏠 Home", href: "/" },
  { label: "👩‍💻 About", href: "/#about" },
  { label: "💼 Work", href: "/#work" },
  { label: "🛠️ Projects", href: "/projects" },
  { label: "📬 Contact", href: "/#contact" },
  { label: "🗺️ Sitemap", href: "/sitemap" },
];

const Sitemap = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const buttonStyles = isDark
    ? "bg-gradient-to-tl from-indigo-800 via-purple-900 to-pink-900 text-white"
    : "bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white";

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-12 text-center ${
        isDark
          ? "bg-gradient-to-tl from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-tl from-pink-300 via-purple-600 to-indigo-700 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-white"
      >
        <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
        <p className="text-lg mb-10">Here’s a list of all the pages on this site.</p>

        <div className="grid grid-cols-4 gap-6 max-w-8xl mx-auto">
          {sitemapLinks.map((link, i) => {
            const top = Math.random() * 80 + "%";
            const left = Math.random() * 80 + "%";
            const size = Math.random() * 4 + 2;
            const delay = Math.random() * 2;

            return (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center justify-center w-full gap-3 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 relative ${buttonStyles}`}
                >
                  {link.label}

                  {[...Array(4)].map((_, j) => (
                    <motion.span
                      key={j}
                      className="absolute rounded-full bg-white/90"
                      style={{ width: size, height: size, top, left }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: delay + j * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Sitemap;
