const Technologies = ({ tech1, tech2, tech3 }) => {
    return (
        <>
            <div className="text-xs text-primaryRed dark:text-primaryDarkOrange">{tech1}</div>
            <div className="text-xs text-primaryPurple dark:text-primaryDarkYellow mx-3">
                {tech2}
            </div>
            <div className="text-xs text-primaryBlue dark:text-primaryDark">{tech3}</div>
        </>
    );
};

export default Technologies;
