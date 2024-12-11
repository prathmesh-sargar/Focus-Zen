import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { Link } from "react-router-dom";
import {useLottie} from 'lottie-react'
import dev1 from "../components/YTclone/dev1.json";

const Pricing = () => {


 const options = {
  animationData: dev1,
  loop: true,
};

const { View } = useLottie(options);

  return (
    <Section className="overflow-hidden p-0" id="pricing">
      <div className="container relative z-2">
        <div className=" relative justify-center  lg:flex mb-0">
          {View}
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Connect, Learn, and Share with Fellow Achievers on the Path to Success."
          title="Join the FocusZen Community: Empowering Growth Together"
        />
{/* 
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div> */}

        
      </div>
    </Section>
  );
};

export default Pricing;
