import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3,} from "../assets";
import { brainwaveServicesIcons } from "../constants";
import {
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading  className="w-full "
          title=" Find Exactly What You're Looking For – Revolutionize Your YouTube Search!  "
          text="Experience a search engine that understands your needs. Say goodbye to irrelevant results and discover precisely what you want!"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">

              <h4 className="h4 mb-4">Smartest Search Engine </h4>

              <p className="body-2 mb-[3rem] text-yellow-300">
                Focused Educational Videos at Your Fingertips
              </p>
              <ul className="body-2">

               <ul>
                <li className="font-bold text-xl">Focused Content - </li>
                <p className="text-gray-400"> 
                Only see relevant, educational videos filtered by search.
                </p><br />
                <li className="font-bold text-xl" >Minimized Distractions - </li>
                <p className="text-gray-400"> 
                Only see relevant, educational videos filtered by search.
                </p><br />
                <li className="font-bold text-xl" >Productivity-Boosting Search - </li>
                <p className="text-gray-400"> 
                Only see relevant, educational videos filtered by search.
                </p><br />
               </ul>
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="text-2xl mb-4">Fuel Your Ambition with Focus<span className="text- text-4xl font-bold ">Zen</span> – Join a Community Committed to Growth!"
                  </h4>
                <p className="body-2 mb-[3rem] text-n-3">
                There’s no limit to what you can achieve with the right resources and a growth mindset. Let’s get started and make your goals a reality
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">A Platform for the Bold, the Ambitious, the Future Leaders</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                If you’re ready to step up and make an impact, FocusZen  is here to help you on that journey with knowledge, support, and inspiration.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
