import About from "./components/home/About";
import Collaboration from "./components/home/Collaboration";
import Hero from "./components/home/Hero";
import Portfolio from "./components/home/Portfolio";
import Services from "./components/home/Services";
import Testimonial from "./components/home/Testimonial";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";

export default function App() {
  return <>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <Portfolio />
  <Testimonial />
  <Collaboration />
  <Footer />
  </>;
}
