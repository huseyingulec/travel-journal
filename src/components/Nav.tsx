import { useState, useEffect } from "react";

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
        <div className="sticky top-0 w-full bg-white shadow-md dark:bg-black dark:text-white dark:shadow-slate-900">
            <div className="mx-auto max-w-screen-xl items-center justify-between px-7 py-2 md:flex md:pl-12">
                <div className="flex cursor-pointer items-center text-2xl font-bold ">
                    <span className="cursor-pointer pr-1 pt-1.5 text-2xl">
                        <ion-icon name="earth"></ion-icon>
                    </span>
                    Huey's Travel Journal
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-3.5 cursor-pointer text-3xl md:hidden "
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`absolute left-0 z-[-1] w-full cursor-pointer pl-10 shadow-md transition-all ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:shadow-none dark:shadow-slate-900 ${
                        open ? "top-14 bg-white dark:bg-black" : "top-[-490px]"
                    }`}
                >
                    {Links.map(link => (
                        <li
                            key={link.name}
                            className="my-4 text-xl md:mx-5 md:my-0 "
                        >
                            <a href={link.link} className="no-underline">
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <div
                        onClick={() => {
                            setIsDarkMode(!isDarkMode);
                            toggleTheme(!isDarkMode);
                            setOpen(false); // Close the menu
                        }}
                        className="my-4 h-6 text-xl md:mx-5 md:my-0"
                    >
                        <ion-icon name="moon"></ion-icon>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
