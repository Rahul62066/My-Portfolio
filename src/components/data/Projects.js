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
                "Application créée en ReactJS. Elle permet de faire des recherches de livres en utilisant l'API Google et stocker ceux que l'on souhaite dans notre liste.",
        },
        {
            name: "Ojass Event Project",
            img: ojass,
            live_demo_url: "https://www.ojass.org/",
            gitHub_url: "https://github.com/Forerunner78/React-Shiny-Agency",
            technologies: ["#NextJS", "#Javascript", "#TailwindCSS","#framer-motion","#Shadcn"],
            colSize: 6,
            summary:
                "Template d'un site d'agence créé avec ReactJS. Il possède un dark mode et suggère des profils de développeur en fonction des besoins identifiés au moyen d'un test",
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
                "Site web ecommerce construit en utilisant la technologie MERN (mongoDB, Express, React et Node.js). Les données sont stockées sur mongoDB. Il permet de simuler des achats au moyen de Paypal. En outre il possède un système d'authentification.",
        },
        {
            name: "Site web Portfolio",
            img: portfolio,
            live_demo_url: "https://modern-portfolio-forerunner78.vercel.app/",
            gitHub_url: "https://github.com/Forerunner78/modern-portfolio",
            technologies: ["#nextJS", "#tailwindcss", "#framer-motion"],
            colSize: 6,
            summary:
                "Site web portfolio responsive créé en utilisant NextJS, framer-motion et TailwindCSS. Il possède des animations et des transitions. Il répertorie tous les projets que j'ai créés.",
        },
        {
            name: "Application for Blog",
            img: blog,
            live_demo_url: "https://blogapp-99xn.onrender.com",
            gitHub_url: "https://github.com/Rahul62066/BlogApp.git",
            technologies: ["#ReactJS", "#Redux", "#flowbite-react", "#firebase" ,"MongoDB"],
            colSize: 6,
            summary:
                "Application créée en ReactJS. Elle permet de faire des recherches de livres en utilisant l'API Google et stocker ceux que l'on souhaite dans notre liste.",
        },
        {
            name: "Basic payment app",
            img: paytm,
            live_demo_url: "https://react-shiny-agency.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Shiny-Agency",
            technologies: ["#ReactJS", "#Javascript", "#TailwindCSS"],
            colSize: 6,
            summary:
                "Template d'un site d'agence créé avec ReactJS. Il possède un dark mode et suggère des profils de développeur en fonction des besoins identifiés au moyen d'un test",
        },
        {
            name: " Basic Quize App ",
            img: quize,
            live_demo_url: "https://forerunner78.github.io/React-La-Maison-Jungle/",
            gitHub_url: "https://github.com/Forerunner78/React-La-Maison-Jungle",
            technologies: ["#React Js", "#MongoDB", "#SCSS"],
            colSize: 6,
            summary:
                "Template front-end d'un site e-commerce créé en React. Il permet de manipuler des données, les ajouter ou les retirer de son panier",
        },
        
    ],
};
