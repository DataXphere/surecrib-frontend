import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className=" border bg-[url(/assets/customerservice.png)] bg-blend-hue bg-cover bg-no-repeat h-[824px] flex items-center">
        <div className=" flex items-start justify-between w-[80%] m-auto ">
          <div className="flex flex-col w-[40%] text-white space-y-8 ">
            <h1 className=" font-bold text-[2.5rem] ">
              Need Consultation? Contact us, we are <br />
              ready to help
            </h1>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold text-[1rem]">Contact</p>
              <div className=" flex flex-col items-start gap-3">
                <div className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_275_321)">
                      <path
                        d="M12.5001 11.2734H15.8334L18.3334 16.1247H1.66675L4.16675 11.2734H7.50008M10.8334 6.42198C10.8334 6.60579 10.7456 6.78207 10.5893 6.91205C10.4331 7.04202 10.2211 7.11504 10.0001 7.11504C9.77907 7.11504 9.56711 7.04202 9.41083 6.91205C9.25455 6.78207 9.16675 6.60579 9.16675 6.42198C9.16675 6.23818 9.25455 6.0619 9.41083 5.93192C9.56711 5.80195 9.77907 5.72893 10.0001 5.72893C10.2211 5.72893 10.4331 5.80195 10.5893 5.93192C10.7456 6.0619 10.8334 6.23818 10.8334 6.42198ZM5.00008 6.42198C5.00008 9.88725 10.0001 13.3525 10.0001 13.3525C10.0001 13.3525 15.0001 9.88725 15.0001 6.42198C15.0001 4.05383 12.7617 2.26367 10.0001 2.26367C7.23841 2.26367 5.00008 4.05383 5.00008 6.42198Z"
                        stroke="white"
                        strokeWidth="2"
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
                  <p className="text-[0.6rem]">Florida, USA</p>
                </div>
                <div className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M17.2559 10.6813C17.1599 10.1266 16.6449 9.69415 15.9819 9.56524C13.4049 9.06292 12.7589 7.82873 12.6499 6.45981C12.1929 6.38912 11.3799 6.31261 9.99991 6.31261C8.61991 6.31261 7.80691 6.38912 7.34991 6.45981C7.24091 7.82873 6.59491 9.06292 4.01791 9.56524C3.35491 9.69498 2.83991 10.1266 2.74391 10.6813L2.24691 13.5439C2.07191 14.5519 2.96191 15.4609 4.19991 15.4609H15.7999C17.0369 15.4609 17.9279 14.5519 17.7529 13.5439L17.2559 10.6813ZM9.99991 13.3751C8.60491 13.3751 7.47391 12.4436 7.47391 11.2959C7.47391 10.1482 8.60491 9.21678 9.99991 9.21678C11.3949 9.21678 12.5259 10.1482 12.5259 11.2959C12.5259 12.4436 11.3939 13.3751 9.99991 13.3751ZM19.9499 5.48095C19.9259 4.23345 16.1079 2.15513 9.99991 2.1543C3.89091 2.15513 0.0729066 4.23345 0.0499066 5.48095C0.0269066 6.72844 0.0709066 8.35185 2.58491 8.08156C5.52591 7.76469 5.34491 6.91058 5.34491 5.68969C5.34491 4.83807 7.73691 4.63265 9.99991 4.63265C12.2629 4.63265 14.6539 4.83807 14.6549 5.68969C14.6549 6.91058 14.4739 7.76469 17.4149 8.08156C19.9279 8.35185 19.9729 6.72844 19.9499 5.48095Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[0.6rem]">+1 - XXX-XXX-XXXX</p>
                </div>
                <div className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                  >
                    <path
                      d="M16.6667 2.87646H3.33341C2.41675 2.87646 1.67508 3.50021 1.67508 4.26257L1.66675 12.5792C1.66675 13.3416 2.41675 13.9653 3.33341 13.9653H16.6667C17.5834 13.9653 18.3334 13.3416 18.3334 12.5792V4.26257C18.3334 3.50021 17.5834 2.87646 16.6667 2.87646ZM16.6667 5.64867L10.0001 9.11393L3.33341 5.64867V4.26257L10.0001 7.72783L16.6667 4.26257V5.64867Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[0.6rem]">info@dataxphere.com</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold text-[1rem]">Social Media</p>
              <Link href="#" className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                >
                  <path
                    d="M10.8567 1.47229C11.4649 1.47035 12.073 1.47543 12.6809 1.48754L12.8426 1.49239C13.0292 1.49793 13.2134 1.50486 13.4359 1.51318C14.3226 1.54783 14.9276 1.66426 15.4584 1.83545C16.0084 2.01148 16.4717 2.24989 16.9351 2.63523C17.3587 2.98148 17.6866 3.40032 17.8959 3.86263C18.1017 4.3041 18.2417 4.80795 18.2834 5.54536C18.2934 5.72971 18.3017 5.88357 18.3084 6.03881L18.3134 6.17326C18.3282 6.67863 18.3346 7.18414 18.3326 7.68966L18.3334 8.20668V9.11458C18.3355 9.62032 18.3291 10.1261 18.3142 10.6317L18.3092 10.7661C18.3026 10.9214 18.2942 11.0745 18.2842 11.2596C18.2426 11.997 18.1009 12.5001 17.8959 12.9416C17.6873 13.4044 17.3593 13.8236 16.9351 14.1697C16.5184 14.522 16.0145 14.7947 15.4584 14.9688C14.9276 15.14 14.3226 15.2564 13.4359 15.2911C13.2134 15.2994 13.0292 15.3063 12.8426 15.3118L12.6809 15.316C12.073 15.3283 11.4649 15.3336 10.8567 15.3319L10.2351 15.3326H9.14424C8.53613 15.3343 7.92801 15.329 7.32007 15.3167L7.15841 15.3125C6.96058 15.3066 6.7628 15.2996 6.56507 15.2917C5.67841 15.2571 5.07341 15.1393 4.54174 14.9688C3.98564 14.7951 3.48194 14.5223 3.06591 14.1697C2.64178 13.8234 2.31359 13.4043 2.10424 12.9416C1.89841 12.5001 1.75841 11.997 1.71674 11.2596C1.70746 11.0951 1.69913 10.9306 1.69174 10.7661L1.68757 10.6317C1.67221 10.1261 1.66527 9.62033 1.66674 9.11458V7.68966C1.66441 7.18415 1.67053 6.67863 1.68507 6.17326L1.69091 6.03881C1.69757 5.88357 1.70591 5.72971 1.71591 5.54536C1.75757 4.80726 1.89757 4.30479 2.10341 3.86263C2.31288 3.4001 2.64171 2.98137 3.06674 2.63592C3.48249 2.28299 3.98588 2.0098 4.54174 1.83545C5.07341 1.66426 5.67757 1.54783 6.56507 1.51318L7.15841 1.49239L7.32007 1.48892C7.92773 1.47615 8.53556 1.47037 9.14341 1.4716L10.8567 1.47229ZM10.0001 4.93755C9.448 4.93106 8.89987 5.01588 8.38755 5.1871C7.87524 5.35831 7.40895 5.6125 7.01578 5.93489C6.62261 6.25728 6.31041 6.64144 6.09731 7.06506C5.88422 7.48867 5.77448 7.94328 5.77448 8.40246C5.77448 8.86165 5.88422 9.31626 6.09731 9.73987C6.31041 10.1635 6.62261 10.5476 7.01578 10.87C7.40895 11.1924 7.87524 11.4466 8.38755 11.6178C8.89987 11.789 9.448 11.8739 10.0001 11.8674C11.1051 11.8674 12.165 11.5023 12.9464 10.8524C13.7278 10.2026 14.1667 9.32116 14.1667 8.40212C14.1667 7.48307 13.7278 6.60167 12.9464 5.95181C12.165 5.30195 11.1051 4.93755 10.0001 4.93755ZM10.0001 6.32365C10.3322 6.31857 10.6621 6.36856 10.9707 6.47072C11.2793 6.57289 11.5604 6.72517 11.7974 6.91867C12.0344 7.11217 12.2227 7.34302 12.3513 7.59772C12.4798 7.85242 12.5461 8.12588 12.5461 8.40211C12.5462 8.67834 12.4801 8.95182 12.3516 9.20656C12.2231 9.46129 12.0349 9.69219 11.798 9.88576C11.561 10.0793 11.2801 10.2317 10.9715 10.3339C10.663 10.4362 10.333 10.4863 10.0009 10.4813C9.33787 10.4813 8.70198 10.2622 8.23314 9.8723C7.7643 9.48239 7.50091 8.95354 7.50091 8.40212C7.50091 7.85069 7.7643 7.32185 8.23314 6.93193C8.70198 6.54201 9.33787 6.32296 10.0009 6.32296L10.0001 6.32365ZM14.3751 3.89797C14.1062 3.90692 13.852 4.00203 13.6656 4.16339C13.4792 4.32475 13.3751 4.53983 13.3751 4.76359C13.3751 4.98736 13.4792 5.20244 13.6656 5.3638C13.852 5.52515 14.1062 5.62027 14.3751 5.62922C14.6513 5.62922 14.9163 5.53794 15.1116 5.37548C15.307 5.21301 15.4167 4.99266 15.4167 4.7629C15.4167 4.53314 15.307 4.31279 15.1116 4.15032C14.9163 3.98786 14.6513 3.89659 14.3751 3.89659V3.89797Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[0.6rem]">@DataXphere</p>
              </Link>
              <Link href="#" className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M18.7168 4.85705C18.0751 5.09962 17.3834 5.25902 16.6668 5.33526C17.4001 4.96794 17.9668 4.38578 18.2334 3.68579C17.5418 4.03232 16.7751 4.27489 15.9668 4.4135C15.3084 3.81747 14.3834 3.47095 13.3334 3.47095C11.3751 3.47095 9.77511 4.80161 9.77511 6.44414C9.77511 6.67978 9.80845 6.90849 9.86678 7.12333C6.90011 6.99858 4.25845 5.81346 2.50011 4.01846C2.19178 4.45508 2.01678 4.96794 2.01678 5.50852C2.01678 6.54117 2.64178 7.456 3.60845 7.97579C3.01678 7.97579 2.46678 7.83718 1.98345 7.62926V7.65005C1.98345 9.0916 3.21678 10.2975 4.85011 10.5678C4.32572 10.6872 3.77519 10.7038 3.24178 10.6163C3.46812 11.2071 3.91139 11.7241 4.50929 12.0945C5.10719 12.465 5.82965 12.6703 6.57511 12.6816C5.31147 13.5136 3.74511 13.9633 2.13345 13.9568C1.85011 13.9568 1.56678 13.943 1.28345 13.9152C2.86678 14.7608 4.75011 15.2528 6.76678 15.2528C13.3334 15.2528 16.9418 10.7203 16.9418 6.79067C16.9418 6.65899 16.9418 6.53424 16.9334 6.40256C17.6334 5.98673 18.2334 5.46001 18.7168 4.85705Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[0.6rem]">@DataXphere</p>
              </Link>
              <Link href="#" className=" flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                >
                  <path
                    d="M17.4167 1.69775H2.58341C2.3403 1.69775 2.10714 1.77807 1.93523 1.92104C1.76333 2.06401 1.66675 2.25792 1.66675 2.46011V14.7964C1.66675 14.9986 1.76333 15.1925 1.93523 15.3355C2.10714 15.4785 2.3403 15.5588 2.58341 15.5588H10.5667V10.1876H8.40008V8.10849H10.5667V6.54912C10.5219 6.18302 10.5738 5.81319 10.719 5.46556C10.8642 5.11793 11.0991 4.80093 11.4071 4.53678C11.7152 4.27263 12.0891 4.06774 12.5024 3.93648C12.9158 3.80521 13.3587 3.75075 13.8001 3.77691C14.4487 3.77359 15.097 3.80136 15.7417 3.86008V5.73132H14.4167C13.3667 5.73132 13.1667 6.14715 13.1667 6.7501V8.0877H15.6667L15.3417 10.1669H13.1667V15.5588H17.4167C17.5371 15.5588 17.6563 15.5391 17.7675 15.5008C17.8788 15.4625 17.9798 15.4063 18.0649 15.3355C18.15 15.2647 18.2176 15.1807 18.2636 15.0882C18.3097 14.9957 18.3334 14.8966 18.3334 14.7964V2.46011C18.3334 2.36 18.3097 2.26086 18.2636 2.16837C18.2176 2.07588 18.15 1.99183 18.0649 1.92104C17.9798 1.85025 17.8788 1.7941 17.7675 1.75578C17.6563 1.71747 17.5371 1.69775 17.4167 1.69775Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[0.6rem]">@DataXphere</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-white w-[40%] text-center ">
            <h3 className="text-[2rem] text-[#1A6177] font-bold pb-4 ">
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
                  className="pl-6  text-[#575757] bg-[#D0D0D0] py-4  outline-none border-2 font-medium"
                />
              </label>

              <button
                type="submit"
                className=" py-4 px-8 w-full self-center bg-[#1A6177] text-white font-bold "
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
