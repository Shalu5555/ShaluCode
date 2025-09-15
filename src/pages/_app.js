import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import Cursor from "@/layout/cursor";

const DownloadCVButton = dynamic(() => import("@/layout/download"));
const Header = dynamic(() => import("@/layout/header"));

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Cursor />
      <Header />
      <Component {...pageProps} />
      <DownloadCVButton />
    </ThemeProvider>
  );
}
