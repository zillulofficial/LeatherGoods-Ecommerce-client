import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="mb-32">
            <div className='mb-16'>
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
                        <img className='w-full lg:h-[800px] md:h-[600px] h-[300px]' src="https://i.postimg.cc/T36r0JBN/banner-3.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 md:left-72 left-24'>
                            <p className='text-sm md:text-3xl lg:text-7xl text-white uppercase mb-8 '>Welcome to <br className='hidden md:block' /><span className='text-[#0057B7]'>Tanex </span><br className='hidden md:block' />International </p>
                            
                            <Link to='/aboutUs'>
                                <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                        <img className='w-full lg:h-[800px] md:h-[600px] h-[300px]' src="https://i.postimg.cc/XNHg1HGJ/bg-5.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 md:left-72 left-24'>
                        <p className='text-sm md:text-3xl lg:text-7xl text-white uppercase mb-8 '>Sourcing the <br className='hidden md:block' />Finest <span className='text-[#0057B7]'>Leather</span><br className='hidden md:block' /> Globally </p>
                            
                            <Link to='/aboutUs'>
                                <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                        <img className='w-full lg:h-[800px] md:h-[600px] h-[300px]' src="https://i.postimg.cc/yNCxTZFj/bg-4.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 md:left-72 left-24'>
                        <p className='text-sm md:text-3xl lg:text-7xl text-white uppercase mb-8 '>Discover Excellence<br className='hidden md:block' />with<span className='text-[#0057B7]'>Tanex </span><br className='hidden md:block' />International </p>
                            
                            <Link to='/aboutUs'>
                                <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
            </div>
        </div>
    );
};

export default Banner;