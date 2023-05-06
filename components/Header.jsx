import React from "react";

function Header() {
    return (
        <>
            <div className="bg-[#D40D1D] h-[60px] custom-img ">
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/20 h-[60px] w-full z-10" />
                <h1 className="text-white font-bold p-[12px] text-2xl z-20">TILE APP</h1>
            </div>
        </>
    );
}

export default Header;
