import Features from "@/components/Features";
import HomeHero from "@/components/HomeHero";
import Listings from "@/components/Listings";
import Contact from "@/components/Contact";
// import { Inter, Permanent Marker } from "next/font/google";

const HomePage = () => {
  return (
    <>
      <HomeHero></HomeHero>
      <Features
        title="Our Services"
        subtitle="With us, you can expect a transparent and trustworthy partnership"
        subheadingA="Property Tailored to Student"
        subheadingB="Real-Time Availability "
        subheadingC="Verified Listings"
        textA="Our platform is exclusively designed to cater your requirement, ensuring you find the ideal apartment that suits your life style and budget."
        textB="No more disappointment due to outdated listing, you can view real time availability, ensuring the apartment  is ready for you."
        textC="We value your safety and comfort, All our apartment undergo a vigorous  process, giving you o peace of mind as you explore your housing options."
      ></Features>
      <Listings></Listings>
      <Features
        title="Features"
        subheadingA="Property Listing"
        subheadingB="Roommate Matching "
        subheadingC="Feedback and Support"
        textA="Offer a platform where landlords and property managers can list their student-friendly properties for rent."
        textB="Provide a service that helps students find compatible roommates based on shared preferences and lifestyle."
        textC="A feedback system where users can provide suggestions and report issues, and offer responsive customer support."
      ></Features>
      <Contact></Contact>
    </>
  );
};

export default HomePage;
