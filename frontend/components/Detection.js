import Link from "next/link";
import { CiBookmarkCheck } from "react-icons/ci";
export default function Detection() {
  const data = [
    {
      id: 1,
      name: "Cataract",
      link: "/cataract",
      desc: "Cataract is a clouding of the lens in the eye that affects vision. ",
    },
    {
      id: 2,
      name: "Glaucoma",
      link: "/glaucoma",
      desc: "Glaucoma is a group of eye conditions that damage the optic nerve.",
    }
    ,
    {
      id: 3,
      name: "Retinoblastoma",
      link: "/retinoblastoma",
      desc: "Retinoblastoma is a rare type of eye cancer that affects young children.",
    }
    ,
    {
      id: 4,
      name: "Glaucoma",
      link: "/glaucoma",
      desc: "Glaucoma is a group of eye conditions that damage the optic nerve.",
    }
    ,
    {
      id: 5,
      name: "Glaucoma",
      link: "/glaucoma",
      desc: "Glaucoma is a group of eye conditions that damage the optic nerve.",
    }
    ,
  ];

  return (
    <div id="detection" className=" shadow-lg rounded-xl py-20 ">
      <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl text-center m-10">
        Detect Your Disease
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
        {data.map((item) => (
          <div key={item.id} className="bg-[#ffffff2f] border text-center rounded-xl p-4">
            <h1 className="my-4 text-2xl font-bold font-mono">{item.name}</h1>
            <Link href={item.link}> <div className="flex gap-2 justify-center bg-[#daa5202a] rounded-xl p-2 hover:translate hover:scale-95">
              Check <CiBookmarkCheck className="text-2xl"/>
            </div>
            </Link>
            <div>
              <p className="text-sm font-mono mt-4">
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
