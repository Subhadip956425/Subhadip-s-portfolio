// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import shadcnuiLogo from "./assets/tech_logo/shadcn.jpg";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import phpLogo from "./assets/tech_logo/PHP.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import HibernateLogo from "./assets/tech_logo/Hibernate.png";
import cLogo from "./assets/tech_logo/c.png";
// import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import IntelliJIDEALogo from "./assets/tech_logo/IntelliJIDEA.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import DockerLogo from "./assets/tech_logo/Docker.png";
import KubernetesLogo from "./assets/tech_logo/Kubernetes.png";
import AWSLogo from "./assets/tech_logo/AWS.png";
import GoogleCloudLogo from "./assets/tech_logo/Google Cloud.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import RestApiLogo from "./assets/tech_logo/RestApi.png";
// import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import Infosys from "./assets/company_logo/infosys.png";
import IBM from "./assets/company_logo/IBM.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import TIB from "./assets/education_logo/TIB.png";
import Mohar from "./assets/education_logo/Mohar.png";
import WBBSE from "./assets/education_logo/WBBSE.png";

// Project Section Logo's
import neuroFleetX from "./assets/work_logo/neurofleetx.png";
import Taskorbit from "./assets/work_logo/Taskorbit.png";
import Authenavenue from "./assets/work_logo/Authenavenue.png";
import Authenchain from "./assets/work_logo/Authenchain.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import Bankmanagement from "./assets/work_logo/Bankmanagement.png";
import Restaurant from "./assets/work_logo/Restaurant.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "shadcnui", logo: shadcnuiLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "PHP", logo: phpLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Hibernate", logo: HibernateLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "RESTful API", logo: RestApiLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "IntelliJ IDEA", logo: IntelliJIDEALogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Docker", logo: DockerLogo },
      { name: "Kubernetes", logo: KubernetesLogo },
      { name: "AWS", logo: AWSLogo },
      { name: "Google Cloud", logo: GoogleCloudLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Infosys,
    role: " Java Foundation Certification",
    company: "Infosys Springboard",
    date: "June 12, 2025",
    desc: "I have successfully completed the Java Foundation Certification from Infosys Springboard as part of the Virtual Internship 6.0 program. This certification validated my understanding of core Java concepts such as object-oriented programming (OOP), data types, control structures, exception handling, classes, objects, inheritance, and basic input/output operations. Completing this certification has strengthened my Java fundamentals and boosted my confidence in solving real-world problems using robust, object-oriented approaches.",
    skills: ["Java", "DBMS", "SQL", "NoSQL", "Agile", "Scrum", "OOP", "DSA"],

    link: "https://drive.google.com/file/d/1opBXQys2yndtWfHbyg9JeDV-wBzKYYTi/view?usp=drivesdk",
  },
  {
    id: 1,
    img: IBM,
    role: "Web Development Fundamentals",
    company: "IBM SkillsBuild",
    date: "July 05, 2025",
    desc: "I have successfully completed the Web Development Fundamentals certification issued by IBM SkillsBuild, which provided a comprehensive understanding of both front-end and back-end web development principles. Through this program, I gained practical knowledge of building interactive websites using HTML, CSS, and JavaScript within a simulated integrated development environment (IDE). The course emphasized key areas such as responsive design, accessibility, usability, and deployment strategies. It also introduced me to tools like Visual Studio Code, concepts in DevOps, the software development lifecycle (SDLC), and testing practices. This certification has enhanced my proficiency in web development and prepared me for industry-relevant roles by aligning my skills with modern web technologies and development processes.",
    skills: [
      "HTML",
      "CSS",
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "DevOps",
      "IDE",
      "Responsive Design",
      "Frontend",
      "Backend",
    ],
    link: "https://www.credly.com/badges/8949cf6d-5619-48ba-900e-1fbee30cc56a/public_url",
  },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "IntelliJ IDEA",
  //     "Material UI",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: TIB,
    school: "Techno International Batanagar - MAKAUT",
    date: "Sept 2022 - present",
    grade: "8.14 GPA",
    desc: "I am Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering at Techno International Batanagar, affiliated with MAKAUT. My coursework includes core subjects like Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Technologies, and Software Engineering. I have built several full-stack projects and actively participated in technical events, hackathons, and internships, gaining hands-on experience in Java, Spring Boot, React.js, Node.js, and DevOps tools. This academic journey is enhancing both my technical expertise and problem-solving abilities, preparing me for a dynamic career in software development.",
    degree: "B.Tech in Computer Science & Engineering - B.Tech(CSE)",
  },
  {
    id: 1,
    img: Mohar,
    school: "Mohar B.M High School",
    date: "Apr 2020 - March 2022",
    grade: "92.2%",
    desc: "I completed my Higher Secondary education from Mohar B.M. High School under the West Bengal Council of Higher Secondary Education (WBCHSE), securing 92.2% with a focus on Physics, Chemistry, Mathematics, and Biology (PCMB). This academic phase played a crucial role in strengthening my analytical thinking, problem-solving abilities, and logical reasoning. It also sparked my curiosity for technology and scientific innovation, which ultimately guided me toward a career in Computer Science and Engineering. My consistent academic performance and participation in science-related activities helped me build a strong foundation for future technical pursuits and higher education.",
    degree: "WBCHSE(XII) - PCMB",
  },
  {
    id: 2,
    img: WBBSE,
    school: "Kushbasan High School (H.S)",
    date: "Jan 2019 - March 2020",
    grade: "88.85%",
    desc: "I completed my Secondary School education from Kushbasan High School (H.S) under the West Bengal Board of Secondary Education (WBBSE) with a commendable score of 88.85%. This academic phase laid the groundwork for my interest in science and technology, especially in logical reasoning and analytical thinking. I developed strong fundamentals in subjects like Mathematics, Physical Science, and Life Science, which later influenced my decision to pursue Computer Science & Engineering. This period also shaped my discipline, study habits, and commitment to academic excellence, helping me build a solid base for higher education and technical proficiency.",
    degree: "WBBSE(X) - Secondary School Certificate (SSC)",
  },
  // {
  //   id: 3,
  //   img: vpsLogo,
  //   school: "Vatsalya Public School Govardhan, Mathura",
  //   date: "Apr 2015 - March 2016",
  //   grade: "87.5%",
  //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //   degree: "CBSE(X), Science with Computer Application",
  // },
];

