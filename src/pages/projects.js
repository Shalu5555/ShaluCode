import dynamic from "next/dynamic";

const Seo = dynamic(() => import("@/layout/seo"));
const AllProjects = dynamic(() => import("@/components/AllProjects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Projects() {
  return (
    <div>
      <Seo
        title="Shalu Gole Projects | Frontend Portfolio"
        description="Check out Shalu Gole's frontend projects built with React, Next.js, and GSAP."
        keywords="Shalu Gole, Projects, React, Next.js, Portfolio"
        image="/assets/logo.jpg"
      />
      <AllProjects />
      <Contact />
    </div>
  );
}
