import Image from "next/image";


export default function Advice() {
  return (
    <div id="advise" className=" shadow-lg rounded-xl py-20 ">
        <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl text-center m-10">
            Get Advise
        </h1>
        <div className="flex justify-between bg-[#ffffff15] border-[white] border-2 rounded-xl p-4 m-3"> 
             <Image src="/img/image.png" width={500} height={500} alt="doctor"/>   
             <p>জিজ্ঞেস করুন আপনার ডাক্তার কে, উনি কি আপনারদের চোখের রোগ সারাতে পারবেন? </p>
        </div>
    </div>
  )
}
