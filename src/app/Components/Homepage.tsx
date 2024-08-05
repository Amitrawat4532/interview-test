import Image from "next/image";
import React from "react";
import suitcase from "../../../public/suitcase.png";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <section className="bg-image flex justify-center items-center  w-full h-screen flex-col px-5 gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">

        <h1 className="text-white font-bold text-[30px] sm:text-[60px] text-center">
          Find Your Dream Job Today!
        </h1>
        <h2 className="text-white font-bold text-[12px] sm:text-[20px] text-center">
          Connecting Talent with Opportunity : Your Gateway to Success
        </h2>
        </div>
        <div className="flex justify-center items-center flex-col">
          {/* left  */}
          <div className="bg-white flex  rounded-2xl gap-3 h-full flex-col sm:flex-row  w-full ">
            <div className="flex gap-5 px-3 py-4 flex-col sm:flex-row ">
              <input type="text" placeholder="Job Title Or Company" />
              <select className="bg-white">
                <option>Select Location</option>
                <option>Dehradun</option>

                <option>Delhi</option>

                <option>Mumbai</option>
              </select>

              <select className="bg-white">
                <option>Select Categories</option>
                <option>Dehradun</option>

                <option>Delhi</option>

                <option>Mumbai</option>
              </select>
            </div>

            <div className="bg-blue-400 flex h-full w-full justify-center items-center px-4 py-4 sm:rounded-r-2xl rounded-b-2xl sm:rounded-none">
              Search Job
            </div>
          </div>
          {/* right */}
        </div>

        <div className="flex gap-[30px] flex-wrap sm:gap-[100px] w-full justify-center items-center ">
          <div className="flex gap-3 justify-center items-center">
            <Image src={suitcase} alt="suitcase" height={60} width={60} />
            <div className="flex flex-col">
              <span className="text-white">25,850</span>
              <span className="text-white">jobs</span>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Image src={suitcase} alt="suitcase" height={60} width={60} />
            <div className="flex flex-col">
              <span className="text-white">25,850</span>
              <span className="text-white">jobs</span>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Image src={suitcase} alt="suitcase" height={60} width={60} />
            <div className="flex flex-col">
              <span className="text-white">25,850</span>
              <span className="text-white">jobs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
