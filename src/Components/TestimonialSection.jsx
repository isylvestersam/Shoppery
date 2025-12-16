import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../store/data";
import { useState } from "react";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const mobileTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  )

  const handlePrev = () => {
    setCurrentIndex((currentPage - 1 + totalPages) % totalPages * itemsPerPage);
  };
  const handleNext = () => {
    setCurrentIndex((currentPage + 1) % totalPages * itemsPerPage)
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
  <div className="hidden mt-12 mx-auto gap-2 justify-center lg:flex ">
    {
      Array.from({ length: totalPages }).map((_, pageIndex) => (
        <button 
          key={pageIndex} 
          onClick={() => setCurrentIndex(pageIndex * itemsPerPage)}
          className={`
            w-2 h-2 rounded-full cursor-pointer
            ${currentPage === pageIndex ? 'bg-primary w-4' : 'bg-gray-300'}
          `}
        ></button>
      ))
    }
  </div>

  </div> );
}
 
export default TestimonialSection;