import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import Cursor from "@/layout/cursor";
import Seo from "@/layout/seo";
import Script from "next/script";

const DownloadCVButton = dynamic(() => import("@/layout/download"));
const Header = dynamic(() => import("@/layout/header"));

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P4H7QLYK00"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P4H7QLYK00');
        `}
      </Script>
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
