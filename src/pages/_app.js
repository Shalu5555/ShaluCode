import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import Cursor from "@/layout/cursor";
import Seo from "@/layout/seo";

const DownloadCVButton = dynamic(() => import("@/layout/download"));
const Header = dynamic(() => import("@/layout/header"));

export default function App({ Component, pageProps }) {
  return (
    <>
      <Seo
        title="Shalu Gole Portfolio | Frontend Developer"
        description="Explore Shalu Gole's Portfolio with projects, skills, and work experience in frontend development."
        keywords="Shalu Gole, Portfolio, Frontend Developer, React, Next.js"
        image="/og-home.png"
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Cursor />
        <Header />
        <Component {...pageProps} />
        <DownloadCVButton />
      </ThemeProvider>
    </>
  );
}
