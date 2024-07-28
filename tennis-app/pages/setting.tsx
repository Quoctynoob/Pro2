import React from "react";

const Setting: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Settings</h1>
                <p className="text-lg">Manage your account settings here.</p>
                {/* Add your setting components here */}
            </div>
        </div>
    )
}

export default Setting;