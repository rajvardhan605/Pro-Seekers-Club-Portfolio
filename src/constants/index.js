import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  socialmedia,
  computer,
  mobiles,
  contents,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Applicatons",
    icon: web,
  },
  {
    title: "Mobile Applications",
    icon: mobile,
  },
  {
    title: "Content Writing",
    icon: backend,
  },
  {
    title: "Social Media Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Applications",
    company_name: "ReactJS, NodeJS, ExpressJS, MongoDB, Java",
    icon: computer,
    iconBg: "#383E56",
    points: [
      "Custom Web Application Development: We create bespoke web applications tailored to your business needs, ensuring a unique and effective online presence. Utilizing the MERN stack (MongoDB, Express.js, React, Node.js), we deliver scalable and high-performance solutions.",
      "Responsive Design: Our web applications are designed to be fully responsive, providing an optimal user experience across all devices. From desktops to mobile phones, your application will look and perform flawlessly.",
      "Efficient and Robust Solutions: By leveraging the power of the MERN stack, we build efficient, secure, and robust web applications. This modern technology stack allows us to develop applications that are not only fast and reliable but also easy to maintain and upgrade.",
      "Rapid Development and Deployment: We prioritize delivering your projects on time without compromising quality. Our streamlined development process, combined with the latest tools and technologies, ensures that we meet your deadlines and help you launch your online presence swiftly.",
    ],
  },
  {
    title: "Mobile Applications",
    company_name: "React Native, Flutter ",
    icon: mobiles,
    iconBg: "#E6DEDD",
    points: [
      "Cross-Platform Mobile Development: We develop high-quality mobile applications using the latest technologies like React Native and Flutter. This approach ensures that your app runs smoothly on both iOS and Android devices, providing a consistent user experience across platforms.",
      "User-Centric Design: Our mobile applications are designed with the user in mind. We focus on creating intuitive and engaging interfaces that enhance user satisfaction and drive engagement, helping your business connect with customers more effectively.",
      "Efficient Performance and Scalability: Leveraging the capabilities of React Native and Flutter, we build mobile apps that are both efficient and scalable. This ensures your application can handle growth and increased demand, providing a seamless experience regardless of user load.",
      "Rapid Development and Deployment: Our expertise in the latest mobile technologies allows us to accelerate the development process without sacrificing quality. We ensure timely delivery of robust mobile applications, enabling your business to establish its online presence quickly and efficiently.",
    ],
  },
  {
    title: "Content Writing",
    company_name: "Social Media, Web Pages, Blogs",
    icon: contents,
    iconBg: "#383E56",
    points: [
      "Engaging Blog Posts: We create compelling and informative blog posts that capture your audience's interest and drive traffic to your website. Our content is tailored to reflect your brand's voice and resonates with your target audience, enhancing your online visibility.",
      "SEO-Optimized Content: Our content writing services include SEO optimization to improve your search engine rankings. We incorporate relevant keywords and follow best practices to ensure your content attracts organic traffic and helps your business reach a broader audience.",
      "Comprehensive Content Strategies: We develop comprehensive content strategies that align with your business goals. From planning and creation to distribution and analysis, we ensure your content effectively supports your online marketing efforts and drives growth.",
      "Variety of Content Formats: Beyond blogs, we create a variety of content formats, including articles, social media posts, newsletters, and more. Our diverse content offerings help you engage with your audience across multiple platforms and build a strong online presence.",
    ],
  },
  {
    title: "Social Media Marketing",
    company_name: "Meta",
    icon: socialmedia,
    iconBg: "#E6DEDD",
    points: [
      "We design comprehensive social media strategies tailored to your business goals. By planning and scheduling engaging stories, posts, and updates, we ensure consistent and impactful presence on various social media platforms.",
      "Our team creates visually appealing and compelling content, including graphics, videos, and written posts. We focus on crafting messages that resonate with your target audience, driving engagement and fostering brand loyalty.",
      "Utilizing advanced targeting techniques, we run effective social media campaigns and advertisements. By reaching the right audience with the right message, we help maximize your ROI and achieve your marketing objectives.",
      "We monitor and analyze the performance of your social media activities using the latest analytics tools. This data-driven approach allows us to optimize strategies, improve engagement, and ensure continuous growth for your business online.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
