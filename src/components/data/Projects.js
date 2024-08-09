import quize from "./../../img/quize.png";
import blog from "./../../img/blog.png";

import paytm from "./../../img/paytm.png";
import portfolio from "./../../img/portfolio.png";
import WorkInProgress from "./../../img/WorkInProgress.jpg";
import chatapp from "./../../img/chatapp.png";
import ojass from "./../../img/ojass.png";
import rnc from "./../../img/rnc.png";

export const projects = {
    collaborations: [
        {
            name: "L'Oréal",
            time: "2 ans et 7 mois",
            projects: [
                "Biotherm",
                "Decleor",
                "Dermacenter",
                "GiorgioArmani",
                "House99",
                "Helena_Rubinstein",
                "Itcosmetics",

            ],
            position: "Developpeur Web Back-end chez Capgemini",
            company: "L'Oréal",
            companyLink: "https://www.loreal.com/fr/",
            address: "Paris",
            work: "Prise en charge de bugs liés au code / à la contribution du Business Manager.. Résolution de bugs 'critiques'.. Implémentation, activation et amélioration du fonctionnement de nouvelles features (programme fidélité et commandes récurrentes).. Implication dans la de revue de code et de documentation.. Rédaction de documents techniques pour présenter des fonctionalités / services mis en place.",
        },
        {
            name: "Orchestra",
            time: "7 mois",
            projects: ["Orchestra"],
            position: "Developpeur Web Back-end chez Capgemini",
            company: "Orchestra",
            companyLink: "https://fr.shop-orchestra.com/",
            address: "Paris",
            work: "Refonte des filtres du site internet au moyen de javascript orienté objet.. Résolution de bugs.. Manipulation de custom / system objects.",
        },

    ],
    groupProjects: [
        {
            name: "Research And Consultancy",
            img: rnc,
            live_demo_url: "https://rnc-nitjsr.in/",
            gitHub_url: "https://github.com/Rahul62066/BlogApp.git",
            technologies: ["#ReactJS", "#Tailwind", "#Shadcn"],
            colSize: 6,
            summary:
                "This project integrates the Research and Consultancy section into the official NIT Jamshedpur website. It enhances accessibility and visibility for R&C activities and resources."
        },
        {
            name: "Ojass Event Project",
            img: ojass,
            live_demo_url: "https://www.ojass.org/",
            gitHub_url: "https://github.com/Forerunner78/React-Shiny-Agency",
            technologies: ["#NextJS", "#Javascript", "#TailwindCSS", "#framer-motion", "#Shadcn"],
            colSize: 6,
            summary:
                "This project is designed for NIT Jamshedpur's Ojass event, featuring an outstanding user interface. It provides an engaging and intuitive platform for event information and participation."
        },
    ],
    personnalProjects: [
        {
            name: "Chat App - Site communication",
            img: chatapp,
            live_demo_url: "https://chat-app-frontend-ruby-nu.vercel.app/",
            gitHub_url: "https://github.com/Rahul62066/chatAppFrontend.git",
            gitHub_url2: "https://github.com/Rahul62066/chatAppBackend.git",
            technologies: ["#ReactJS", "#mongoDB", "#Socket.io"],
            colSize: 12,
            summary:
                "The chat app utilizes React and Socket.IO to provide real-time messaging with instant delivery and seamless interaction. It supports group chats, allowing users to communicate in larger settings, and features a friend request system for managing connections. An admin dashboard offers tools for overseeing user activities and managing app settings. The combination of these features ensures an engaging and efficient communication platform."
        },
        {
            name: "Site web Portfolio",
            img: portfolio,
            live_demo_url: "https://modern-portfolio-forerunner78.vercel.app/",
            gitHub_url: "https://github.com/Forerunner78/modern-portfolio",
            technologies: ["#nextJS", "#tailwindcss", "#framer-motion"],
            colSize: 6,
            summary:
                "My portfolio, built with Next.js and styled using Tailwind CSS, features smooth animations with Framer Motion. It highlights my projects and skills through an interactive, modern design."
        },
        {
            name: "Application for Blog",
            img: blog,
            live_demo_url: "https://blogapp-99xn.onrender.com",
            gitHub_url: "https://github.com/Rahul62066/BlogApp.git",
            technologies: ["#ReactJS", "#Redux", "#flowbite-react", "#firebase", "MongoDB"],
            colSize: 6,
            summary:
                "Built with React and styled with Tailwind CSS, this blog application enables admins to create, update, and delete articles, while users enjoy a seamless reading experience. It offers efficient content management and a responsive, user-friendly design."
        },
        {
            name: "Basic payment app",
            img: paytm,
            live_demo_url: "https://react-shiny-agency.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Shiny-Agency",
            technologies: ["#ReactJS", "#Javascript", "#TailwindCSS"],
            colSize: 6,
            summary:
                "This basic payment app uses sessions to securely save amounts in the database, ensuring efficient transaction management. It provides a simple and reliable solution for handling payments."
        },
        {
            name: " Basic Quize App ",
            img: quize,
            live_demo_url: "https://forerunner78.github.io/React-La-Maison-Jungle/",
            gitHub_url: "https://github.com/Forerunner78/React-La-Maison-Jungle",
            technologies: ["#React Js", "#MongoDB", "#SCSS"],
            colSize: 6,
            summary:
                "Our basic quiz app, developed using the MERN stack, was created by our web team during a hackathon. It offers an engaging and interactive way to test knowledge with seamless performance."
        },

    ],
};
