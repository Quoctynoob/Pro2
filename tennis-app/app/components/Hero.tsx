import { useRouter } from "next/router";
import React from "react";

const Hero = () => {
    const router = useRouter();
    const handleSignUp = () => {
        router.push('/signup');
    };

    return (
        <section id="hero" className="bg-green-50 w-full h-[574px] flex justify-between flex-row items-center">
            
            <div className="h-[99px] w-[618px] p-2">
                <div className="text-[64px] font-bold font-['Noto Sans Bengali']">Game, Set, Match!</div>
                <div className="text-2xl font-normal font-['Kameron']">Find the ideal place to play tennis near you.</div>
                <button onClick={handleSignUp} className="bg-lime-300 rounded-md w-[131px] h-8 text-center">
                    Get Started
                </button>
            </div>

            <div className="w-1/2 h-full">
                <img src="/images/roger.jpg" alt="Roger Federer"/>
            </div>
        </section>
    );
};

export default Hero;