import Container from "../ui/Container";
import woman from "../assets/img/woman.png";
export default function Testimonial() {
  return <Container>
    <div className="flex flex-col gap-12 mb-[204px]">
        <div className="flex flex-col text-center gap-11">
            <h2 className="text-2xl font-semibold text-[#377DFF]">Testimonial</h2>
            <h1 className="text-[55px] font-bold">People Talk about us</h1>
        </div>
        <div className="flex gap-[50px]">
            <div className="w-[380px] h-[335px] border rounded-[20px] cursor-pointer px-[40px] gap-[25px] transition-all duration-500 ease-in-out  hover:drop-shadow-2xl hover:translate-x-1 hover:translate-y-1">
                <div className="mt-[50px] flex gap-[30px] items-center">
                    <div className="w-[70px] h-[70px] bg-slate-500 rounded-full">
                        <img className="rounded-full w-[100%] h-[100%]" src={woman}/>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold text-[#377DFF]">Angel Rose</h1>
                        <h2 className="text-[11px] text-[#464646]">Creative Manager</h2>
                    </div>
                </div>
                <div className="mt-[25px]">
                    <p className="text-[18px] text-[#464646] opacity-80">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                </div>
            </div>
            <div className="w-[380px] h-[335px] border rounded-[20px] cursor-pointer px-[40px] gap-[25px] transition-all duration-500 ease-in-out  hover:drop-shadow-2xl hover:translate-x-1 hover:translate-y-1">
                <div className="mt-[50px] flex gap-[30px] items-center">
                    <div className="w-[70px] h-[70px] bg-slate-500 rounded-full">
                        <img className="rounded-full w-[100%] h-[100%]" src={woman}/>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold text-[#377DFF]">Angel Rose</h1>
                        <h2 className="text-[11px] text-[#464646]">Creative Manager</h2>
                    </div>
                </div>
                <div className="mt-[25px]">
                    <p className="text-[18px] text-[#464646] opacity-80">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                </div>
            </div>
            <div className="w-[380px] h-[335px] border rounded-[20px] cursor-pointer px-[40px] gap-[25px] transition-all duration-500 ease-in-out  hover:drop-shadow-2xl hover:translate-x-1 hover:translate-y-1">
                <div className="mt-[50px] flex gap-[30px] items-center">
                    <div className="w-[70px] h-[70px] bg-slate-500 rounded-full">
                        <img className="rounded-full w-[100%] h-[100%]" src={woman}/>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold text-[#377DFF]">Angel Rose</h1>
                        <h2 className="text-[11px] text-[#464646]">Creative Manager</h2>
                    </div>
                </div>
                <div className="mt-[25px]">
                    <p className="text-[18px] text-[#464646] opacity-80">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                </div>
            </div>
        </div>
    </div>
  </Container>
}