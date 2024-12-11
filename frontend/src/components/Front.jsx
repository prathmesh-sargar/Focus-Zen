
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Footer from "./Footer";
import Hero from "./Hero";
import Pricing from "./Pricing";
// import Roadmap from "./Roadmap";
import Services from "./Services";
import Navbar from "./Navbar";

const Front = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       
      <Navbar/>
        <Hero />
        {/* <Benefits /> */}
        <Collaboration />
        <Services />
        <Pricing />
        {/* <Roadmap /> */}
        <Footer />
      </div>
     
    </>
  );
};

export default Front;

