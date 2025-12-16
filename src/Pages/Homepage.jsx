import HeroSection from "../Components/HeroSection";
import FeaturesTab from "../Components/FeaturesTab";
import DesktopNavigator from "../ui/DesktopNavigator";
import NavBar from "../ui/NavBar";
import FeaturedProducts from "../Components/FeaturedProducts";
import CompactCard from "../ui/CompactCard";
import Showcase from "../ui/Showcase";
import TopCategoryCard from "../ui/TopCategoryCard";
import TopCategory from "../Components/TopCategory";
import TestimonialCard from "../ui/TestimonialCard";
import TestimonialSection from "../Components/TestimonialSection";
import NewsLetterSection from "../Components/NewsletterSection";
import Footer from "../Components/Footer";
import StoreLocation from "../ui/StoreLocation";


const Homepage = () => {

  return ( <div className="">
    <div className="container flex flex-col mx-auto pt-3 px-8 lg:px-20">
          <StoreLocation />
    </div>

    {/* Diver Line */}
    <div className=" w-full h-px border-b border-b-gray-200 mt-3 mb-5 ">
    </div>
    <section className="bg-[#333333] flex mt-4">
      <div className="container flex flex-col mx-auto py-4  px-4  lg:px-20 ">
        <DesktopNavigator />
      </div>
    </section>
    <section className="bg-[#EDF2EE] ">
      <div className="container flex flex-col mx-auto py-4  px-4  lg:px-20  ">
        <HeroSection />
      </div>
    </section>
    <section className="bg-white ">
      <div className="container flex flex-col mx-auto py-4  px-4  lg:px-20  ">
        <FeaturesTab />
      </div>
    </section>
    <div className="container flex flex-col mx-auto py-4 px-4  lg:px-20 ">
      <FeaturedProducts />
      <Showcase />
      <TopCategory />
    </div>
    <section className="bg-[#F9FAF7] ">
      <div className="container flex flex-col mx-auto pb-16  px-4  lg:px-20 lg:pb-12 mb-16">
        <TestimonialSection />
      </div>
    </section>
    <section className="bg-[#F9FAF7] ">
      <div className="container flex flex-col mx-auto py-12  px-4  lg:px-20 lg:pb-8 lg:pt-8 mb-16">
        <NewsLetterSection />
      </div>
    </section>

    <section className="bg-black">
    <div className="container flex flex-col mx-auto py-12 px-6 lg:px-20 lg:pb-4">
      <Footer />
    </div>
    </section>
  </div> );
}
 
export default Homepage;