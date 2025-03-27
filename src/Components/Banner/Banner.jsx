import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { GiFist, GiTargetLaser } from 'react-icons/gi';
import { FaEye } from 'react-icons/fa';
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative lg:mb-56 md:mb-[430px]">
            <div className=' mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper lg:min-h-[500px]"
                >
                    <SwiperSlide className='relative '>
                        <img className='w-full lg:h-[850px] md:h-[600px] h-[300px]' src="https://i.postimg.cc/T36r0JBN/banner-3.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 lg:left-72 md:left-48 left-24'>
                            <p className='text-2xl md:text-6xl lg:text-7xl text-white uppercase mb-8 '>Welcome to <br className='hidden md:block' /><span className='text-[#0057B7]'>Tanex </span><br className='hidden md:block' />International </p>

                            <Link to='/aboutUs'>
                                <button class="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read More</span>
                                </button>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full lg:h-[850px] md:h-[600px] h-[300px]' src="https://i.postimg.cc/XNHg1HGJ/bg-5.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 lg:left-72 md:left-48 left-24'>
                            <p className='text-2xl md:text-6xl lg:text-7xl text-white uppercase mb-8 '>Sourcing the <br className='hidden md:block' />Finest <span className='text-[#0057B7]'>Leather</span><br className='hidden md:block' /> Globally </p>

                            <Link to='/aboutUs'>
                                <button class="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read More</span>
                                </button>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full lg:h-[850px] md:h-[600px] h-[300px]' src="https://i.postimg.cc/yNCxTZFj/bg-4.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 lg:left-72 md:left-48 left-24'>
                            <p className='text-2xl md:text-6xl lg:text-7xl text-white uppercase mb-8 '>Discover Excellence<br className='hidden md:block' />with<span className='text-[#0057B7]'>Tanex </span><br className='hidden md:block' />International </p>

                            <Link to='/aboutUs'>
                                <button class="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read More</span>
                                </button>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* why choose us section */}
                {/*  */}
                <div className='md:absolute lg:-bottom-32 md:-bottom-80 md:left-1/12 z-10 w-1/2 md:w-full container mx-auto bg-white shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className=" text-center py-12 px-4">
                        <LiaIndustrySolid className="md:text-6xl text-4xl flex justify-center w-full mb-3"></LiaIndustrySolid>
                        <p className="text-md text-[#00000080]">Extensive industry expertise</p>
                    </div>
                    <div className=" text-center py-12 px-4">
                        <LuCrown className="md:text-6xl text-4xl text-black flex justify-center w-full mb-3"></LuCrown>
                        <p className="text-md text-[#00000080]">Premium leather sourcing</p>
                    </div>
                    <div className=" text-center py-12 px-4">
                        <MdOutlineWorkspacePremium className="md:text-6xl text-4xl flex justify-center w-full mb-3"></MdOutlineWorkspacePremium>

                        <p className="text-md text-[#00000080]">Strict quality control</p>
                    </div>
                    <div className=" text-center py-12 px-4">
                        <FaHandshake className="md:text-6xl text-4xl flex justify-center w-full mb-3"></FaHandshake>
                        <p className="text-md text-[#00000080]">Reliable global partnerships</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;