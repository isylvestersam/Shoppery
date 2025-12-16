

const TestimonialCard = ({ rating, comment, clientName, clientRole, clientImage }) => {
  return ( <div className="bg-white shadow-soft w-full p-6 rounded-lg flex flex-col items-center justify-between text-center gap-4 md:w-140 mx-auto md:p-5  lg:gap-5">
    <img src="../Icons/quote.svg" className="w-14 self-start mb-3 lg:w-10" />
    <p className="text-left font-light text-sm italic">{comment} </p>
      <div className="flex flex-wrap justify-between items-center gap-3 w-full">
        <div className="flex gap-3 lg:justify-between items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={clientImage} alt="Client Image" className="shrink-0" />
          </div>
          <span className="flex flex-col text-left">
            <h3 className="font-semibold text-sm">{clientName}</h3>
            <p className="text-xs text-gray-400">{clientRole}</p>
          </span>
        </div>
        
        {/* Star Div */}
        <div className="flex gap-1 mb-2 shrink-0">
          {[...Array(5)].map((_, i) => {
          const starNumber = i + 1;
            if (rating >= starNumber) {
            // Full star
              return <img key={i} src="/Icons/star-icon.svg" alt='full star' className='w-4' />;
            } else if (rating >= starNumber - 0.5) {
            // Half star
              return <img key={i} src="/Icons/half-star.svg" alt='half star'  className='w-4' />;
            } else {
            // Empty star
              return <img key={i} src="/Icons/unstar.svg" alt='empty star' className='w-4' />;
            }
          })}
        </div>
      </div>
      
  </div> );
}
 
export default TestimonialCard;