import { Project } from "@/interfaces/Project.interface";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaAws, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJest,
  SiMongoose,
  SiSequelize,
  SiTwilio,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const projects: Project[] = [
  {
    landingPage: "/landingPages/patientManagementSystemLandingPage.png",
    type: "full-stack",
    title: "Patient Management System",
    techUsed: [
      { icon: RiNextjsFill, title: "Next.js", color: "#000000" },
      { icon: FaNodeJs, title: "Node.js", color: "#339933" },
      { icon: SiExpress, title: "Express.js", color: "#000000" },
      { icon: BiLogoPostgresql, title: "PostgreSQL", color: "#336791" },
      { icon: SiSequelize, title: "Sequelize", color: "#52B0E7" },
      { icon: FaAws, title: "AWS", color: "#FF9900" },
      { icon: SiTwilio, title: "Twilio", color: "#F22F46" },
      { icon: SiJest, title: "Jest", color: "#C21325" },
      { icon: RiTailwindCssFill, title: "Tailwind CSS", color: "#38B2AC" },
    ],
    link: "https://www.carepulse.pro/",
    description:
      "The Patient Management System is a web-based application designed to streamline the patient onboarding process, appointment scheduling, and administrative oversight. It offers an intuitive interface for patients to register, verify their identity via SMS-based One-Time Password (OTP), and schedule appointments with doctors. Administrators can manage appointments through a secure dashboard, ensuring smooth healthcare service delivery. The system follows a modern, secure, and scalable architecture built with industry-standard technologies, emphasizing both performance and maintainability.",
  },
  {
    landingPage: "/landingPages/algoForkLandingPage.png",
    type: "full-stack",
    title: "AlgoFork",
    techUsed: [
      { icon: FaReact, title: "React.js", color: "#61DAFB" },
      { icon: FaNodeJs, title: "Node.js", color: "#339933" },
      { icon: SiExpress, title: "Express.js", color: "#000000" },
      { icon: BiLogoMongodb, title: "MongoDB", color: "#47A248" },
      { icon: SiMongoose, title: "Mongoose", color: "#47A248" },
      { icon: IoLogoVercel, title: "Vercel", color: "#000000" },
      { icon: SiJest, title: "Jest", color: "#C21325" },
      { icon: RiTailwindCssFill, title: "Tailwind CSS", color: "#38B2AC" },
    ],
    link: "https://www.algofork.com/",
    description:
      "AlgoFork is a full stack, free alternative to LeetCode, providing coding challenges focused on algorithms and problem-solving. It emphasizes understanding real-world scenarios, helping developers solve problems and grasp the reasoning behind them. The platform will offer a fun, interactive learning experience to improve coding skills",
  },
  {
    landingPage: "/landingPages/reactGameStoreLandingPage.png",
    type: "frontend",
    title: "React Game Store",
    techUsed: [
      { icon: FaReact, title: "React.js", color: "#61DAFB" },
      { icon: IoLogoVercel, title: "Vercel", color: "#000000" },
      { icon: RiTailwindCssFill, title: "Tailwind CSS", color: "#38B2AC" },
    ],
    link: "https://react-game-store-flame.vercel.app/",
    description:
      "React-Game-Store is a dynamic website built with React, designed to showcase a variety of games by fetching data from an external API. The project demonstrates modern web development practices, including state management, API integration, and responsive design, making it an ideal platform for exploring and discovering games.",
  },
  {
    landingPage: "/landingPages/vidRentLandingPage.png",
    type: "backend",
    title: "VidRent",
    techUsed: [
      { icon: FaNodeJs, title: "Node.js", color: "#339933" },
      { icon: SiExpress, title: "Express.js", color: "#000000" },
      { icon: BiLogoMongodb, title: "MongoDB", color: "#47A248" },
      { icon: SiMongoose, title: "Mongoose", color: "#47A248" },
      { icon: SiJest, title: "Jest", color: "#C21325" },
    ],
    link: "https://github.com/EngenMe/VidRent",
    description:
      "A RESTful API Backend application built with Node.js and Express for managing video rentals. It provides functionality to handle customers, movies, genres, rentals, and user authentication with full CRUD operations and role-based access control.",
  },
  {
    landingPage: "/landingPages/staticWebsiteLandingPage.png",
    type: "frontend",
    title: "Static Website",
    techUsed: [
      { icon: FaHtml5, title: "HTML", color: "#E34F26" },
      { icon: FaCss3Alt, title: "CSS", color: "#1572B6" },
      { icon: IoLogoJavascript, title: "JavaScript", color: "#F7DF1E" },
    ],
    link: "https://main--engenme.netlify.app/",
    description:
      "Static Website This modern, responsive website was developed using HTML, CSS, and JavaScript. It showcases a clean design and impressive performance metrics, including: 99% Performance Score: Fast loading times and efficient code. 99% Accessibility Score: Ensuring an inclusive experience for all users. Built from scratch, this project highlights my skills in front-end development and web design. Special thanks to Mosh Hamedani for his invaluable courses that provided the knowledge and skills necessary to bring this website to life.",
  },
  {
    landingPage: "/landingPages/licenseTrackSystemLandingPage.jpg",
    type: "desktop",
    title: "License Track System",
    techUsed: [
      { icon: TbBrandCSharp, title: "C#", color: "#239120" },
      { icon: DiMsqlServer, title: "MSSQL", color: "#CC2927" },
    ],
    link: "https://github.com/EngenMe/LicenseTrack",
    description:
      "Developed a comprehensive system for managing driving licences, tests, and user data using C# with 3 tiers architecture and SQL Server. This project involved: Database Design: Created and implemented an ER diagram and SQL Server database from scratch to manage user and test data efficiently. User Management: Enabled functionalities for adding, updating, and suspending user accounts, with custom permissions and restrictions. Test Management: Facilitated vision, theory, and practical test bookings, with automated checks to enforce prerequisites and restrictions. Interface Development: Designed an intuitive user interface for managing people, tests, and licensing processes, including filtering and searching capabilities.",
  },
  {
    landingPage: "/landingPages/posResturantSystem.jpg",
    type: "desktop",
    title: "POS Restaurant System",
    techUsed: [
      { icon: TbBrandCSharp, title: "C#", color: "#239120" },
      { icon: DiMsqlServer, title: "MSSQL", color: "#CC2927" },
    ],
    link: "https://github.com/EngenMe/RestaurantPOSSystem",
    description:
      "Point of Sales System for Restaurants Developed a full-featured POS system using C# and Windows Forms, including a loading and login screen, a sales dashboard, and user management functionalities. Designed the ER diagram and database from scratch, implementing CRUD operations using ADO.NET. Integrated features such as table reservations, sales reports, and customisable settings for restaurant management.",
  },
];
