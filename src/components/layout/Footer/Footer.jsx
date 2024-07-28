import Container from "../../ui/Container";
import Logo from "../../ui/Logo";

const Footer = () => {
  return <div className="h-[548px] bg-[#383638] text-white">
      <Container>
      <div className="flex pt-[132px]">
        <div className="bg-white overflow-hidden w-[187px] h-[88px] py-[19px] px-[25px] rounded-[20px] mr-[66px]">
          <Logo className="bg-white"/>
        </div>
        <div className="flex gap-[77px]">
          <div className="">
            <h1 className="text-[22px] font-bold cursor-pointer">Terms & policies</h1>
            <p className="text-[18px] font-light mt-5 cursor-pointer">Terms of Service</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">Privacy Policy</p>
          </div>
          <div className="">
            <h1 className="text-[22px] font-bold cursor-pointer">Company</h1>
            <p className="text-[18px] font-light mt-5 cursor-pointer">Home</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">About Us</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">Contact Us</p>
          </div>
          <div className="">
            <h1 className="text-[22px] font-bold cursor-pointer">Contact</h1>
            <p className="text-[18px] font-light mt-5 cursor-pointer">(+62) 893912392190</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">agecnycr@gmail.com</p>
          </div>
          <div className="">
            <h1 className="text-[22px] font-bold cursor-pointer">Location</h1>
            <p className="text-[18px] font-light mt-5 cursor-pointer">PT Osiris Real Estate Internasional</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">Jl. KH. Wahid Hasyim Kel No.10D</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">Jakarta, Indonesia</p>
            <p className="text-[18px] font-light mt-5 cursor-pointer">team@OsirisRealEstate.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex gap-10">
          <div className="bg-white w-10 h-10 rounded-full mb-[17px] cursor-pointer border-white">
            <svg className="ml-[8px] mt-[8px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="bg-white w-10 h-10 rounded-full mb-[17px] cursor-pointer border-white">
            <svg className="ml-[8px] mt-[8px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2.02539H7C4.23858 2.02539 2 4.26397 2 7.02539V17.0254C2 19.7868 4.23858 22.0254 7 22.0254H17C19.7614 22.0254 22 19.7868 22 17.0254V7.02539C22 4.26397 19.7614 2.02539 17 2.02539Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 11.3954C16.1234 12.2277 15.9812 13.0777 15.5937 13.8245C15.2062 14.5713 14.5931 15.1769 13.8416 15.5551C13.0901 15.9334 12.2384 16.065 11.4077 15.9314C10.5771 15.7977 9.80971 15.4055 9.21479 14.8106C8.61987 14.2157 8.22768 13.4483 8.09402 12.6177C7.96035 11.787 8.09202 10.9353 8.47028 10.1838C8.84854 9.4323 9.45414 8.81919 10.2009 8.43169C10.9477 8.04419 11.7977 7.90204 12.63 8.02545C13.4789 8.15133 14.2648 8.54691 14.8716 9.15375C15.4785 9.7606 15.8741 10.5465 16 11.3954Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 6.52539H17.51" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="bg-white w-10 h-10 rounded-full mb-[17px] cursor-pointer border-white">
            <svg className="ml-[8px] mt-[8px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.02539C17.5913 8.02539 19.1174 8.65753 20.2426 9.78275C21.3679 10.908 22 12.4341 22 14.0254V21.0254H18V14.0254C18 13.495 17.7893 12.9863 17.4142 12.6112C17.0391 12.2361 16.5304 12.0254 16 12.0254C15.4696 12.0254 14.9609 12.2361 14.5858 12.6112C14.2107 12.9863 14 13.495 14 14.0254V21.0254H10V14.0254C10 12.4341 10.6321 10.908 11.7574 9.78275C12.8826 8.65753 14.4087 8.02539 16 8.02539V8.02539Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 9.02539H2V21.0254H6V9.02539Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6.02539C5.10457 6.02539 6 5.12996 6 4.02539C6 2.92082 5.10457 2.02539 4 2.02539C2.89543 2.02539 2 2.92082 2 4.02539C2 5.12996 2.89543 6.02539 4 6.02539Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="bg-white w-10 h-10 rounded-full mb-[17px] cursor-pointer border-white">
            <svg className="ml-[8px] mt-[8px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4.02539H20C21.1 4.02539 22 4.92539 22 6.02539V18.0254C22 19.1254 21.1 20.0254 20 20.0254H4C2.9 20.0254 2 19.1254 2 18.0254V6.02539C2 4.92539 2.9 4.02539 4 4.02539Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6.02539L12 13.0254L2 6.02539" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="bg-white w-10 h-10 rounded-full mb-[17px] cursor-pointer border-white">
            <svg className="ml-[8px] mt-[8px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3.02544C22.0424 3.70091 20.9821 4.21755 19.86 4.55544C19.2577 3.86295 18.4573 3.37213 17.567 3.14936C16.6767 2.9266 15.7395 2.98263 14.8821 3.30989C14.0247 3.63715 13.2884 4.21984 12.773 4.97915C12.2575 5.73847 11.9877 6.63777 12 7.55544V8.55544C10.2426 8.601 8.50127 8.21125 6.93101 7.42088C5.36074 6.63052 4.01032 5.46407 3 4.02544C3 4.02544 -1 13.0254 8 17.0254C5.94053 18.4234 3.48716 19.1244 1 19.0254C10 24.0254 21 19.0254 21 7.52544C20.9991 7.24689 20.9723 6.96903 20.92 6.69544C21.9406 5.68893 22.6608 4.41815 23 3.02544V3.02544Z" stroke="#383638" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="w-[500px] h-[1px] bg-white fill-white"></div>
        <div className="mt-4">
          <p>Copyright @ 2024 Agency Creative. All Right Reserved</p>
        </div>
      </div>
      </Container>
    </div>
}

export default Footer;