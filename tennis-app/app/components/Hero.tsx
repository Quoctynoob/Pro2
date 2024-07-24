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

            <div className="w-1/2 h-full">
                <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    showStatus={false} 
                    infiniteLoop={true} 
                    autoPlay={true} 
                    interval={3000}
                >
                    <div>
                        <img src="/images/tennis1.jpg" alt="Tennis Image 1" />
                    </div>
                    <div>
                        <img src="/images/tennis2.jpg" alt="Tennis Image 2" />
                    </div>
                    <div>
                        <img src="/images/tennis3.jpg" alt="Tennis Image 3" />
                    </div>
                    {/* Add more images as needed */}
                </Carousel>
            </div>
        </section>
    );
};

export default Hero;
