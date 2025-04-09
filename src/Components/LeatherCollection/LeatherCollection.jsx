import React from 'react';
import { Link } from 'react-router-dom';

const LeatherCollection = () => {
    return (
        <div className='mb-32'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center mb-32'>
                <p className=" mb-8 text-blue-400">Welcome to Tanex</p>
                <p className="text-5xl roboto font-bold uppercase mb-12">Our <span className="md:border-b-8  md:border-[#84ACFA]">Leather Collection </span> & Support</p>
                <p className='text-lg text-[#777777]'>At Tanex International, we specialize in supplying top-quality finished and crust leather made from <br className='hidden lg:block' /> Cow, Goat, and Sheep skin. Our leathers are sourced from reputed tanneries and meet international quality standards.</p>
            </div>

            {/* Gallery section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* picture 01 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Semi-Aniline & <br className='hidden lg:block' /><span className="md:border-b-8  md:border-[#0057B7]">Burnishable</span> Finished Leather</h2>
                            <p className='text-gray-100 mb-5'>Premium quality with a natural look and burnishing effect.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/PxhFVw64/gallery-1.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 02 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Full Chrome  <br className='hidden lg:block' /><span className="md:border-b-8  md:border-[#0057B7]">Softy</span> Nappa</h2>
                            <p className='text-gray-100 mb-5'>Luxuriously soft with a smooth or milled texture.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/6pqmBBQx/bg-1.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 03 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Full Chrome <br className='hidden lg:block' />Softy Nappa <span className="md:border-b-8  md:border-[#0057B7]">Crust </span> Leather</h2>
                            <p className='text-gray-100 mb-5'>Perfect for high-end fashion and upholstery.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/T36r0JBN/banner-3.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 04 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Full Chrome <span className="md:border-b-8  md:border-[#0057B7]">Drum-Dyed</span> <br className='hidden lg:block' />Cow Crust Leather</h2>
                            <p className='text-gray-100 mb-5'>Deep-dyed for rich, consistent color and durability.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/W1ktnPGw/gallery-3.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 05 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Full Vegetable & <br className='hidden lg:block' /><span className="md:border-b-8  md:border-[#0057B7]">Semi-Chrome </span> Natural <span className="md:border-b-8  md:border-[#0057B7]">Milled Crust</span> & Finished Leather</h2>
                            <p className='text-gray-100 mb-5'>Eco-friendly, soft, and flexible.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/nc5CBLDL/gallery-4.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 06 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Natural Milled Softy <br className='hidden lg:block' />Shoe <span className="md:border-b-8  md:border-[#0057B7]">Upper Finished</span> Leather</h2>
                            <p className='text-gray-100 mb-5'>Ideal for premium footwear.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/tRB1RkRW/gallery-2.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 07 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3"><span className="md:border-b-8  md:border-[#0057B7]">High-Quality </span><br className='hidden lg:block' />Finished Lining Leather </h2>
                            <p className='text-gray-100 mb-5'>Durable and comfortable for shoe interiors.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/W4czYfSL/gallery-7.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 08 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3">Semi-Chrome <br className='hidden lg:block' />Shoe <span className="md:border-b-8  md:border-[#0057B7]">Upper Crust</span> Leather</h2>
                            <p className='text-gray-100 mb-5'>Strong and flexible for long-lasting wear.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/mDbDBz0m/gallery-8.jpg" alt="" />
                    </div>
                </Link>
                {/* picture 09 */}
                <Link to='/leatherCollection'>
                    <div className='relative cursor-pointer h-[400px] overflow-hidden group '>
                        <div className=" flex flex-col justify-end w-full h-full px-8 py-6 transition-opacity duration-700 opacity-0 brightness-100 hover:brightness-75 backdrop-blur-sm group-hover:opacity-100">
                            <h2 className="mt-4 text-3xl font-semibold text-white capitalize mb-3"><span className="md:border-b-8  md:border-[#0057B7]"> Chrome-Free</span> Crust <br className='hidden lg:block' />& Finished Leather</h2>
                            <p className='text-gray-100 mb-5'>ustainable and eco-friendly option.</p>
                        </div>
                        <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover transition-all duration-700 hover:scale-125' src="https://i.postimg.cc/4NnYYcnM/gallery-5.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LeatherCollection;