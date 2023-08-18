import React from "react";
import { listings } from "@/data/listings";
import Image from "next/image";

const Listings = () => {
  return (
    <>
      <div className="mx-auto w-[90%] max-w-7xl flex flex-col items-start justify-center mt-20 mb-40">
        <h1 className="text-[#1A6177] text-center text-[2rem] font-bold mb-10 m-auto">
          Recent Listings
        </h1>
        <p className="text-black text-base m-auto">
          Explore our recent listings
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="flex flex-col p-3 bg-[#ECF4FD] rounded-xl hover:bg-house hover:text-white">
              <Image
                src={listing.image}
                alt=""
                width={600}
                height={600}></Image>
              <p className="text-[1.5rem] font-bold mt-3">
                #{listing.price}/ Year
              </p>
              <div className="flex gap-3 items-center mt-6 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                {listing.location}
              </div>
              <p className="text-[#3360FF] text-[0.9rem] hover:text-[#E0F020]">
                Added {listing.added}, Updated {listing.updated}
              </p>
              <div className="flex justify-between text-[0.8rem] mt-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="27"
                      viewBox="0 0 25 27"
                      fill="none">
                      <path
                        d="M19.7917 8.16197H11.4584V15.7442H3.12508V5.99561H1.04175V22.2433H3.12508V18.9938H21.8751V22.2433H23.9584V12.4947C23.9584 11.3456 23.5194 10.2435 22.738 9.431C21.9566 8.61845 20.8968 8.16197 19.7917 8.16197ZM7.29175 14.6611C8.12055 14.6611 8.91541 14.3187 9.50146 13.7093C10.0875 13.0999 10.4167 12.2733 10.4167 11.4115C10.4167 10.5497 10.0875 9.72315 9.50146 9.11374C8.91541 8.50433 8.12055 8.16197 7.29175 8.16197C6.46295 8.16197 5.66809 8.50433 5.08204 9.11374C4.49599 9.72315 4.16675 10.5497 4.16675 11.4115C4.16675 12.2733 4.49599 13.0999 5.08204 13.7093C5.66809 14.3187 6.46295 14.6611 7.29175 14.6611Z"
                        fill="black"
                      />
                    </svg>
                    <p>{listing.rooms}</p>
                  </div>
                  <p>bedroom</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="27"
                      fill="currentColor"
                      className="bi bi-truck-flatbed"
                      viewBox="0 0 16 16">
                      <path d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z" />
                    </svg>
                    <p>{listing.bathrooms}</p>
                  </div>
                  <p>bathroom</p>
                </div>
                <div className="flex flex-col">
                  <p>{listing.owner}</p>
                  <p>{listing.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listings;
