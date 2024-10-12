import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "@/public/assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "product",
        title: "Product",
    },
    {
        id: "clients",
        title: "Clients",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Hands-on Learning",
        content:
            "Our offline, activity-based sessions provide practical experience with the latest technologies and equipment.",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "Industry-Ready Skills",
        content:
            "Master in-demand skills like AI, IoT, and Computer Vision, preparing you for the jobs of tomorrow.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Global Certification",
        content:
            "Earn globally recognized certifications that boost your credentials and career prospects worldwide.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "User Active",
        value: "3800+",
    },
    {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+",
    },
    {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
    },
];

export const footerLinks = [
    {
        id: "footerLinks-1",
        title: "Useful Links",
        links: [
            {
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        id: "footerLinks-2",
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        id: "footerLinks-3",
        title: "Partners",
        links: [
            {
                name: "Amal Jyothi College of Engineering",
                link: "https://www.ajce.in/",
            },
            {
                name: "Unique World Robotics",
                link: "https://uniqueworldrobotics.com/",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];

export const courses = [
  {
    id: "course-1",
    title: "Computer Vision with OpenCV",
    tagline: "Unveil the Power of Machine Vision",
    icon: "/assets/brain-circuit.svg",
    duration: "6 weeks",
    highlights: [
      "Learn fundamental concepts of Computer Vision",
      "Hands-on experience with OpenCV library",
      "Build real-world projects like face detection and object tracking",
      "Understand image processing techniques",
      "Explore applications in robotics and autonomous systems"
    ]
  },
  {
    id: "course-2",
    title: "Deep Learning & Generative AI",
    tagline: "Master the Art of AI Creativity",
    icon: "/assets/brain-circuit.svg",
    duration: "8 weeks",
    highlights: [
      "Dive deep into neural network architectures",
      "Implement cutting-edge generative AI models",
      "Create AI-generated art and content",
      "Understand the ethics and implications of AI",
      "Build a portfolio of AI projects"
    ]
  },
  {
    id: "course-3",
    title: "Internet of Things (IoT)",
    tagline: "Connect the World with Smart Devices",
    icon: "/assets/brain-circuit.svg",
    duration: "5 weeks",
    highlights: [
      "Explore IoT architecture and protocols",
      "Program microcontrollers for IoT applications",
      "Implement sensor networks and data collection",
      "Develop IoT-based smart home solutions",
      "Learn about IoT security and privacy considerations"
    ]
  },
  {
    id: "course-4",
    title: "Smart Projects with Raspberry Pi",
    tagline: "Build Smart Solutions with Raspberry Pi",
    icon: "/assets/brain-circuit.svg",
    duration: "4 weeks",
    highlights: [
      "Get started with Raspberry Pi programming",
      "Create interactive hardware projects",
      "Learn GPIO programming for sensors and actuators",
      "Develop web-controlled Raspberry Pi applications",
      "Build a final project combining multiple skills"
    ]
  },
];
