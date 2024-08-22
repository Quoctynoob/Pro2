import React from "react";
import WeatherWidget from "../reusable/Weather";

interface HomeProps {
    username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
    return (
        <div>
            {/* Welcome Message */}
            <div className="bg-white p-6 shadow rounded-lg mb-6 mt-3">
                <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <p className="text-xl">Hello, {username}! Here's a quick overview of what's happening:</p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Announcements Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Announcements</h2>
                    <ul>
                        <li className="mb-2">Welcome and check out my website</li>
                    </ul>
                </div>

                {/* Update Logs Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Update Logs</h2>
                    <ul>
                        <li className="mb-2">Version 1.0.0 - App Deploy</li>
                    </ul>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Weather Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Weather</h2>
                    {/* Weather Widget */}
                    <WeatherWidget />
                </div>

                {/* Recent Court Reviews Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6 col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Recent Court Reviews</h2>
                    {/* Placeholder for Recent Court Reviews */}
                    <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        Coming Soon...
                    </div>
                </div>
            </div>


            {/* Support and Help Section */}
            <footer className="bg-white p-6 shadow rounded-lg mt-6">
                <h2 className="text-xl font-semibold mb-4">Support and Help</h2>
                <p>
                    If there is any problem or any issues with the website please don't hesitate and reach out 
                    and contact me through tilburgquoc12@gmail.com.
                </p>
            </footer>
        </div>
    );
};


export default Home;