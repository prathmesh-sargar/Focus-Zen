import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-xl">
      Boost Your Skills, Build Your Future – Join <span className="font-bold text-3xl text-yellow-300"> FocusZen </span> Today!
      </h5>
      {/* <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing
              </div>
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </div>
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing{' '}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CompanyLogos;
