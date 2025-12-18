
import dynamic from "next/dynamic";

const Seo = dynamic(() => import("@/layout/seo"));
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const WorkExp = dynamic(() => import("@/components/WorkExp"));
const Skills = dynamic(() => import("@/components/Skills"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <div>
      <Seo
        title="Shalu Gole Portfolio | Frontend Developer"
        description="Explore Shalu Gole's Portfolio with projects, skills, and work experience in frontend development."
        keywords="Shalu Gole, Portfolio, Frontend Developer, React, Next.js"
        image="/og-home.png"
      />
      {/* <RotatingCube /> */}
      <Hero />
      <About />
      <WorkExp />
      <Skills />
      <Contact />
    </div>
  );
}
