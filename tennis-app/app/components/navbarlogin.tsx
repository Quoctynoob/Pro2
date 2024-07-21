import React from "react";

const SideNavbar = () => {
    return (
        <nav className="fixed h-screen w-64 bg-black">
            <ul>
                <li>
                    <a href="/dashboard" className="text-white ">Home</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideNavbar;