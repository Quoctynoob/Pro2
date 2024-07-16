import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/Main";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default HomePage;