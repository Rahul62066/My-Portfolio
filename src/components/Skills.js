import { motion } from "framer-motion";
import { skills } from "./data/Skills";

const displaySkills = (skills) => {
    console.log(skills);
    return skills.skillsArray.map(function (skill) {
        var name = skill.name;
        var x = skill.x;
        var y = skill.y;

        return (
            <motion.div
                key={name}
                className={`flex bg-blue- items-center justify-center rounded-full font-semibold ${skill.colorLight} text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:${skill.colorDark}`}
                whileHover={{ scale: 1.25 }}
                initial={{ x: 0, y: 0 }}
                whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            >
                {name}
            </motion.div>
        );
    });
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Compétences</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                {displaySkills(skills)}
            </div>
        </>
    );
};
export default Skills;
