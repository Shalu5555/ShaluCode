
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

const Seo = ({
  title = "Shalu Gole Portfolio | Frontend Developer",
  description = "Frontend Developer Portfolio of Shalu Gole. Check out projects, skills, and work experience.",
  keywords = "Shalu Gole, Portfolio, Frontend Developer, React, Next.js, GSAP, Framer Motion",
  image = "/og-image.png",
  author = "Shalu Gole",
  type = "website",
}) => {
  const router = useRouter();
  const url = `https://shaluportfolio.netlify.app${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shalu Gole",
            url: "https://shaluportfolio.netlify.app",
            sameAs: [
              "https://www.linkedin.com/in/shalugole369",
              "https://github.com/shalugole",
            ],
            jobTitle: "Frontend Developer",
            image: "https://shaluportfolio.netlify.app/me.png",
            description: description,
          }),
        }}
      />
    </Head>
  );
};

export default Seo;
