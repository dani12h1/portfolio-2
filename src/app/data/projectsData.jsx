//Hogwarts
import hogwarts from "../assets/hogwarts-mac.png";
import pansy from "../assets/pansy.png";
import hackgrid from "../assets/hackgrid.png";
//Ciff
import ciff from "../assets/ciff2.png";
import ciffBuyer from "../assets/ciff-buyer.png";
import visitor from "../assets/ciff-visitor.png";
//edc
import edc from "../assets/edc2.png";
import edcBuyers from "../assets/edc-buyers.png";
import edcContact from "../assets/edc-contact.png";
//dashboard
import dashboard from "../assets/dashboard2.png";
import map from "../assets/map.png";
import notification from "../assets/notification.png";

export const projectsData = [
  {
    id: 1,
    slug: "hogwarts",
    content: {
      heading: "Hogwarts Student List",
      publishDate: "Mar, 2023",
      tags: "Case",
      text: "<br>Case description: <br><br>You have been hired as the frontender for Hogwarts School of Witchcraft and Wizardry, to build a system to help the administrators handle student lists. As test-data you are given the students from the infamous class of 1991. <br><br>First, you are just asked to provide an interface to show the list, sort by firstname, lastname, or house, as well as filter by house. Also the interface must provide a popup window with detailed information about each student, including photo and house-crestand colors. As you sort your assignment, you are asked to expand on the solution - the administratormust be able to expel individual students, and see a list of expelled students.<br><br> Two students from each house can be selected as prefects, and this should show in their popup. In addition to prefects, some students can be appointed to join the inquisitorial squad. You are also tasked with implementing racial profiling, by adding blood-status to each student - something the original data doesn't have, so you need to devise an algorithm for figuring out a students heritage based on lists of family-names.<br><br> You grow a bit tired of these new modifications, so you decide to hack the system. First you want to infiltrate the school, so you inject yourself in the list of students (in the house of your choice), and make sure that you can't be expelled by the administrator.",
      website: "https://hogwarts-student-list.vercel.app/",
      alt: "Hogwarts Student List",
      technologies: [
        {
          techs: ["HTML, CSS, JavaScript, AdobeXD, Design"],
        },
      ],

      image1: {
        src: hogwarts,
      },
      image2: {
        src: pansy,
      },
      image3: {
        src: hackgrid,
      },
    },
  },
  {
    id: 2,
    slug: "edc-case",
    content: {
      heading: "EDC - Find a buyer",
      publishDate: "May, 2023",
      tags: "Case",
      text: "The goal of this case is to help people who are thinking of selling their property (the seller) to get an idea of the market before they work with a real estate agent. This will help them understand the value of their property and the potential buyers in their area before beginning the process or engaging with an agent. If they find a potential buyer, EDC can start the process of contacting them and helping them sell their property.",
      website: "https://edc-case.vercel.app/",
      alt: "EDC case",
      technologies: [
        {
          techs: ["CSS, Next.js, API, AdobeXD, design"],
        },
      ],

      image1: {
        src: edcBuyers,
      },
      image2: {
        src: edcContact,
      },
      image3: {
        src: edc,
      },
    },
  },
  {
    id: 3,
    slug: "ciff",
    content: {
      heading: "Copenhagen International Fashion Fair",
      publishDate: "Nov, 2023",
      tags: "Design / Web Application",
      text: " As a part of Copenhagen International Fashion Fair, i was tasked to make a Registration Page. <br><br> The registration form includes dynamic routing setup with four distinct registration forms for buyers, press, visitors, and exhibitors. Each form tailored to gather the right information for each type of attendee.",
      website: "https://ciff.strom.works/registration",
      alt: "CIFF registration",
      // website2: "https://ciff.strom.works/registration/press",
      // alt2: "CIFF website press",
      // website3: "https://ciff.strom.works/registration/exhibitor",
      // alt3: "CIFF website exhibitor",
      // website4: "https://ciff.strom.works/registration/visitor",
      // alt4: "CIFF website visitor",

      technologies: [
        {
          techs: ["Typescript, Next.js, Figma, API"],
        },
      ],

      image1: {
        src: ciffBuyer,
      },
      image2: {
        src: visitor,
      },
      image3: {
        src: ciff,
      },
    },
  },
  {
    id: 4,
    slug: "dasboard",
    content: {
      heading: "CIFF Dashboard",
      publishDate: "Aug, 2022",
      tags: "Web Application",
      text: "The dashboard encompasses a comprehensive array of features designed to cater to the diverse needs of managing a large-scale event like the Copenhagen International Fashion Fair. <br> <br> <b> <b>These features include: <br>  Map Overview:</b> An interactive map interface with a visual overview of the stands. <br>  <b> <b> Ticket Overview:</b></b> Monitoring ticket sales, attendee demographics, and other information for understanding attendee profiles. <br><b><b>Check-in Overview:</b></b> Real-time tracking of attendee check-ins to facilitate smooth entry management and crowd control during the event. <br><b>Ticket Management: </b> A system for managing tickets and resolving ticket-related issues.<br><b> Data Visualization:</b> Dynamic charts and analytics tools that provide insights of the amount of check-ins. <br><b>Comparable Data from Different Seasons:</b> Historical data comparison that enables organizers to identify patterns, trends and amount of visitor across different editions of the fashion fair. <br><b>Communication Channels:</b> Integration with email, SMS, and dedicated app-based communication channels for disseminating important updates, announcements, and promotional messages to visitors and exhibitors.",
      website: "",
      alt: "No website - internal infomation",
      technologies: [
        {
          techs: ["Next.js, Tailwind, Figma, API"],
        },
      ],

      image1: {
        src: notification,
      },
      image2: {
        src: map,
      },
      image3: {
        src: dashboard,
      },
    },
  },
];
