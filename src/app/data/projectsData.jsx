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
      publishDate: "Mar 8, 2023",
      tags: "Case",
      text: "You have been hired as the frontender for Hogwarts School of Witchcraft and Wizardry, to build a system to help the administrators handle student lists. As test-data you are given the students from the infamous class of 1991. First, you are just asked to provide an interface to show the list, sort by firstname, lastname, or house, as well as filter by house. Also the interface must provide a popup window with detailed information about each student, including photo and house-crestand colors. As you sort your assignment, you are asked to expand on the solution - the administratormust be able to expel individual students, and see a list of expelled students. On a lessdramatic note, two students from each house can be selected as prefects, and this shouldshow in their popup. Then the customer experiences a massive shift in political view, and you are bombardedwith additional requirements. In addition to prefects, some students can be appointed tojoin the inquisitorial squad. You are also tasked with implementing racial profi ling, byadding blood-status to each student - something the original data doesn't have, so youneed to devise an algorithm for fi guring out a students heritage based on lists of family-names. You grow a bit tired of these new modifi cations, so you decide to hack the system. First you want to infiltrate the school, so you inject yourself in the list of students (in the house of your choice), and make sure that you can't be expelled by the administrator.",
      website: "https://hogwarts-student-list.vercel.app/",
      alt: "Hogwarts Student List",
      technologies: [
        {
          techs: ["HTML, CSS, JavaScript, AdobeXD"],
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
      publishDate: "May 3, 2023",
      tags: "Case",
      text: "You have been hired as the frontender for Hogwarts School of Witchcraft and Wizardry, to build a system to help the administrators handle student lists. As test-data you are giventhe students from the infamous class of 1991. First, you are just asked to provide an interface to show the list, sort by firstname, lastname, or house, as well as filter by house. Also the interface must provide a popup window with detailed information about each student, including photo and house-crestand colors. As you sort your assignment, you are asked to expand on the solution - the administratormust be able to expel individual students, and see a list of expelled students. On a lessdramatic note, two students from each house can be selected as prefects, and this shouldshow in their popup. Then the customer experiences a massive shift in political view, and you are bombardedwith additional requirements. In addition to prefects, some students can be appointed tojoin the inquisitorial squad. You are also tasked with implementing racial profi ling, byadding blood-status to each student - something the original data doesn't have, so youneed to devise an algorithm for fi guring out a students heritage based on lists of family-names. You grow a bit tired of these new modifi cations, so you decide to hack the system. First youwant to infiltrate the school, so you inject yourself in the list of students (in the house ofyour choice), and make sure that you can't be expelled by the administrator.",
      website: "https://edc-case.vercel.app/",
      alt: "EDC case",
      technologies: [
        {
          techs: ["HTML, CSS, JavaScript, AdobeXD"],
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
      publishDate: "Nov 3, 2023",
      tags: "Design / Web Application",
      text: " As a part of Copenhagen International Fashion Fair, i was tasked to make a Registration Page. The registration form includes: Dynamic Routing Setup: Four distinct registration forms for buyers, press, visitors, and exhibitors. Each form tailored to gather the right information for each type of attendee.",

      website: "https://ciff.strom.works/registration/buyer",
      alt: "CIFF website",
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
      publishDate: "Jul 26, 2021",
      tags: "Web Application",
      text: "Internal dashboard for Copenhagen International Fashion Fair. The dashboard incluces: Map where it's possible the add and remove stands to make an overview, ticket overview, check-in overview, data from different seasons ",
      website: "",
      alt: "No website - internal infomation",
      technologies: [
        {
          techs: ["HTML, CSS, JavaScript, AdobeXD"],
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
