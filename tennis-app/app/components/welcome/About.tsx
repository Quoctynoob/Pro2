import React from "react";
import { useRouter } from "next/router";

const About = () => {
    const router = useRouter();
    const SignUpButton = () => {
        router.push('/signup');
    };

    return (
        <section id= "about" className="bg-emerald-200 w-full h-screen p-8 snap-start justify-between items-center flex flex-row">
            <div className="w-1/2">
                <img src="/images/tennis.jpg" alt="Tennis Court" />
            </div>
            <div className="w-1/2 p-11">
                <div className="h-12 text-black text-4xl font-bold font-sans">About Us</div>
                <div className="h-[154px] text-black text-xl font-normal font-['Kameron']">
                    Hi there! Welcome to my Website, a passion project dedicated to helping fellow tennis 
                    enthusiasts find the best courts in their area. As a tennis lover myself, I know how important 
                    it is to have a great place to play, and that's why I created this website.
                </div>
                <button onClick={SignUpButton} className="bg-lime-300 rounded-md w-[131px] h-8 text-center">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default About;