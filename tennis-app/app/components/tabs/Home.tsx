import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            {/* Welcome Message */}
            <div className="bg-white p-6 shadow rounded-lg mb-6">
                <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <p className="text-xl">Hello, [User's Name]! Here's a quick overview of what's happening:</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Announcements Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Announcements</h2>
                    <ul>
                        <li className="mb-2">New court added: Downtown Arena</li>
                        <li className="mb-2">Feature update: Enhanced court search filters</li>
                        <li className="mb-2">Scheduled maintenance on July 30th</li>
                    </ul>
                </div>

                {/* Update Logs Section */}
                <div className="bg-white p-6 shadow rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Update Logs</h2>
                    <ul>
                        <li className="mb-2">Version 1.2.0 - Added user profile editing</li>
                        <li className="mb-2">Version 1.1.0 - Introduced interactive map</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Home;