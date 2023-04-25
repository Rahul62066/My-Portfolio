import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import ProfilePicture from "../img/photo_Alex_R.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { projects } from "../components/data/Projects";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
};

const experienceYears = () => {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2019;
    return experienceYears;
};

const projectsNumber = (collaboration) => {
    var number = 0;
    var projects = collaboration.map(function (project) {
        number += project.projects.length;
    });
    return number;
};

const collaborationNumber = (collaboration) => {
    return collaboration.length;
};

const About = () => {
    return (
        <>
            <Head>
                <title>Forerunner | About Page</title>
                <meta name="description" content="About page" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Présentation" className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biographie
                            </h2>
                            <p className="font-medium">
                                Je suis un développeur web avec une formation initiale scientifique.
                                Mon parcours académique m'a permis d'acquérir des compétences telles
                                que la recherche d'information, de solutions et la curiosité, que
                                j'ai ensuite transposées au développement web.
                            </p>
                            <p className="font-medium my-4">
                                Au fil de mes {experienceYears()} années d'expérience dans
                                l'écosystème SFCC, j'ai acquis de solides compétences techniques et
                                une capacité à répondre rapidement et efficacement aux
                                problématiques, ce qui m'a permis de contribuer significativement
                                aux projets auxquels j'ai participé. J'ai obtenu la certification
                                "Salesforce B2C Commerce Developer" qui atteste de mes compétences à
                                gérer la configuration / contribution du Business Manager ainsi que
                                le code sous-jacent.
                            </p>
                            <p className="font-medium">
                                Pour être plus polyvalent et efficace, j'ai également suivi des
                                formations et appris de nouvelles technologies front-end telles que
                                React, Next.js ou encore TailwindCSS. N'hésitez pas à consulter mes
                                différents projets!
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={ProfilePicture}
                                alt="Real picture photo"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers
                                        value={collaborationNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                    Collaborations
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers
                                        value={projectsNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                    Projets
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={experienceYears()} /> +
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};
export default About;
