import About from "./components/About";
import Article from "./components/Article";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Chatbot />
      <About />
      <Services />
      <Testimonial />
      <Article />
      <Footer />
    </>
  );
}
