import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className=" border bg-[url(/assets/customerservice.png)] bg-blend-hue bg-cover bg-no-repeat h-[824px] flex items-center">
        <div className=" flex items-start justify-between w-[90%] m-auto ">
          <div className="flex flex-col w-[40%] text-white space-y-8 ">
            <h1 className=" font-bold text-[2.5rem] ">
              Need Consultation? Contact us, we are ready to help
            </h1>
            <div className="flex flex-col  ">
              <p className="font-semibold text-[1.2rem]">Contact</p>
              <div className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_275_321)">
                    <path
                      d="M12.5001 11.2734H15.8334L18.3334 16.1247H1.66675L4.16675 11.2734H7.50008M10.8334 6.42198C10.8334 6.60579 10.7456 6.78207 10.5893 6.91205C10.4331 7.04202 10.2211 7.11504 10.0001 7.11504C9.77907 7.11504 9.56711 7.04202 9.41083 6.91205C9.25455 6.78207 9.16675 6.60579 9.16675 6.42198C9.16675 6.23818 9.25455 6.0619 9.41083 5.93192C9.56711 5.80195 9.77907 5.72893 10.0001 5.72893C10.2211 5.72893 10.4331 5.80195 10.5893 5.93192C10.7456 6.0619 10.8334 6.23818 10.8334 6.42198ZM5.00008 6.42198C5.00008 9.88725 10.0001 13.3525 10.0001 13.3525C10.0001 13.3525 15.0001 9.88725 15.0001 6.42198C15.0001 4.05383 12.7617 2.26367 10.0001 2.26367C7.23841 2.26367 5.00008 4.05383 5.00008 6.42198Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_275_321">
                      <rect
                        width="20"
                        height="16.6333"
                        fill="white"
                        transform="translate(0 0.877686)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[0.8rem]">Florida, USA</p>
              </div>
            </div>
            <div className="flex flex-col  ">
              <p className="font-semibold text-[1.2rem]">Social Media</p>
              <Link href="#" className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_275_321)">
                    <path
                      d="M12.5001 11.2734H15.8334L18.3334 16.1247H1.66675L4.16675 11.2734H7.50008M10.8334 6.42198C10.8334 6.60579 10.7456 6.78207 10.5893 6.91205C10.4331 7.04202 10.2211 7.11504 10.0001 7.11504C9.77907 7.11504 9.56711 7.04202 9.41083 6.91205C9.25455 6.78207 9.16675 6.60579 9.16675 6.42198C9.16675 6.23818 9.25455 6.0619 9.41083 5.93192C9.56711 5.80195 9.77907 5.72893 10.0001 5.72893C10.2211 5.72893 10.4331 5.80195 10.5893 5.93192C10.7456 6.0619 10.8334 6.23818 10.8334 6.42198ZM5.00008 6.42198C5.00008 9.88725 10.0001 13.3525 10.0001 13.3525C10.0001 13.3525 15.0001 9.88725 15.0001 6.42198C15.0001 4.05383 12.7617 2.26367 10.0001 2.26367C7.23841 2.26367 5.00008 4.05383 5.00008 6.42198Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_275_321">
                      <rect
                        width="20"
                        height="16.6333"
                        fill="white"
                        transform="translate(0 0.877686)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[0.8rem]">@DataXphere</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-white w-[40%] text-center ">
            <h3 className="text-[2rem] text-[#1A6177] font-bold ">
              Any Question?
            </h3>
            <form className="flex flex-col gap-y-4 ">
              <label className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email here"
                  className="pl-6 py-4 placeholder:text-secondary text-[#575757] bg-[#D0D0D0] outline-none border-2 font-medium"
                />
              </label>
              <label className="flex flex-col">
                <textarea
                  rows={7}
                  name="message"
                  placeholder="enter your question here"
                  className="pl-6 py-4 text-[#575757] bg-[#D0D0D0] py-4 text-black outline-none border-2 font-medium"
                />
              </label>

              <button
                type="submit"
                className=" py-3 px-8 w-full self-center bg-[#1A6177] text-white font-bold "
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
