import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { GiFist, GiTargetLaser } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

const ContactUs = () => {
    const { user } = useAuth()
    const handleContact = e => {
        e.preventDefault()
        toast.success("concerns on console log", {
            position: "top-center"
        })
        const form = e.target
        const name = form.name?.value
        const email = form.email?.value
        const phone = form.phone?.value
        const description = form.description?.value

        const contactInfo = {
            name,
            email,
            phone,
            description
        }

        console.log(contactInfo);
    }
    return (
        <div>
            <div className="bg-cover bg-no-repeat md:h-[500px] h-[300px] bg-[url(https://i.postimg.cc/BQWLcdN0/bg-6.jpg)] mb-24">
                <div className="h-full bg-black opacity-65">
                    <p className="flex drop-shadow-2xl h-full opacity-100 justify-center items-center text-white text-5xl md:text-9xl">Contact Us</p>
                </div>
            </div>
            <div>
                <p className="text-4xl text-center mb-12">Get in touch with us</p>

                {/* contact us part */}
                <div className="container mx-auto mb-24 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
                    <div className="flex-1/2">
                        <div className="w-full">
                            <iframe width="100%" height="511.48" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=511.48&amp;hl=en&amp;q=BSCIC%20Tannery%20Industrial%20Estate,%20Hemayetpur+(Tanex%20International)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.gps.ie/collections/drones/">buy drones</a>
                            </iframe>
                        </div>
                    </div>
                    <form onSubmit={handleContact} className="bg-[#0066ff0a] p-6 ">
                        <div className="flex gap-7 mb-5">
                            <div>
                                <p className="mb-2">Full Name</p>
                                <input className="border rounded-md border-gray-300 pl-3 py-2" placeholder="name" type="text" name="name" id="" />
                            </div>
                            <div>
                                <p className="mb-2">Phone</p>
                                <input className="border rounded-md border-gray-300 pl-3 py-2" placeholder="Enter phone" type="number" name="phone" id="" />
                            </div>
                            <div>
                                <p className="mb-2">Email</p>
                                <input className="border rounded-md border-gray-300 pl-3 py-2" placeholder="name@example.com" defaultValue={user?.email} type="text" name="email" id="" />
                            </div>
                        </div>
                        <p className="mb-2">Elaborate You Concerns</p>
                        <textarea name="description" className="mb-5 textarea textarea-bordered w-full" placeholder=""></textarea>

                        <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
                        <p>BSCIC Tannery Industrial Estate, Tannery Gate No#2, Horindhara,<br /> Hemayetpur, Savar, Dhaka - 1340, Bangladesh.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full flex justify-center items-center bg-[#0057B7] w-10 h-10">
                            <IoCallOutline className="text-white text-xl"></IoCallOutline>
                        </div>
                        <p>+880 1775 843299</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full flex justify-center items-center bg-[#0057B7] w-10 h-10">
                            <MdMailOutline className="text-white text-xl"></MdMailOutline>
                        </div>
                        <p>info@tanex.com.bd</p>
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