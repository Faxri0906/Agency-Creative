import Button from "../ui/Button";
import Container from "../ui/Container";
import team from "../assets/img/team.png";
import people from "../assets/img/people.png";
export default function Collaboration() {
  return <Container>
    <div className="flex gap-[302px] mb-[180px]">
        <div className="gap-[25px]">
            <h1 className="text-[55px] font-bold w-[491px]">Interesting Collaboration With Us?</h1>
            <p className="text-xl text-[#464646] mb-[25px]">Help you to reach your business goal</p>
            <Button className='py-3 flex border bg-[#377DFF] border-[#377DFF] text-white font-bold hover:bg-white hover:text-[#377DFF] transition-all duration-500 ease-in-out' text='Get Started'/>
        </div>
        <div className="">
            <img className="w-[325px] h-[288px] absolute rounded-2xl right-[33%] z-10" src={team}/>
            <img className="w-[294px] h-[288px] absolute rounded-2xl right-[15%] bottom-[-3780px]" src={people}/>
        </div>
    </div>
  </Container>
}