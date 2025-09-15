import dynamic from "next/dynamic";

const Seo = dynamic(() => import("@/layout/seo"));
const About = dynamic(() => import("@/components/About"));
const Contact = dynamic(() => import("@/components/Contact"));
const Hero = dynamic(() => import("@/components/Hero"));
const Skills = dynamic(() => import("@/components/Skills"));
const WorkExp = dynamic(() => import("@/components/WorkExp"));

export default function Home() {
  return (
    <div>
      <Seo
        title="Shalu Gole Portfolio | Frontend Developer"
        description="Explore Shalu Gole's Portfolio with projects, skills, and work experience in frontend development."
        keywords="Shalu Gole, Portfolio, Frontend Developer, React, Next.js"
        image="/og-home.png"
      />
      <Hero />
      <About />
      <WorkExp />
      <Skills />
      <Contact />
    </div>
  );
}
