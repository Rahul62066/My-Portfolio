import Layout from "./Layout";

const Footer = () => {
    return (
        <footer className="w-full boder-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 w-full">
                <div className="absolute left-[50%] bottom -py-5 translate-x-[-50%] flex items-center">
                    Build with <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
                    <span className="underline underline-offset-2">Forerunner</span>
                </div>
                <span className="flex justify-end ">
                    {new Date().getFullYear()} &copy; All Rights Reserved
                </span>
            </Layout>
        </footer>
    );
};
export default Footer;
