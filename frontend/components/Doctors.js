import Image from "next/image";


export default function Doctors() {
  
    return (
      <div id="doctors" className="mb-60 py-20 h-full rounded-2xl">
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl text-center m-10">
              Top Doctors
        </h1>
        <div className="discount autoShow">
        <div className="img-container ">
          <Image src="/Doctor/1.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Iron Man</div>
        </div>
        <div className="img-container ">
          <Image src="/Doctor/2.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Dr. MM Habib</div>
        </div>
        <div className="img-container ">
          <Image src="/Doctor/1.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Iron Man</div>
        </div>
        <div className="img-container ">
          <Image src="/Doctor/1.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Iron Man</div>
        </div>
        <div className="img-container ">
          <Image src="/Doctor/1.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Iron Man</div>
        </div>
        <div className="img-container ">
          <Image src="/Doctor/1.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Iron Man</div>
        </div>
        <div className="img-container ">
          <Image src="/Doctor/1.jpg" width={500} height={500} alt="Discount 1" />
          <div className="text bg-[#f8f8f862] w-full text-center py-6">Iron Man</div>
        </div>

      </div>
      </div>
    )
  }
  