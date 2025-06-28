import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className=" bg-[#0066ff10] pt-8">
            <div className="container px-6 py-8 mx-auto">

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center justify-center">
                    <div className='lg:mx-auto h-full'>
                        <div className=' flex-1'>
                            <div className='flex items-center mb-5'>
                            <Link to='/'><img className="w-24" src="https://i.postimg.cc/cHsx9DgD/logo-of-the-website.png" alt="" /></Link>
                            </div>
                            <p className='text-[#232323] text-sm'>Velin International is a dynamic and trusted leather buying house operating from Bangladesh’s largest tannery hub.</p>
                            <div className='mt-5 flex gap-4 items-center'>
                                <div className='bg-[#0057B7] flex justify-center items-center rounded-full w-8 hover:bg-white duration-500 h-8'>
                                    <Link to='https://www.facebook.com/zill.hossin/'><FaFacebookF className='text-white hover:text-[#0057B7] duration-500'></FaFacebookF></Link>
                                </div>
                                <div className='bg-[#0057B7] flex justify-center items-center rounded-full w-8 h-8 hover:bg-white duration-500'>
                                    <Link to='/https://www.instagram.com/zillul_official/'><RiInstagramFill className='text-lg text-white hover:text-[#0057B7] duration-500'></RiInstagramFill></Link>
                                </div>
                                <div className='bg-[#0057B7] flex justify-center items-center rounded-full w-8 h-8 hover:bg-white duration-500'>
                                    <Link to={`https://www.linkedin.com/in/md-zillul-hakim-162311282/`}><FaLinkedin className='text-white hover:text-[#0057B7] duration-500'></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:mx-auto h-full'>
                        <div className="text-xl font-medium text-gray-400 uppercase">
                            Pages
                        </div>

                        <Link to='/' className="block mt-5 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            Home
                        </Link>
                        <Link to='/aboutUs' className="block mt-3 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            About Us
                        </Link>
                        <Link to='/contactUs' className="block mt-3 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            Contact Us
                        </Link>
                        <Link to='/login' className="block mt-3 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            Login
                        </Link>
                    </div>

                    <div className='lg:mx-auto h-full '>
                        <div className="text-xl font-medium text-gray-400 uppercase">
                            Important Links
                        </div>

                        <Link to='https://www.facebook.com/profile.php?id=61576806280645' className="block mt-5 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            InnovaTech Limited
                        </Link>
                        <Link to='https://www.facebook.com/profile.php?id=61567155205708' className="block mt-3 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            MarketBlitz Tech & Offshore Limited
                        </Link>
                        <Link to='https://www.fiverr.com/sellers/zillul_creator/edit' className="block mt-3 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline">
                            Fiver
                        </Link>
                    </div>
                    <div className='lg:mx-auto h-full'>
                        <div className="text-xl font-medium text-gray-400 uppercase">
                            Contact Us
                        </div>

                        <Link to='/' className="gap-3 mt-5 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline flex items-center">
                            <IoMdMail className='text-lg text-[#0057B7]'></IoMdMail> zillul.hakim100@gmail.com
                        </Link>

                        <Link to='/' className="gap-3 mt-5 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline flex items-center">
                            <IoCall className='text-lg text-[#0057B7]'></IoCall> +880 1748767639
                        </Link>

                        <Link to='https://my-portfolio-jade-three-64.vercel.app/' className="gap-3 mt-5 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline flex items-center">
                            <FaGlobe className='text-lg text-[#0057B7]'></FaGlobe>https://my-portfolio-jade-three-64.vercel.app/
                        </Link>

                        <Link to='/' className="gap-3 mt-5 text-sm font-medium text-[#232323] duration-700 hover:text-gray-300  hover:underline flex">
                            <FaLocationDot className='text-2xl text-[#0057B7]'></FaLocationDot>Road No - 05, House No # - 05, Mohammadpur, Dhaka - 1207, Bangladesh
                        </Link>
                    </div>
                </div>

                <hr className="my-7 border-[#0057B7]" />


                <div className="container flex flex-col items-center justify-between mx-auto space-y-4 sm:space-y-0 sm:flex-row">

                    <div className='flex justify-center w-full'>
                        <p className=" text-[#232323]">© Copyright {currentYear}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;