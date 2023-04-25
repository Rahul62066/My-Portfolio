import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { education } from "./data/Education";

const EducationDetails = ({ education }) => {
    return education.map((educationFact) => (
        <Details
            key={educationFact.name}
            name={educationFact.name}
            company={educationFact.company}
            year={educationFact.year}
            place={educationFact.address}
        />
    ));
};

const Details = ({ name, company, year, place }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">{name}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {year} |{" "}
                    <span className="uppercase font-bold text-primary dark:text-primaryDark">
                        {company}
                    </span>{" "}
                    - {place}
                </span>
                {/* <p className="font-medium w-full">{info}</p> */}
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Parcours d'étude</h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <EducationDetails education={education} />
                </ul>
            </div>
        </div>
    );
};
export default Education;
