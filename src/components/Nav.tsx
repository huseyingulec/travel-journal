import { useState, useEffect } from "react";
import {
    HamburgerMenuIcon,
    Cross1Icon,
    MoonIcon,
    SunIcon,
    GlobeIcon,
} from "@radix-ui/react-icons";
import { Flex, Heading, Text } from "@radix-ui/themes";

const Nav = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About me", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => setIsDarkMode(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        // Set the initial theme based on the system preference
        toggleTheme(isDarkMode);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = (darkMode: any) => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return (
        <div className="sticky top-0 w-full shadow-md z-40 bg-white dark:bg-black dark:shadow-slate-900 ">
            <Flex
                mx="auto"
                align="center"
                justify="between"
                px={"5"}
                py={"2"}
                className="max-w-screen-xl"
            >
                <Flex align="center">
                    <GlobeIcon className="m-1" />
                    <Heading weight="medium" size="5">
                        Huey's Travel Journal
                    </Heading>
                </Flex>

                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-3.5 cursor-pointer md:hidden "
                >
                    {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </div>

                <ul
                    className={`absolute left-0 z-[-1] w-full cursor-pointer pl-10 shadow-md transition-all ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:shadow-none dark:shadow-slate-900 ${
                        open ? "top-9 bg-white dark:bg-black" : "top-[-490px]"
                    }`}
                >
                    {Links.map(link => (
                        <li key={link.name} className="my-4 md:mx-5 md:my-0 ">
                            <a href={link.link} className="no-underline">
                                <Text size="4" weight="regular">
                                    {link.name}
                                </Text>
                            </a>
                        </li>
                    ))}

                    <div
                        onClick={() => {
                            setIsDarkMode(!isDarkMode);
                            toggleTheme(!isDarkMode);
                            setOpen(false); // Close the menu
                        }}
                        className="my-4 md:mx-5 md:my-0"
                    >
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </div>
                </ul>
            </Flex>
        </div>
    );
};

export default Nav;