export const projects = [
  {
    id: 0,
    title: "NeuroFleetX",
    description:
      "An AI-driven fleet management and analytics platform that provides intelligent monitoring, predictive maintenance insights, and data-driven decision support using machine learning and real-time analytics.",
    image: neuroFleetX,
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "Machine Learning",
      "REST APIs",
      "Docker",
      "AI Analytics",
    ],
    github: "https://github.com/Subhadip956425/NeuroFleetX",
    webapp: "https://neuro-fleet-x.vercel.app/",
  },
  {
    id: 1,
    title: "Project Management System-TaskOrbit",
    description:
      "TaskOrbit is a full-stack project management application built with Java, Spring Boot, React.js, and Redux Toolkit. It enables users to manage tasks, projects, and teams with features like task assignment, real-time status updates, and secure JWT-based authentication. Designed with a user-friendly UI using Tailwind CSS and Shadcn UI, it supports collaborative workflows and efficient task tracking.",
    image: Taskorbit,
    tags: [
      "Spring Boot",
      "React JS",
      "API",
      "Shadcn/ui",
      "MySql",
      "tailwindcss",
      "Razorpay",
      "Redux",
      "RESTful APIs",
    ],
    github: "https://github.com/Subhadip956425/TaskOrbit",
    webapp: "https://task-orbit-eosin.vercel.app/",
  },
  {
    id: 2,
    title: " Crypto Trading Platform-AuthenAvenue",
    description:
      "Developed a full-stack crypto trading platform using Java, Spring Boot, and Angular, supporting real-time trading functionalities. Integrated RESTful APIs and WebSockets for live market data and seamless user interaction. Implemented robust security mechanisms including two-factor authentication (2FA) and data encryption to ensure safe transactions. Users can access customizable dashboards, perform trades, and view live analytics. The platform also focuses on regulatory compliance to provide a legally sound trading environment",
    image: Authenavenue,
    tags: [
      "Spring Boot",
      "React JS",
      "Shadcn/ui",
      "MySql",
      "tailwindcss",
      "Redux",
      "RESTful APIs",
      "OpenAI API",
    ],
    github: "https://github.com/Subhadip956425/AuthenAvenue",
    webapp: "https://authen-avenue.vercel.app/",
  },
  {
    id: 3,
    title: "Document Verification System-AuthenChain",
    description:
      "AuthenChain is a blockchain-based document verification system that ensures secure, tamper-proof validation using smart contracts, IPFS, and MetaMask. It enables decentralized storage, hash-based authentication, and real-time verification while integrating AI (OpenCV, NLP) for document forgery detection. Built with Solidity, Web3, and React.js, the platform supports global accessibility, encrypted data security, and automated workflows for sectors like education, healthcare, and government.",
    image: Authenchain,
    tags: [
      "Java",
      "Solidity",
      "React JS",
      "Ether js",
      "web3",
      "Metamask",
      "IPFS",
      "Validation",
    ],
    github:
      "https://github.com/Subhadip956425/DocumentVerification_System/blob/main/README.md",
    webapp: "https://authenchain.netlify.app/",
  },
  {
    id: 4,
    title: "Bank Management System",
    description:
      "Bank Management System is a Java-based desktop application designed to manage basic banking operations such as account creation, deposits, withdrawals, balance inquiries, and transaction history. Built using Java and Swing for the GUI, the system offers a user-friendly interface and ensures secure handling of customer data. It serves as a foundational project to demonstrate core Java concepts like object-oriented programming, file handling, and exception management.",
    image: Bankmanagement,
    tags: [
      "Java",
      "Java Swing",
      "Desktop Application",
      "Banking System",
      "OOP",
      "File Handling",
      "Exception Handling",
      "GUI",
    ],

    github: "https://github.com/Subhadip956425/Bank_Management_System",
    webapp: "https://github.com/Subhadip956425/Bank_Management_System",
  },
  {
    id: 5,
    title: "AI-Powered Fitness Application – SmartFit360",
    description:
      "SmartFit360 is an AI-powered fitness tracking application designed using Spring Boot microservices architecture. It leverages AI to generate personalized workout recommendations, tracks user activity in real-time, and ensures a secure and scalable experience using OAuth 2.0 and Keycloak. The platform integrates microservices for user management, fitness activity tracking, AI recommendations, and asynchronous communication via RabbitMQ, offering a robust, intelligent, and secure fitness solution.",
    image: taskremLogo,
    tags: [
      "Spring Boot",
      "Microservices",
      "RabbitMQ",
      "OAuth 2.0",
      "Keycloak",
      "AI Recommendations",
      "Fitness Tracker",
      "Gemini API",
      "Config Server",
      "API Gateway",
      "React",
      "Redux",
      "RESTful API",
    ],
    github: "https://github.com/Subhadip956425/Fitness_Application-SmartFit360",
    webapp: "https://github.com/Subhadip956425/Fitness_Application-SmartFit360",
  },
  {
    id: 6,
    title: "Restaurant Website-India Bite",
    description:
      "India_Bite is a responsive and visually engaging food delivery website built using HTML, CSS, and JavaScript. The project showcases a modern UI design with interactive elements, simulating a real-world food ordering experience. It includes sections for featured dishes, restaurant listings, customer testimonials, and a contact form, making it ideal for presenting frontend development and web design skills.",
    image: Restaurant,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
      "UI/UX",
    ],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "PHP", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
