import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { GiFist, GiTargetLaser } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {
            document.title = "Velin International | Contact"
            
        }, [])

    const { register, handleSubmit, reset } = useForm()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {

        axiosPublic.post('/orders', data)
            .then(res => {

                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        title: 'Success!',
                        text: `Order added successfully`,
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div>
            <div className="bg-cover bg-no-repeat bg-fixed md:h-[500px] h-[300px] bg-[url(https://i.postimg.cc/BQWLcdN0/bg-6.jpg)] mb-24">
                <div className="h-full bg-black opacity-65">
                    <p className="flex drop-shadow-2xl h-full opacity-100 justify-center items-center text-white text-5xl md:text-9xl">Contact Us</p>
                </div>
            </div>
            <div>
                <p className="text-4xl text-center mb-12">Get in touch with us</p>

                {/* contact us part */}
                <div className="container mx-auto mb-24 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
                    <div className="flex-1/2">
                        <div className="md:w-full md:h-full h-1/2 w-3/4 mx-auto ">
                            <iframe width="100%" height="511.48" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.47224228432503!2d90.35282989399713!3d23.75529691311964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf0059efb49d%3A0x2d7b0d3ab71f5af2!2sSpaandanB%20School%20(Shuchona%20Shikkha%20Kendra)!5e0!3m2!1sen!2sbd!4v1750223510972!5m2!1sen!2sbd">
                                <a href="https://www.gps.ie/collections/drones/">buy drones</a>
                            </iframe>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0066ff0a] p-6 ">
                        <div className="flex flex-col md:flex-row gap-7 mb-5">
                            <div>
                                <p className="mb-2">Full Name</p>
                                <input {...register("name", { required: true })} className="border rounded-md border-gray-300 pl-3 py-2" placeholder="name" type="text" />
                            </div>
                            <div>
                                <p className="mb-2">Phone</p>
                                <input {...register("phone", { required: true })} className="border rounded-md border-gray-300 pl-3 py-2" placeholder="Enter phone" type="number" />
                            </div>
                            <div>
                                <p className="mb-2">Email</p>
                                <input {...register("email", { required: true })} className="border rounded-md border-gray-300 pl-3 py-2" placeholder="name@example.com" defaultValue={user?.email} type="text" />
                            </div>
                        </div>
                        <p className="mb-2">Elaborate You Concerns</p>
                        <textarea {...register("description", { required: true })} className="mb-5 textarea textarea-bordered w-full" placeholder=""></textarea>

                        <button class="cursor-pointer relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Submit</span>
                        </button>
                    </form>
                </div>
                {/* icons part */}
                <div className="mb-24 container mx-auto flex flex-col lg:flex-row gap-3 justify-around">
                    <div className="flex gap-3">
                        <div className="rounded-full flex justify-center items-center bg-[#0057B7] w-10 h-10">
                            <IoLocationOutline className="text-white text-xl"></IoLocationOutline>
                        </div>
                        <p>Road No - 05, House No # - 05, Mohammadpur, <br className="hidden lg:block"/>Dhaka - 1207, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full flex justify-center items-center bg-[#0057B7] w-10 h-10">
                            <IoCallOutline className="text-white text-xl"></IoCallOutline>
                        </div>
                        <p>+880 1748767639</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full flex justify-center items-center bg-[#0057B7] w-10 h-10">
                            <MdMailOutline className="text-white text-xl"></MdMailOutline>
                        </div>
                        <p>zillul.hakim100@gmail.com</p>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="bg-[url(https://i.postimg.cc/266Jrnj7/bg-2.jpg)] bg-fixed bg-cover bg-no-repeat py-20">
                        <div className="container mx-auto lg:flex lg:justify-center">
                            <div className="bg-white text-center py-12 px-4">
                                <GiTargetLaser className="text-6xl flex justify-center w-full mb-3"></GiTargetLaser>
                                <p className="text-lg text-black mb-3">Our Mission</p>
                                <p className="text-md text-[#00000080]">
                                    To provide high-quality leather with transparency, efficiency, and professionalism.
                                </p>
                            </div>
                            <div className="bg-[#0057B7] text-center py-12 px-4">
                                <GiFist className="text-6xl text-white flex justify-center w-full mb-3"></GiFist>
                                <p className="text-lg text-white mb-3">Our Commitment</p>
                                <p className="text-md text-[#ffffff80]">
                                    To uphold ethical sourcing, sustainable practices, and customer satisfaction, ensuring long-term partnerships built on trust and excellence.
                                </p>
                            </div>
                            <div className="bg-white text-center py-12 px-4">
                                <FaEye className="text-5xl flex justify-center w-full mb-3"></FaEye>
                                <p className="text-lg text-black mb-3">Our Vision</p>
                                <p className="text-md text-[#00000080]">
                                    To be a globally recognized leather sourcing partner, ensuring excellence in every transaction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;