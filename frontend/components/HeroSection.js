import Image from "next/image";

export default function HeroSection() {
    return (
      <div id="herosection" className=" min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between pt-24 p-16">
        
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[white] mb-4">
            OCULAR<span className="text-[goldenrod]">ISM</span>
          </h1>
          <p className="text-lg lg:text-xl text-[white]">
            Revolutionizing Eye Care with <span className="text-[goldenrod] font-semibold">AI-Powered Ocular Disease Detection</span> – Early Diagnosis for a Clearer Tomorrow.
          </p>
          <button className="mt-6 px-6 py-3 bg-[goldenrod] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#daa52096] transition duration-300">
            Learn More
          </button>
        </div>
  
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
          <Image
            src="/image.png"
            width={500}
            height={500}
            alt="AI Ocular Detection"
            className="w-full h-auto object-cover"
          />
        </div>
  
      </div>
    );
  }
  