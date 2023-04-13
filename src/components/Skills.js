import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.25 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Compétences</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <Skill name="Web" x="0vw" y="0vw" />
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="Tailwind CSS" x="20vw" y="6vw" />
                <Skill name="Javascript" x="0vw" y="12vw" />
                <Skill name="ReactJS" x="-20vw" y="-15vw" />
                <Skill name="NextJS" x="15vw" y="-12vw" />
                <Skill name="Sass" x="32vw" y="-5vw" />
                <Skill name="Bootstrap" x="0vw" y="-20vw" />
                <Skill name="JQuery" x="-25vw" y="18vw" />
                <Skill name="Firebase" x="18vw" y="18vw" />
                <Skill name="Node.js" x="8vw" y="-1vw" />
                <Skill name="Visual Studio Code" x="-16vw" y="-4vw" />
                <Skill name="BitBucket" x="-22vw" y="13vw" />
            </div>
        </>
    );
};
export default Skills;
