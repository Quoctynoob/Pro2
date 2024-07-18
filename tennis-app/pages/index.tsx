import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/Main";
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