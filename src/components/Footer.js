import Layout from "./Layout";
import Technologies from "./Technologies";

const Footer = () => {
    return (
        <footer className="w-full boder-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
            <Layout className="py-8 w-full">
                <div className="absolute left-[50%] bottom -py-5 translate-x-[-50%] flex items-center flex-col">
                    <div>
                        Build with{" "}
                        <span className="text-primary dark:text-primaryDark text-2xl px-1">
                            &#9825;
                        </span>{" "}
                        by&nbsp;
                        <span className="underline underline-offset-2">Forerunner</span>
                    </div>
                    <div className="w-full flex justify-between mx-auto">
                        <Technologies tech1="#nextJS" tech2="#tailwindcss" tech3="#framer-motion" />
                    </div>
                </div>
                <div className="flex flex-col absolute right-[7%] items-end">
                    <div>{new Date().getFullYear()} &copy; All Rights Reserved</div>
                    <div>
                        Thank you{" "}
                        <a
                            href="https://github.com/codebucks27"
                            className="underline underline-offset-2 cursor-pointer"
                        >
                            CodeBucks
                        </a>
                        !
                    </div>
                </div>
            </Layout>
        </footer>
    );
};
export default Footer;
