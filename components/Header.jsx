import React from "react";

function Header() {
    return (
        <>
            <div className="bg-[#D40D1D] h-[60px] custom-img ">
                <div className="flex justify-center items-center">
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-10 h-[60px]" />
                    <h1 className="pt-3 text-white font-semibold text-2xl z-20">TILES PROJECT</h1>
                </div>
            </div>
        </>
    );
}

export default Header;
