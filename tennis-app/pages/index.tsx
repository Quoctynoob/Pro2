import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
        <p className="text-lg">This is the home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;