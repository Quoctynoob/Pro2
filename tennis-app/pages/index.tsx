import Header from "@/app/components/welcome/Header";
import Footer from "@/app/components/welcome/Footer";
import Main from "@/app/components/layout/Main";
import '@/app/styles/globals.css';

const HomePage = () => {
  return (
    <div className="overflow-y-scroll snap-mandatory snap-y h-screen smooth-scroll">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default HomePage;