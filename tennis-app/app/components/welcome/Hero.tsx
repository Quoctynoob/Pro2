import { useRouter } from "next/router";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Hero = () => {
    const router = useRouter();
    const SignUpButton = () => {
        router.push('/signup');
    };

    return (
        <section id="hero" className="bg-green-50 w-full h-[574px] flex justify-between flex-row items-center">
            <div className="h-[99px] w-[618px] p-2">
                <div className="text-[64px] font-bold font-['Noto Sans Bengali']">Game, Set, Match!</div>
                <div className="text-2xl font-normal font-['Kameron']">Find the ideal place to play tennis near you.</div>
                <button onClick={SignUpButton} className="bg-lime-300 rounded-md w-[131px] h-8 text-center">
                    Get Started
                </button>
            </div>

            <div className="w-1/2 h-auto rounded-xl">
                <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    showStatus={false} 
                    infiniteLoop={true} 
                    autoPlay={true} 
                    interval={3000}>
                    <div>
                        <img src="/images/claycourt.jpg" alt="Clay Court" className="h-full object-cover rounded-xl"/>
                    </div>
                    <div>
                        <img src="/images/grasscourt.jpg" alt="Grass Court" className="h-full object-cover rounded-xl"/>
                    </div>
                    <div>
                        <img src="/images/hardcourt.jpeg" alt="Hard Court" className="h-full object-cover rounded-xl"/>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Hero;
