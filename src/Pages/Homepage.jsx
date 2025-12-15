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


const Homepage = () => {

  return ( <div className="pb-16">
    <div className="container flex flex-col mx-auto pt-3 px-4  lg:px-20 ">
      <NavBar />
    </div>
    <section className="bg-[#333333] hidden lg:flex mt-4">
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
      <div className="container flex flex-col mx-auto pb-16  px-4  lg:px-20 lg:pb-20 ">
        <TestimonialSection />
      </div>
    </section>
  </div> );
}
 
export default Homepage;