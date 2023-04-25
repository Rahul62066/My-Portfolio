import AnimatedText from "../components/AnimatedText";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import { motion } from "framer-motion";
import { projects } from "../components/data/Projects";
import Technologies from "../components/Technologies";

const DisplayProjects = () => {
    const personalProjects = projects.personnalProjects;
    return personalProjects.map(function (project, index) {
        const title = project.name;
        const img = project.img;
        const summary = project.summary;
        const link = project.live_demo_url;
        const github = project.gitHub_url;
        const technologies = project.technologies;

        if (project.colSize === 12) {
            return (
                <FeaturedProject
                    key={index}
                    title={title}
                    img={img}
                    summary={summary}
                    link={link}
                    github={github}
                    technologies={technologies}
                />
            );
        } else {
            return (
                <Project
                    key={index}
                    title={title}
                    img={img}
                    summary={summary}
                    link={link}
                    github={github}
                    technologies={technologies}
                />
            );
        }
    });
};

const FeaturedProject = ({ title, summary, img, link, github, technologies }) => {
    const tech1 = technologies[0];
    const tech2 = technologies[1];
    const tech3 = technologies[2];
    return (
        <div className="col-span-12">
            <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light">
                <div className="absolute top-0 left-0 -right-3 -z-10 w-[101.5%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
                <Link
                    href={link}
                    target="_blank"
                    className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
                >
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto flex justify-center items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                    />
                </Link>
                <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-4xl font-bold text-primary dark:text-primaryDark">
                            {title}
                        </h2>
                    </Link>

                    <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                    <div className="flex flex-row justify-normal">
                        <Technologies tech1={tech1} tech2={tech2} tech3={tech3} />
                    </div>
                    <div className="mt-5 flex items-center">
                        <Link href={github} target="_blank" className="w-10">
                            <GithubIcon />
                        </Link>
                        <Link
                            href={link}
                            target="_blank"
                            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
                        >
                            Demo live
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

const Project = ({ title, summary, img, link, github, technologies }) => {
    const tech1 = technologies[0];
    const tech2 = technologies[1];
    const tech3 = technologies[2];
    return (
        <div className="col-span-6">
            <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
                <div className="absolute top-0 left-0 -right-3 -z-10 w-[101.5%] h-[101.5%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
                <Link
                    href={link}
                    target="_blank"
                    className="w-full cursor-pointer overflow-hidden rounded-lg"
                >
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                    />
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-3xl font-bold text-primary dark:text-primaryDark">
                            {title}
                        </h2>
                    </Link>
                    <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                    <div className="flex flex-row justify-normal">
                        <Technologies tech1={tech1} tech2={tech2} tech3={tech3} />
                    </div>

                    <div className="w-full mt-5 flex items-center justify-between">
                        <Link
                            href={link}
                            target="_blank"
                            className="text-lg font-semibold underline"
                        >
                            Demo live
                        </Link>
                        <Link href={github} target="_blank" className="w-8">
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

const FramerImage = motion(Image);

const Projects = () => {
    return (
        <>
            <Head>
                <title>Forerunner | Projects Page</title>
                <meta name="description" content="Projects page" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Mes différents projets" className="mb-16" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        <DisplayProjects />
                    </div>
                </Layout>
            </main>
        </>
    );
};
export default Projects;
