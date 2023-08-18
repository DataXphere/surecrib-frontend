import React from "react";
import Image from "next/image";
import heroimg from "/public/assets/heroimg.png";

const HomeHero = () => {
  return (
    <>
      <section className="flex w-full bg-hero">
        <div className="flex flex-col w-3/5 mx-auto px-6 text-center mt-10 ">
          <h2 className="text-[3rem] uppercase leading-[40px] text-[#1A6177] mb-6 font-marker">
            At SureCrib
          </h2>
          <p className="text-justify text-[1.5rem] w-[40rem] ml-14">
            We offer an exceptional living experience that combines modern
            comfort, convenience, and community. Whether you're looking for a
            cozy studio or a spacious shared apartment, we have the perfect home
            for you. Explore our vibrant community and discover a place you'll
            love to call home.
          </p>
          <div className="flex bg-white p-4 mt-10 justify-between items-center w-[42rem] m-auto rounded-md">
            <label
              htmlFor="Institution"
              className=" flex flex-col border-r-2 pr-3">
              <p className="font-bold">Institution</p>
              <select>
                <option value="1">Select School</option>
                <option value="1">Unilag</option>
                <option value="2">Uniben</option>
                <option value="3">Uniport</option>
                <option value="3">Unifosa</option>
              </select>
            </label>
            <label htmlFor="Price" className=" flex flex-col border-r-2 pr-3">
              <p className="font-bold">Price</p>
              <select>
                <option value="1">Select Price</option>
                <option value="1">150,000</option>
                <option value="2">120,000</option>
                <option value="3">100,000</option>
                <option value="3">80,000</option>
              </select>
            </label>
            <label htmlFor="Type" className=" flex flex-col border-r-2 pr-3">
              <p className="font-bold">Type</p>
              <select>
                <option value="1">Select Type</option>
                <option value="1">Self con</option>
                <option value="2">One bedroom</option>
                <option value="3">Studio</option>
                <option value="3">2 bedroom</option>
              </select>
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-house-add"
              viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </div>
        </div>
        <div className="w-2/5 ">
          <Image src={heroimg} className="h-[500px]" alt=""></Image>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
