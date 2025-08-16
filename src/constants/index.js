import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  tda,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1fbJ16xMRcBmAa_VyjzKy-j7mzJurL7IW/view?usp=drivesdk";
export const repoLink = "https://github.com/thejatinbaghel/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/jatin-baghel";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Lovely Professional University",
    degree: "Bachelor of Technology",
    duration: "October 2022 - Current",
    content1: "Domain: Full-Stack Web Development"
    // content1: "Major: Electronics and Communication Engineering",
    // content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "OPGM Senior Seconday School",
    degree: "",
    duration: "April 2021 - March 2022",
    // content1: "Graduated with a distinction in the fifth cohort of the OPGM Senior Seconday School at the National University of Singapore.",
    content1: "Intermediate"
  },
  {
    id: "education-2",
    icon: tda,
    title: "Tribhuvan Devi Academy",
    degree: "",
    duration: "April 2018 - May 2019",
    // content1: "Graduated with a distinction in the fifth cohort of the OPGM Senior Seconday School at the National University of Singapore.",
    content1: "High School"
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  // {
  //   id: "a-1",
  //   icon: ethindia,
  //   event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
  //   position: "Winner",
  //   content1: "True Network's Winner, Polkadot's 1st Runner Up",
  //   content2: "Lit Protocol's 2nd Runner Up",
  //   content3: "Coinbase Pool Prize, Base Top 10",
  //   article: "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
  //   project: "https://devfolio.co/projects/khoj-3336",
  //   youtube: "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  // },
  {
    id: "a-1",
    icon: ethindia,
    event: "Cloud Computing",
    position: "IIT Kharagpur",
    content1: "Cloud Computing Architecture",
    content2: "Research trend in Cloud Computing, Fog Computing",
    content3: "Serverless Computing and FaaS Model",
    project: "https://devfolio.co/projects/khoj-3336",
  },
  // {
  //   id: "a-2",
  //   icon: ethglobal,
  //   event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
  //   position: "Winner",
  //   content1: "Top 12 winners among 20k+ registrations",
  //   content2: "One of Polygon's Best Public Goods",
  //   content3: "Best Module on Biconomy SDK",
  //   article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
  //   project: "https://devfolio.co/projects/chargeswap-3527",
  //   youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  // },
  {
    id: "a-2",
    icon: ethglobal,
    event: "Prompt Engineering for ChatGPT",
    position: "Vanderbilt University",
    content1: "Chain of thought prompting",
    content2: "Prompt patterns",
    content3: "Large Language Models",
    project: "https://www.coursera.org/account/accomplishments/verify/PTAVX52X3EYF",
  },
  // {
  //   id: "a-3",
  //   icon: polkadot,
  //   event: "Polkadot Hackathon: Europe Edition",
  //   position: "2nd Runner Up in the ink! Smart Contract Category",
  //   content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
  //   content2: "",
  //   content3: "",
  //   github: "https://github.com/pranav2305/GreenTrust",
  // },
  {
    id: "a-3",
    icon: polkadot,
    event: "Building Web Applications in PHP",
    position: "University of Michigan",
    content1: "Basic syntax and data structures of PHP, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements.",
    content2: "",
    content3: "",
    project: "https://www.coursera.org/account/accomplishments/verify/56O3AZSBYI9A",
  },
  // {
  //   id: "a-4",
  //   icon: lightspeed,
  //   event: "Warpspeed by Lightspeed",
  //   position: "1st Runner Up",
  //   content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
  //   content2: "Top 3 projects using Replit",
  //   content3: "1st Runner Up by Amazon Web Services (AWS)",
  //   article: "https://shorturl.at/fhjsT",
  // },
  {
    id: "a-4",
    icon: lightspeed,
    event: "Introduction to Large Language Models",
    position: "Google Cloud",
    content1: "LLM Use Cases",
    content2: "Google’s Gen AI Development tools",
    content3: "Prompt Tuning",
    project: "https://coursera.org/verify/NTSQMCLTYU6V",
  },
  // {
  //   id: "a-5",
  //   icon: dennisivy,
  //   event: "September Hackathon by Dennis Ivy",
  //   position: "Winner",
  //   content1: "Rated the best portfolio website among 450+ participants across the globe.",
  //   content2: "",
  //   content3: "",
  //   youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
  //   project: "https://parthmittal.netlify.app/",
  // },
  {
    id: "a-5",
    icon: dennisivy,
    event: "Programming in C++: A Hands-on Introduction",
    position: "Coursera",
    content1: "Automate everyday, repetitive tasks using C++ programs",
    content2: "Create engaging, graphical based programs",
    content3: "",
    project: "https://coursera.org/share/fac73295f8db787f2f2d93be116968e6",
  },
  // {
  //   id: "a-6",
  //   icon: manipal,
  //   event: "Manipal Hackathon'22",
  //   position: "Consolation Prize",
  //   content1: "Top 10 among 500+ teams across India",
  //   content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
  //   content3: "",
  //   article: "https://shorturl.at/exEIQ",
  // },
  // {
  //   id: "a-7",
  //   icon: icon,
  //   event: "ICON Hyperbuild Hackathon",
  //   position: "Honorable Mention",
  //   content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devpost.com/software/green-trust-xj2w6g",
  // },
  // {
  //   id: "a-8",
  //   icon: ethforall,
  //   event: "ETHForAll 2023",
  //   position: "Top 3 Superfluid Projects",
  //   content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devfolio.co/projects/green-trust-ed14",
  // },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      // {
      //   id: "pl-1",
      //   icon: DiRuby,
      //   name: "Ruby",
      // },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      // {
      //   id: "pl-4",
      //   icon: FaGolang,
      //   name: "Go",
      // },
      // {
      //   id: "pl-5",
      //   icon: FaRust,
      //   name: "Rust",
      // },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      // {
      //   id: "pl-11",
      //   icon: SiSolidity,
      //   name: "Solidity",
      // }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      // {
      //   id: "f-2",
      //   icon: SiRubyonrails,
      //   name: "Ruby on Rails",
      // },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-8",
        icon: SiDotnet,
        name: ".NET",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  // {
  //   organisation: "Oracle, India",
  //   logo: oracle,
  //   link: "https://www.oracle.com/in/",
  //   positions: [
  //     {
  //       title: "Member of Technical Staff - 1",
  //       duration: "Jul 2024 - Present",
  //       content: [
  //         {
  //           text: "Working in the Database as a Service Control Plane team for Oracle Cloud Infrastructure.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Member of Technical Staff Intern",
  //       duration: "May 2023 - Jul 2023",
  //       content: [
  //         {
  //           text: "Worked with the Exadata Cloud@Customer team in the Database Unit.",
  //           link: "",
  //         },
  //         {
  //           text: "Wrote APIs in Java to help gracefully migrate a running ExaC@C infrastructure to a new region in the case of a region failure",
  //           link: ""
  //         }
  //       ],
  //     },
  //   ],
  // },
  {
    organisation: "Cloud Computing",
    logo: oracle,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "IIT Kharagpur",
        duration: "October 2024",
        content: [
          {
            text: "Working in the Database as a Service Control Plane team for Oracle Cloud Infrastructure.",
            link: "",
          },
        ],
      },
      {
        title: "Member of Technical Staff Intern",
        duration: "May 2023 - Jul 2023",
        content: [
          {
            text: "Worked with the Exadata Cloud@Customer team in the Database Unit.",
            link: "",
          },
          {
            text: "Wrote APIs in Java to help gracefully migrate a running ExaC@C infrastructure to a new region in the case of a region failure",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Averlon",
    logo: averlon,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Sept 2023 - Feb 2024",
        content: [
          {
            text: "Added support for the discoverability of Microsoft Azure assets utilising Go and Gremlin.",
            link: ""
          },
          {
            text: "Extended support for Azure for reachability analysis of assets for cloud security posture management.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "IRIS, NITK",
    logo: iris,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Tech Lead",
        duration: "Apr 2023 - Apr 2024",
        content: [
          {
            text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
            link: "",
          },
          {
            text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Lead",
        duration: "Apr 2022 - Present",
        content: [
          {
            text: "Managed a team of 6 student developers while also overlooking multiple modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer",
        duration: "Nov 2021 - Apr 2022",
        content: [
          {
            text: "Added Conditional Fields support to the Forms Module.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer Intern",
        duration: "Jun 2021 - Oct 2021",
        content: [
          {
            text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
    {
    id: "project-6",
    title: "JobReady AI",
    github: "https://github.com/thejatinbaghel/JobReady-AI",
    link: "http://jobreadyai.jatin.app/",
    image: cdc,
    content:
      "The official website of CDC, NITK with a custom built CMS.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-1",
    title: "Zaika",
    github: "https://github.com/thejatinbaghel/Zaika",
    link: "https://thejatinbaghel.github.io/Zaika/",
    image: comicify_ai,
    content:
      "Geolocate nearby restaurants and order food online.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-2",
    title: "HealthBridge",
    github: "https://github.com/jatin-baghel/GreenTrust",
    // link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Hospital Management System",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-3",
    title: "TravelLite",
    github: "https://github.com/thejatinbaghel/TravelLite",
    // link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A travel agency web application powered by Django + MySQL + Materialize CSS",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "Messenger X",
    github: "https://github.com/thejatinbaghel/realtime-chat",
    // link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Realtime chatting website",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "JobReady AI",
    github: "https://github.com/thejatinbaghel/Hostel-Management-System",
    link: "",
    image: recruitment,
    content:
      "Created using MERN Stack",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },

  // {
  //   id: "project-7",
  //   title: "Stocky",
  //   github: "https://github.com/thejatinbaghel/stocky",
  //   // link: "https://devfolio.co/projects/huntly-b5a9",
  //   image: huntly,
  //   content:
  //     "Stocky is a fullstack web application built with Java, Spring Boot, and Angular that helps busy store owners manage all of their stores in one place. This app is designed to be both robust and user-friendly, with a sleek and modern interface.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django Rest Framework"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiFlutter,
  //       name: "Flutter"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiReplit,
  //       name: "Replit"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiFlask,
  //       name: "Flask"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiFigma,
  //       name: "Figma"
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiGooglemaps,
  //       name: "Google Maps API"
  //     },
  //   ],
  // },
  // {
  //   id: "project-8",
  //   title: "Cluboard",
  //   github: "https://github.com/jatin-baghel/Cluboard",
  //   link: "",
  //   image: cluboard,
  //   content:
  //     "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiJavascript,
  //       name: "JavaScript"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiBootstrap,
  //       name: "Bootstrap"
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiChartdotjs,
  //       name: "Chart.js"
  //     },
  //   ],
  // },
  // {
  //   id: "project-9",
  //   title: "Cash Flow Minimiser",
  //   github: "https://github.com/jatin-baghel/Cash-Flow-Minmiser",
  //   link: "https://minimise-cash-flow.netlify.app/",
  //   image: cash_flow,
  //   content:
  //     "A React application to help users visualise and minimise cash flow among multiple transactions.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS"
  //     }
  //   ],
  // },
  // {
  //   id: "project-10",
  //   title: "Portfolio",
  //   github: "https://github.com/jatin-baghel/personal-portfolio",
  //   link: "https://parthmittal.netlify.app/",
  //   image: portfolio,
  //   content: "Personal portfolio website with React and Tailwind CSS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "Tailwind CSS"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //   ],
  // },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/jatin-baghel",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/thejatinbaghel",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:notjatinbaghel@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.x.com/thejatinbaghel",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/notjatinbaghel",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Jatin Baghel",
    githubUsername: 'mittal-parth',
    // tagLine: "MTS-1 @Oracle | ex-Tech Lead @IRIS,NITK | ETHIndia'22,24 Winner | 8x Hackathon Winner | NITK'24 | PBA-5",
    intro: "Software Developer from India who is either busy improving his craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
