import Button from "../ui/Button";


const NewsLetterSection = () => {
  return ( <form className="flex flex-col items-center justify-center text-center gap-4 md:gap-2 lg:gap-8 lg:flex-row lg:py-5">
    <img src='/Icons/Logo.svg' alt="" className="w-42" />
    <span className="flex flex-col gap-2 lg:gap-1 text-left lg:items-start">
      <h3 className="text-3xl font-medium">Subscribe to our Newsletter</h3>
      <p className="mt-1 text-gray-400 text-sm ">
        Get the latest news and updates right at your inbox.
      </p>
    </span>
    <div className="flex  ">
      <input type="text" placeholder="Your email address" className=" bg-white border border-gray-300 py-3 rounded-full px-6 placeholder:text-sm" />
      <Button
        buttonType="primary"
        buttonSize="large"
        classname="-ml-10 text-sm"
        type='button'
      >
        Subscribe
      </Button>
    </div>
  </form> );
}
 
export default NewsLetterSection;