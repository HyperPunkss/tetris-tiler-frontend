import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";

function Header({ links }) {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    function hamburgerMenuHandler() {
        setHamburgerMenu(!hamburgerMenu);
    }

    function hamburgerMenuCloser() {
        setHamburgerMenu(false);
    }

    return (
        <>
            <div className="bg-[#D40D1D] h-[60px] custom-img sticky left-0 top-0 w-full">
                <div className="flex justify-between items-start ml-6 ">
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/60 z-10 h-[60px]" />
                    <h1 className="pt-3 text-white font-semibold text-2xl z-20">TILES PROJECT</h1>
                    <ul className="hidden gap-8 lg:flex lg:gap- mt-[1px] mr-1 rounded-md h-[56px] z-20">
                        {/* <li className="pt-4 text-[15px] font-semibold text-white z-20 pl-4">TASK 1</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 2</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 3</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 4</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 5</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 6</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 7</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20">TASK 8</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20 ">TASK 9</li>
                        <li className="pt-4 text-[15px] font-semibold text-white z-20 pr-4">TASK 10</li> */}

                        {links.map((link) => (
                            <li key={link.target} className="pt-4 text-[15px] font-semibold text-white z-20 mr-1">
                                <Link href={`/#${link.target}`} className="text-white hover:text-[#c591db]">
                                    <h1 className="p-1">{link.label}</h1>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile Button */}
                    <div
                        className="block cursor-pointer lg:hidden p-2 z-20"
                        onClick={() => {
                            hamburgerMenuHandler();
                            setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
                        }}
                    >
                        {hamburgerMenuIsOpen === true ? (
                            <div>
                                <Hamburger color="#ffffff" toggle={setHamburgerMenuIsOpen} toggled={hamburgerMenuIsOpen} size={25} />
                            </div>
                        ) : (
                            <div>
                                <Hamburger color="#ffffff" toggle={setHamburgerMenuIsOpen} toggled={hamburgerMenuIsOpen} size={25} />
                            </div>
                        )}
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={
                            hamburgerMenu
                                ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen custom-img-dark text-center ease-in duration-300 lg:hidden"
                                : "absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-200 text-center ease-in duration-300 lg:hidden custom-img-dark"
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
                                        <h1 className="text-[40px] font-semibold">{link.label}</h1>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
