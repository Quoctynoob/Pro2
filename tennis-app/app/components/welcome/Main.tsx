import React from "react";
import Hero from "../welcome/Hero";
import About from "../welcome/About";
import List from "../welcome/List";

const Main = () => {
    return (
        <main>
            {/*Organizing files together*/}
            <Hero/>
            <About/>
            <List/>
        </main>
    );
};

export default Main;