import Anniversary from "../assets/Anniversary.png"
import moneytopleft from "../assets/moneytopleft.png"
import moneytopmid from "../assets/moneytopmid.png"
import moneytopright from "../assets/moneytopright.png"
import moneymidright from "../assets/moneymidright.png"
import moneybottommid from "../assets/moneybottommid.png"

function Hero() {
    return (
      <div className="min-h-screen flex flex-col items-center">
          <div className="flex justify-around w-[40vw] bg-[#1A73E81C] shadow-md mx-auto px-10 py-3 mt-15 rounded-3xl font-medium">
            <a href="#" className="text-blue-600 font-semibold">Refer</a>
            <a href="#" className="text-gray-600">Benefits</a>
            <a href="#" className="text-gray-600">FAQs</a>
            <a href="#" className="text-gray-600">Support</a>
        </div>
        
        {/* Main Card */}
        <div className="relative bg-[#EEF5FF] shadow-lg rounded-2xl p-8 mt-5 flex items-center w-[70%]">

        <img src={moneytopleft} className="absolute top-0 left-4 w-12 sm:w-16 md:w-20 z-10 scale-125" alt="Money" />
      <img src={moneytopmid}className="absolute top-[-5px] left-[55%] w-14 sm:w-16 md:w-20 rotate-12 scale-125" alt="Money" />
      <img src={moneytopright} className="absolute right-0 top-0 w-10 sm:w-14 md:w-18 -rotate-6  z-10 scale-125" alt="Money" />
      <img src={moneymidright} className="absolute right-10 top-[50%] w-10 sm:w-14 md:w-18 rotate-3 scale-125" alt="Money" />
      <img src={moneybottommid} className="absolute left-[45%] bottom-15 w-10 sm:w-14 md:w-18 rotate-3 z-10 scale-125" alt="Money" />

          {/* Left Text Section */}
          <div className="flex-1 space-y-4">
            <h1 className="text-6xl">Let’s Learn & Earn</h1>
            <p className="text-gray-600 text-4xl pr-3.5 font-medium my-8">Get a chance to win up to <span className="text-blue-600 font-semibold">Rs. 15,000</span></p>
            <button className="bg-blue-600 text-white px-6 py-2 font-semibold rounded">Refer Now</button>
          </div>
          
          {/* Right Image Section */}
          <div className="relative flex-1 flex justify-center scale-[127%] pr-15">
            <img
              src={Anniversary}
              alt="Happy People"
              className="h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    );
}

export default Hero;
  