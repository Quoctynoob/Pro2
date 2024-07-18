import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/Main";
import '@/app/styles/globals.css';
import AuthForm from "../app/components/AuthForm";

const HomePage = () => {
  return (
    <div className="overflow-y-scroll snap-mandatory snap-y h-screen smooth-scroll">
      <Header/>
      <Main/>
      <AuthForm />
      <Footer/>
    </div>
  );
};

export default HomePage;