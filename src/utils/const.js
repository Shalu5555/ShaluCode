import { FaBriefcase } from "react-icons/fa";

export const DARK = "dark";
export const WEBSITE_URL = "https://shaluuu-portfolio.netlify.app";

export const LINKS = {
  INSTA: "https://www.instagram.com/shaluuuuuuuuuuu1114/",
  GITHUB: "",
  GITLAB: "https://gitlab.com/shalugole",
  EMAIL: "mailto:shalugole369@gmail.com",
  LINKEDIN: "https://www.linkedin.com/in/shalugole369",

};

export const EXPERIENCES = [
  {
    year: "Aug 2023 – Present",
    role: "Senior Software Engineer (Frontend | MERN & React Native)",
    company: "Raysteeds Infotech Pvt. Ltd., Dehradun, UK",
    company_url: "https://www.raysteedsinfotech.com",
    desc: "Started my journey with HTML, CSS, JavaScript. Learned basics of React and responsive design.",
    icon: "/assets/company/raysteeds.webp",
    // icon: <FaBriefcase />,
    points: [
      "Lead frontend development of scalable web and mobile applications using React, Next.js, and React Native.",
      "Built and deployed live iOS & Android applications with smooth cross-platform performance.",
      "Engineered and modern web applications integrated with Node.js, REST APIs, and third-party services.",
      "Spearheaded UI/UX revamps, boosting user engagement and accessibility.",
      "Integrated secure payment gateways (Google Pay, etc.) into fintech solutions.",
      "Optimized codebase and app performance, reducing load times by 40%.",
      "Mentored junior developers and lead a team for API-driven projects.",
    ],
  },
  {
    year: "Sept 2022 - July 2023",
    role: "Full Stack Developer Intern (Paid Internship)",
    company: "Numeric Infosystem Pvt. Ltd., Gwalior, MP",
    company_url: "https://numericinfosystem.com",
    desc: "Worked on React projects, integrated APIs, improved performance and accessibility.",
    icon: "/assets/company/num.jfif",
    points: [
      "Completed a paid 8-month internship, gaining certifications in Full Stack Development & React Native.",
      "Assisted in building MERN stack web applications and React Native mobile apps.",
      "Developed REST APIs and optimized database queries for better efficiency.",
      "Built reusable UI components and ensured responsive design & cross-browser compatibility.",
      "Contributed to live projects and gained hands-on experience with end-to-end development.",
    ],
  }
];

export const PROJECTS = [
  {
    name: "Barcode India",
    description:
      "BCI has been a pioneer in India’s supply chain and manufacturing sector since the 1990s. Revamp BCI’s digital presence to reflect its transformation into an industry leader, optimizing its brand positioning for the B2B sector through an enhanced website and impactful content strategy.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/bci.png",
    source_code_link: "https://www.barcodeindia.com/",
  },
  {
    name: "Strategy Soda",
    description:
      "Web application that enables users to search for architect brand ecosystems with AI-driven insights, data intelligence, and consumer psychology. Optimizing every touchpoint, we maximize brand recall, engagement, and conversion.",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS(Admin)",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/strategy_soda.png",
    source_code_link: "https://strategysoda.com",
  },
  {
    name: "Soulbites",
    description:
      "Web application e-commerce that Build the brand from scratch, including strategy, logo, packaging, and e-commerce presence. Position Soulbites as a premium, wellness-first dry fruit brand grounded in tradition, care, and sustainability.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/soulbite.webp",
    source_code_link: "https://www.soulbites.in",
  },
  {
    name: "Raysteeds Energy",
    description:
      "Raysteeds Energy is a trusted solar energy company in India, specializing in rooftop solar panel installations for homes, businesses, and industrial spaces. We provide cost-effective, high-quality solar power solutions to help you reduce electricity bills and switch to clean, renewable energy. Our expert team ensures hassle-free installation, government subsidy support, and long-term savings through sustainable solar technology.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Talwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "restapis",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/raysteeds_energy.png",
    source_code_link: "https://raysteedsenergy.com",
  },
  {
    name: "Miezu Alkaline Ionizer",
    description:
      "Miezu, India’s leading manufacturer of Alkaline Water Ionizers, is dedicated to enhancing wellness through scientifically advanced hydration solutions. Miezu has also partnered with CSIR-IICT (GOI) to drive innovation in alkaline water technology We designed and developed a user-centric eCommerce website for Miezu, optimized for seamless navigation, secure transactions, and an enhanced shopping experience. We executed an educational social media strategy and produced compelling brand videos, showcasing Miezu’s tech-driven mission and health-forward vision.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/meizu.webp",
    source_code_link: "https://www.miezualkalineionizer.com",
  },
  {
    name: "Gyankool",
    description:
      "Gyaankool helps coaches, trainers, experts, and educators launch, manage, and grow their digital education business - all in one place. From courses to communities, we make teaching simple, scalable, and impactful.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/gyankool_landing.png",
    source_code_link: "https://www.gyaankool.com",
  },
  {
    name: "Gyankool Tool",
    description:
      "Gyaankool helps coaches, trainers, experts, and educators launch, manage, and grow their digital education business - all in one place. From courses to communities, we make teaching simple, scalable, and impactful.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/gyankool_coach.png",
    source_code_link: "https://app.gyaankool.com",
  },
  {
    name: "JUS TV (Website and MobileApp-Android/IOS)",
    description:
      "Jus Broadcasting Corp entered the market in 2007 with launch of its flagship channel Jus Punjabi TV in the United States",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/jusbroadcasting.webp",
    source_code_link: "https://apps.apple.com/in/app/jus-tv/id6444840768",
  },
  {
    name: "Mashup",
    description:
      "Exclusive community of high school students who want to learn from the best, apply to internships across the country, get involved in growth-oriented clubs.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/mashupedu.webp",
    source_code_link: "https://mashupedu.in",
  },
  {
    name: "TopTen Electronics",
    description:
      "Founded in 1996 with its first ever store in Vashi, Top Ten Electronics is growing stronger by the day in Navi Mumbai.With 10 already functional stores",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Admin",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/topten.webp",
    source_code_link: "https://www.toptenelectronics.in",
  },
  {
    name: "Shri Ramdawar Pandey Mahavidyalaya",
    description:
      "Shri Ramdawar Pandey Mahavidyalaya, Laradpur, Oril, Phoolpur, Azamgarh in the honour of Late Shri Ramdawar Pandey ji, was established in 2005",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/sriramda.webp",
    source_code_link: "https://brdpcollege.org",
  },
  {
    name: "Feewa Energy",
    description:
      "Solar energy is a clean and renewable source of power that does not produce any emissions, making it an important tool in the fight against climate change.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/feewaenergy.png",
    source_code_link: "https://www.feewaenergy.com",
  },
  {
    name: "Krologix",
    description:
      "Encourage innovation with trusted Technology Solutions At Krologix, we are your innovation partners and technology enablers. We bring creativity and expertise to the forefront of your business, offering a diverse array of services that include mobile development, website development, data center solutions, staff augmentation, social networking, ERP systems, e-commerce, and online learning platforms.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/krologix.png",
    source_code_link: "https://krologix.com/",
  },
];