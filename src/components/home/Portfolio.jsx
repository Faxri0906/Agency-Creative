import Button from "../ui/Button";
import Container from "../ui/Container";
import hand from "../assets/img/hand.png";
import phone from "../assets/img/phone.png";
import phones from "../assets/img/phones.png";
export default function Portfolio() {
  return <Container>
    <div className="mt-[130px] flex flex-col gap-10 mb-[140px]">
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#377DFF]">
                Our Portfolio
            </h2>
            <h1 className="text-[55px] font-bold">
                What do we do
            </h1>
            <p className="text-xl text-[#464646]">
                all projects that we have already done , proven can help to use more
            </p>
            <p className="text-xl text-[#464646]"> comfortable, then can used by client from our business</p>
        </div>
        <div className="flex gap-[69px] items-center">
            <img className="rounded-[30px] h-[350px]" width={350} height={350} src={phones}/>
            <p className="text-white absolute text-2xl font-bold bottom-[-2540px] left-40">Design Byte App</p>
            <img className="rounded-[30px] h-[400px]" width={400} height={400} src={hand}/>
            <p className="text-white absolute right-[53%] text-2xl font-bold bottom-[-2550px]">Cloud App</p>
            <img className="rounded-[30px] h-[350px]" width={350} height={350} src={phone}/>
            <p className="text-white absolute right-[220px] text-2xl font-bold bottom-[-2540px]">Design Furniture App</p>
        </div>
        <Button className='overflow-hidden border border-[#377DFF] text-[#377DFF] font-bold hover:bg-[#377DFF] hover:text-white transition-all duration-500 ease-in-out' text='See All Portfolio'/>
    </div>
  </Container>;
}