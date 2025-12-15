import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../store/data";
import { useState } from "react";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mobileTestimonials = [ ...testimonials].slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 3));
  }



  
  return ( <div className="px-4">
    <div className="flex justify-center lg:justify-between lg:items-center">
      <div className="flex-col flex items-center gap-3 mb-8 mt-16 lg:justify-start lg:items-start">
        <h2 className="text-3xl font-semibold text-center ">Client Testimonials</h2>
        <img src="/Icons/green-line.svg" className="w-20" />
      </div>
      <span className="gap-3 hidden lg:flex">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`
            ${
              currentIndex !== 0 ? 'p-2 border border-gray-300 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all bg-primary text-white animate' : 'p-2 border border-gray-300 rounded-full  transition-all  animate'
            }
            ${
            currentIndex === 0 ? 'opacity-50  ' : ''
          }` } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - 3}
            className={
              currentIndex < testimonials.length - 3 ? 'p-2 border border-gray-300 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all bg-primary text-white animate' : 'p-2 border border-gray-300 rounded-full  transition-all  animate'
            }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
          </button>
      </span>
    </div>

    {/* Testimonial Card */}
  <div className="flex flex-col gap-5 md:justify-center md:gap-8 lg:justify-between lg:flex-row ">
    {
      mobileTestimonials.map((testimonial) => (
        <TestimonialCard 
          key={testimonial.id}
          rating={testimonial.rating} 
          comment={testimonial.comment} 
          clientName={testimonial.clientName}
          clientRole={testimonial.clientRole}
          clientImage={testimonial.clientImage}
        />
      ))
    }
  </div>

  </div> );
}
 
export default TestimonialSection;