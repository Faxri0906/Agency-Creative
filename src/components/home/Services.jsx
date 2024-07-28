import Container from "../ui/Container";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Services() {
  return <Container>
    <div className="mt-[150px] flex gap-[154px]">
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-[#377DFF]">Our Services</h2>
            <h1 className="text-[55px] font-bold w-[419px]">Perfect and Fast
            Movement</h1>
            <p className="text-xl text-[#464646] w-[520px]">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
            <button className="flex justify-end items-center gap-4 text-xl text-[#377DFF] font-bold">Read more<FaArrowRightLong size={24}/></button>
        </div>
        <div className="flex flex-col gap-[38px]">
            <div className="flex gap-[41px]">
                <div className="flex flex-col transition-all duration-500 ease-in-out  hover:drop-shadow-lg hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-white w-[262px] h-[269px] rounded-[30px] border py-[35px] px-[53px] gap-8">
                    <div className="relative w-[100px] h-[100px] rounded-full bg-[#377DFF] justify-center items-center mx-7">
                        <svg className="ml-[29px] mt-[29px]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35 5.25H7C5.067 5.25 3.5 6.817 3.5 8.75V26.25C3.5 28.183 5.067 29.75 7 29.75H35C36.933 29.75 38.5 28.183 38.5 26.25V8.75C38.5 6.817 36.933 5.25 35 5.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 36.75H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 29.75V36.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-[#1D1D1D] text-center">Social Media
                    Management</p>
                </div>
                <div className="flex flex-col transition-all duration-500 ease-in-out hover:drop-shadow-lg hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-white w-[262px] h-[269px] rounded-[30px] border py-[35px] px-[53px] gap-8">
                    <div className="relative w-[100px] h-[100px] rounded-full bg-[#FF2D2D] justify-center items-center mx-7">
                        <svg className="ml-[29px] mt-[29px]"  width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_126)">
                                <path d="M21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M33.95 26.25C33.717 26.7778 33.6476 27.3633 33.7505 27.931C33.8534 28.4987 34.1241 29.0226 34.5275 29.435L34.6325 29.54C34.9579 29.8651 35.2161 30.2511 35.3922 30.676C35.5683 31.1009 35.659 31.5563 35.659 32.0163C35.659 32.4762 35.5683 32.9316 35.3922 33.3565C35.2161 33.7814 34.9579 34.1674 34.6325 34.4925C34.3074 34.8179 33.9214 35.0761 33.4965 35.2522C33.0716 35.4283 32.6162 35.519 32.1562 35.519C31.6963 35.519 31.2409 35.4283 30.816 35.2522C30.3911 35.0761 30.0051 34.8179 29.68 34.4925L29.575 34.3875C29.1626 33.9841 28.6387 33.7134 28.071 33.6105C27.5033 33.5076 26.9178 33.577 26.39 33.81C25.8724 34.0318 25.431 34.4002 25.12 34.8697C24.8091 35.3392 24.6422 35.8894 24.64 36.4525V36.75C24.64 37.6783 24.2713 38.5685 23.6149 39.2249C22.9585 39.8813 22.0683 40.25 21.14 40.25C20.2117 40.25 19.3215 39.8813 18.6651 39.2249C18.0087 38.5685 17.64 37.6783 17.64 36.75V36.5925C17.6265 36.0133 17.439 35.4515 17.1019 34.9802C16.7648 34.509 16.2938 34.15 15.75 33.95C15.2222 33.717 14.6367 33.6476 14.069 33.7505C13.5013 33.8534 12.9774 34.1241 12.565 34.5275L12.46 34.6325C12.1349 34.9579 11.7489 35.2161 11.324 35.3922C10.8991 35.5683 10.4437 35.659 9.98375 35.659C9.5238 35.659 9.06835 35.5683 8.64346 35.3922C8.21857 35.2161 7.83256 34.9579 7.5075 34.6325C7.18208 34.3074 6.92393 33.9214 6.74779 33.4965C6.57166 33.0716 6.481 32.6162 6.481 32.1562C6.481 31.6963 6.57166 31.2409 6.74779 30.816C6.92393 30.3911 7.18208 30.0051 7.5075 29.68L7.6125 29.575C8.01594 29.1626 8.28657 28.6387 8.38951 28.071C8.49244 27.5033 8.42295 26.9178 8.19 26.39C7.96816 25.8724 7.59982 25.431 7.13031 25.12C6.66081 24.8091 6.11063 24.6422 5.5475 24.64H5.25C4.32174 24.64 3.4315 24.2713 2.77513 23.6149C2.11875 22.9585 1.75 22.0683 1.75 21.14C1.75 20.2117 2.11875 19.3215 2.77513 18.6651C3.4315 18.0087 4.32174 17.64 5.25 17.64H5.4075C5.98674 17.6265 6.54851 17.439 7.01977 17.1019C7.49104 16.7648 7.85 16.2938 8.05 15.75C8.28295 15.2222 8.35244 14.6367 8.24951 14.069C8.14657 13.5013 7.87594 12.9774 7.4725 12.565L7.3675 12.46C7.04208 12.1349 6.78393 11.7489 6.60779 11.324C6.43166 10.8991 6.341 10.4437 6.341 9.98375C6.341 9.5238 6.43166 9.06835 6.60779 8.64346C6.78393 8.21857 7.04208 7.83256 7.3675 7.5075C7.69256 7.18208 8.07857 6.92393 8.50346 6.74779C8.92835 6.57166 9.3838 6.481 9.84375 6.481C10.3037 6.481 10.7591 6.57166 11.184 6.74779C11.6089 6.92393 11.9949 7.18208 12.32 7.5075L12.425 7.6125C12.8374 8.01594 13.3613 8.28657 13.929 8.38951C14.4967 8.49244 15.0822 8.42295 15.61 8.19H15.75C16.2676 7.96816 16.709 7.59982 17.02 7.13031C17.3309 6.66081 17.4978 6.11063 17.5 5.5475V5.25C17.5 4.32174 17.8687 3.4315 18.5251 2.77513C19.1815 2.11875 20.0717 1.75 21 1.75C21.9283 1.75 22.8185 2.11875 23.4749 2.77513C24.1313 3.4315 24.5 4.32174 24.5 5.25V5.4075C24.5022 5.97063 24.6691 6.52081 24.98 6.99031C25.291 7.45982 25.7324 7.82816 26.25 8.05C26.7778 8.28295 27.3633 8.35244 27.931 8.24951C28.4987 8.14657 29.0226 7.87594 29.435 7.4725L29.54 7.3675C29.8651 7.04208 30.2511 6.78393 30.676 6.60779C31.1009 6.43166 31.5563 6.341 32.0163 6.341C32.4762 6.341 32.9316 6.43166 33.3565 6.60779C33.7814 6.78393 34.1674 7.04208 34.4925 7.3675C34.8179 7.69256 35.0761 8.07857 35.2522 8.50346C35.4283 8.92835 35.519 9.3838 35.519 9.84375C35.519 10.3037 35.4283 10.7591 35.2522 11.184C35.0761 11.6089 34.8179 11.9949 34.4925 12.32L34.3875 12.425C33.9841 12.8374 33.7134 13.3613 33.6105 13.929C33.5076 14.4967 33.577 15.0822 33.81 15.61V15.75C34.0318 16.2676 34.4002 16.709 34.8697 17.02C35.3392 17.3309 35.8894 17.4978 36.4525 17.5H36.75C37.6783 17.5 38.5685 17.8687 39.2249 18.5251C39.8813 19.1815 40.25 20.0717 40.25 21C40.25 21.9283 39.8813 22.8185 39.2249 23.4749C38.5685 24.1313 37.6783 24.5 36.75 24.5H36.5925C36.0294 24.5022 35.4792 24.6691 35.0097 24.98C34.5402 25.291 34.1718 25.7324 33.95 26.25V26.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_126">
                                    <rect width="42" height="42" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-[#1D1D1D] text-center w-[168px]">Search Engine
                    Opimization</p>
                </div>
            </div>
            <div className="flex gap-[41px]">
                <div className="flex flex-col transition-all duration-500 ease-in-out hover:drop-shadow-xl hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-white w-[262px] h-[269px] rounded-[30px] border py-[35px] px-[53px] gap-8">
                    <div className="relative w-[100px] h-[100px] rounded-full bg-[#7CE761] justify-center items-center mx-7">
                        <svg className="ml-[29px] mt-[29px]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 33.25L33.25 21L38.5 26.25L26.25 38.5L21 33.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.5 22.75L28.875 9.625L3.5 3.5L9.625 28.875L22.75 31.5L31.5 22.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 3.5L16.7755 16.7755" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.25 22.75C21.183 22.75 22.75 21.183 22.75 19.25C22.75 17.317 21.183 15.75 19.25 15.75C17.317 15.75 15.75 17.317 15.75 19.25C15.75 21.183 17.317 22.75 19.25 22.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-[#1D1D1D] text-center">Design</p>
                </div>
                <div className="flex flex-col transition-all duration-500 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:drop-shadow-xl cursor-pointer bg-white w-[262px] h-[269px] rounded-[30px] border py-[35px] px-[53px] gap-8">
                    <div className="relative w-[100px] h-[100px] rounded-full bg-[#FFA800] justify-center items-center mx-7">
                        <svg className="ml-[29px] mt-[29px]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35 12.25H7C5.067 12.25 3.5 13.817 3.5 15.75V35C3.5 36.933 5.067 38.5 7 38.5H35C36.933 38.5 38.5 36.933 38.5 35V15.75C38.5 13.817 36.933 12.25 35 12.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29.75 3.5L21 12.25L12.25 3.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-[#1D1D1D] text-center">Ads</p>
                </div>
            </div>
        </div>
  </div>
  </Container>
}