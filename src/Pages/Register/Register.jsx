import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoCloudUploadOutline, IoPersonSharp } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Aos from 'aos'
import 'aos/dist/aos.css'
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        document.title = "JobSync | Register"
        Aos.init()
    }, [])

    const [showPassword, setShowPassword] = useState(false)
    const { createUser, user, setUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [])
    const handleFileUpload = async (e) => {
        const file = e.target.files[0]

        if (!file) return

        const data = new FormData()
        data.append('file', file)
        data.append("upload_preset", "Tanex_Interenational")
        data.append("cloud_name", "dzs02ilah")

        const res = await fetch('https://api.cloudinary.com/v1_1/dzs02ilah/image/upload', {
            method: "POST",
            body: data
        })

        const uploadedImageURL = await res.json()

        setImageURL(uploadedImageURL.url);
    }
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = imageURL
        const email = form.email.value
        const password = form.password.value
        // console.log(name, photoURL, email, password)
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            Swal.fire({
                title: 'OOPS!',
                text: 'Password is week',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
            return
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoURL)
                    .then(res => {
                        setUser({ ...user, photoURL: photoURL, displayName: name })
                        // console.log(res);
                        const userInfo = {
                            name: name,
                            photoURL: photoURL,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                // console.log(res.data);
                                
                                if (res.data?.insertedId) {
                                    Swal.fire({
                                        title: 'Congrats!',
                                        text: 'Registered successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Okay'
                                    })
                                    navigate('/')
                                }
                                
                            })
                    })

                // console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    // if(user || loader) return
    return (
        <div className='md:min-h-screen flex justify-center items-center mb-10 md:mb-0'>
            {/* content part */}
            <div className="flex-1 lg:w-full container mx-auto">
                <div className="lg:w-1/2 mb-12 mx-auto">
                    <div className='flex justify-between items-center'>
                        <div className='mb-20'>
                            <Link to='/'><img className="lg:w-40 w-24" src="https://i.postimg.cc/cHsx9DgD/logo-of-the-website.png" alt="" /></Link>
                        </div>
                        <div className='flex gap-4 pt-3'>
                            <Link to='/login'><p className=' text-lg font-roboto'>Log In</p></Link>
                            <p className=' text-lg font-roboto'>|</p>
                            <Link to='/register'><p className='text-[#0057B7] text-lg font-roboto'>Register</p></Link>
                        </div>
                    </div>
                    <div data-aos="fade-right">
                        <h1 className="mt-4 text-[26px] text-[#111111] font-bold font-roboto mb-2">Register</h1>
                        <p className='text-lg font-roboto text-[#646464]'>Become one of our prestigious members</p>
                    </div>
                </div>

                {/* input fields */}
                <div data-aos="fade-right" className="mt-8 lg:w-1/2 lg:mt-0 mx-auto">
                    <form onSubmit={handleSubmit} className=" w-full lg:max-w-xl">
                        <div className='mb-5 w-64 border border-dashed p-10 flex flex-col gap-5 justify-center items-center'>
                            <IoCloudUploadOutline className='text-6xl'></IoCloudUploadOutline>
                            <div>
                                <input onChange={handleFileUpload} className='cursor-pointer text-end border w-full rounded-md  pl-3 py-2' type="file" id="" />
                            </div>
                        </div>
                        <div className="form-control relative flex items-center mb-4">
                            <input type="name" name="name" placeholder="Name" className="pl-4 block w-full py-3 text-gray-700 bg-white border-b-[1px]" />
                            <span className="absolute top-3 right-4">
                                <IoPersonSharp className="text-[#9c9c9c] text-xl"></IoPersonSharp>
                            </span>

                        </div>
                        {/* <div className="form-control relative flex items-center mb-4">
                            <input type="photo" name="photoURL" placeholder="PhotoURL" className="pl-4 block w-full py-3 text-gray-700 bg-white border-b-[1px]" required />
                            <span className="absolute top-3 right-4">
                                <FaCamera className="text-[#9c9c9c] text-xl"></FaCamera>
                            </span>

                        </div> */}
                        <div className="form-control relative flex items-center">
                            <input type="email" name="email" placeholder="Email address" className="pl-4 block w-full py-3 text-gray-700 bg-white border-b-[1px]" required />
                            <span className="absolute top-3 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#9c9c9c] text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                        </div>

                        <div className="form-control relative flex items-center mt-4">
                            <input type={showPassword ? "text" : "password"} name='password' className="pl-4 block w-full py-3 text-gray-700 bg-white border-b-[1px]" placeholder="Password" required />
                            <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEyeOff className="text-[#9c9c9c] text-xl"></IoMdEyeOff> : <FaEye className="text-[#9c9c9c] text-xl"></FaEye>
                                }
                            </span>

                        </div>

                        {/* Login Button  */}
                        <div className=" mt-8 md:flex md:items-center mb-12">
                            <button className="cursor-pointer w-1/3 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#0057B7dc] group">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0057B7]  group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0057B7d5] group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white text-center">Register</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <div data-aos="fade-left" className='flex-1 hidden lg:block'>
                {/* picture part */}
                <img className='w-full' src="https://i.postimg.cc/1RVCpM2r/registration.jpg" alt="" />
            </div>
        </div>
    );
};

export default Register;