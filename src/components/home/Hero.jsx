import Button from "../ui/Button";
import image from "../assets/img/image.png";
import ceo from "../assets/img/ceo.png";
import { FaStar } from "react-icons/fa";
export default function Hero() {
  return <div className="flex flex-col items-center">
    <div className="max-w-[750px] text-center mb-10">
        <h1 className="font-extrabold text-[64px]">
            Make your dream business goal come true
        </h1>
        <p className="text-xl opacity-40 text-center mt-4">
            when you need us to improve your business, then come with us to help your business have reach it, you just sit and feel that goal
        </p>
        <Button className='mt-8 border bg-[#377DFF] border-[#377DFF] text-white font-bold hover:bg-white hover:text-[#377DFF] transition-all duration-500 ease-in-out' text='Start Project'/>
    </div>
    <div className="py-16 relative">
        <img width={739} height={501} className="rounded-[50px]" src={image}/>
        <div className="bg-white flex flex-col gap-2 shadow-lg py-4 px-5 w-fit rounded-2xl absolute top-20 -left-24">
            <p className="flex gap-1 items-center text-xs">
                <FaStar size={24} color="#F8BD38"/>
                <p className="text-[#1D1D1D] opacity-60 font-semibold">GREAT PROJECT</p>
            </p>
            <h1 className="font-medium"><span className="font-bold">800+</span> Done</h1>
        </div>
        <div className="px-5 py-6 flex flex-col rounded-2xl gap-3 bg-white shadow-lg w-fit absolute bottom-16 -right-24">
            <div className="flex items-center gap-2.5">
                <div className="size-8 bg-slate-500 rounded-full">
                    <img src={ceo} className="rounded-full w-[100%] h-[100%]"/>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-[10px] text-[#1D1D1D]">Bill Adams</h1>
                    <p className="text-[6px] opacity-50">CEO UpTech</p>
                </div>
            </div>
            <p className="text-[10px] text-[#1D1D1D] w-[125px]">
                “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
            </p>
        </div>
    </div>
  </div>;
}