import about from "../assets/img/about.png";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Button from "../ui/Button";
import Container from "../ui/Container";
export default function About() {
  return <div className="mt-[150px]">
    <div className="text-center">
        <h2 className="text-2xl text-[#377DFF] font-semibold">About Us</h2>
        <h1 className="text-[55px] font-bold">Our Teammate</h1>
    </div>
    <Container>
        <div className="flex mt-[38px] gap-[65px] items-center justify-center">
            <div className="">
                <img width={565} height={402} className="rounded-3xl" src={about}/>
            </div>
            <div className="flex flex-col">
                <div className="mb-6">
                    <p className="text-xl text-[#464646] w-[610px] h-[128px]">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                    <p className="text-xl text-[#464646] w-[610px] h-[128px]">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                </div>
                <div className="flex gap-[25px]">
                    <Button className='py-3 flex border bg-[#377DFF] border-[#377DFF] text-white font-bold hover:bg-white hover:text-[#377DFF] transition-all duration-500 ease-in-out' text='About Us'/>
                    <button className='items-center gap-2.5 flex px-[50px] rounded-3xl border border-[#377DFF] text-[#377DFF] font-bold hover:bg-[#377DFF] hover:text-white transition-all duration-500 ease-in-out'>
                        <AiOutlinePlayCircle />
                        <p>Our Story</p>
                    </button>
                </div>
            </div>
        </div>
    </Container>
  </div>;
}