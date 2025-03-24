import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-[#000000e5] pt-8">
            <div className="container px-6 py-8 mx-auto">

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                    <div className='md:mx-auto'>
                        <div className='ml-3 lg:ml-12 flex-1'>
                            <div className='flex items-center mb-4'>
                                <Link to='/'><p className="text-[#eb2a2e] font-bold text-2xl uppercase dms">TANEX <br /><span className="roboto text-white text-[14px]">I n t e r n a t i o n a l</span></p></Link>
                            </div>
                            <p className='text-white text-sm'>Tanex International is a dynamic and trusted leather buying house operating from Bangladesh’s largest tannery hub.</p>
                            <div className='mt-5 flex gap-4 items-center'>
                                <div className='bg-[#eb2a2e] flex justify-center items-center rounded-full w-8 hover:bg-white duration-500 h-8'>
                                    <Link><FaFacebookF className='text-white hover:text-[#eb2a2e] duration-500'></FaFacebookF></Link>
                                </div>
                                <div className='bg-[#eb2a2e] flex justify-center items-center rounded-full w-8 h-8 hover:bg-white duration-500'>
                                    <Link><RiInstagramFill className='text-lg text-white hover:text-[#eb2a2e] duration-500'></RiInstagramFill></Link>
                                </div>
                                <div className='bg-[#eb2a2e] flex justify-center items-center rounded-full w-8 h-8 hover:bg-white duration-500'>
                                    <Link><FaTwitter className='text-white hover:text-[#eb2a2e] duration-500'></FaTwitter></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:mx-auto'>
                        <div className="text-xl font-medium text-gray-400 uppercase">
                            Pages
                        </div>

                        <Link to='/' className="block mt-5 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            Home
                        </Link>
                        <Link to='/aboutUs' className="block mt-3 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            About Us
                        </Link>
                        <Link to='/contactUs' className="block mt-3 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            Contact Us
                        </Link>
                        <Link to='/login' className="block mt-3 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            Login
                        </Link>
                    </div>

                    <div className='md:mx-auto'>
                        <div className="text-xl font-medium text-gray-400 uppercase">
                            Important Links
                        </div>

                        <Link to='/' className="block mt-5 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            Link 1
                        </Link>
                        <Link to='/' className="block mt-3 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            Link 2
                        </Link>
                        <Link to='/' className="block mt-3 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            link 3
                        </Link>
                        <Link to='/' className="block mt-3 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline">
                            Link 4
                        </Link>
                    </div>
                    <div className='md:mx-auto'>
                        <div className="text-xl font-medium text-gray-400 uppercase">
                            Contact Us
                        </div>

                        <Link to='/' className="gap-3 mt-5 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline flex items-center">
                            <IoMdMail className='text-lg text-[#eb2a2e]'></IoMdMail> info@tanex.com.bd
                        </Link>

                        <Link to='/' className="gap-3 mt-5 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline flex items-center">
                            <IoCall className='text-lg text-[#eb2a2e]'></IoCall> +880 1775 843299
                        </Link>

                        <Link to='https://tanex.com.bd/' className="gap-3 mt-5 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline flex items-center">
                            <FaGlobe className='text-lg text-[#eb2a2e]'></FaGlobe>https://tanex.com.bd/
                        </Link>

                        <Link to='/' className="gap-3 mt-5 text-sm font-medium text-white duration-700 hover:text-gray-300  hover:underline flex">
                            <FaLocationDot className='text-2xl text-[#eb2a2e]'></FaLocationDot>BSCIC Tannery Industrial Estate, Tannery Gate No#2, Horindhara, Hemayetpur, Savar, Dhaka - 1340, Bangladesh.
                        </Link>
                    </div>
                </div>

                <hr className="my-7 border-[#eb2a2e]" />


                <div className="container flex flex-col items-center justify-between mx-auto space-y-4 sm:space-y-0 sm:flex-row">

                    <div className='flex justify-center w-full'>
                        <p className=" text-white">© Copyright 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;