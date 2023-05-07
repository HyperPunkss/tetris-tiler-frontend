import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

function HeaderBar({ links }) {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    function hamburgerMenuHandler() {
        setHamburgerMenu(!hamburgerMenu);
    }

    function hamburgerMenuCloser() {
        setHamburgerMenu(false);
    }

    return (
        <div className="fixed left-0 top-0 w-full ease-in duration-300 z-50 h-[85px] custom-img-dark">
            <div className="max-w-[1240px] flex justify-between items-center p-8 text-white md:p-6">
                <h1 className="text-[20px] lg:text-[30px]">Tile Project</h1>
                <ul className="hidden gap-5 md:gap-[14px] lg:gap-8 md:flex">
                    {links.map((link) => (
                        <li key={link.target} className="pt-1 text-[15px] font-semibold text-white z-20 ">
                            <Link href={`/#${link.target}`} className="text-white hover:text-[#c591db]">
                                <h1 className="text-[16px] md:text-[16px]">{link.label}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <div
                    className="-my-8 block z-[2] cursor-pointer md:hidden "
                    onClick={() => {
                        hamburgerMenuHandler();
                        setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
                    }}
                >
                    {hamburgerMenuIsOpen === true ? (
                        <Hamburger toggle={setHamburgerMenuIsOpen} toggled={hamburgerMenuIsOpen} size={25} />
                    ) : (
                        <Hamburger toggle={setHamburgerMenuIsOpen} toggled={hamburgerMenuIsOpen} size={25} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        hamburgerMenu
                            ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen custom-img-dark text-center ease-in duration-300 md:hidden"
                            : "absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen custom-img-dark text-center ease-in duration-300 md:hidden"
                    }
                >
                    <ul>
                        {links.map((link) => (
                            <li key={link.target} className="pt-4 text-[15px] font-semibold text-white z-20 pl-4">
                                <Link
                                    href={`/#${link.target}`}
                                    className="text-white hover:text-[#c591db]"
                                    onClick={() => {
                                        hamburgerMenuCloser();
                                        setHamburgerMenuIsOpen(false);
                                    }}
                                >
                                    <h1 className="text-[20px] font-semibold">{link.label}</h1>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderBar;
