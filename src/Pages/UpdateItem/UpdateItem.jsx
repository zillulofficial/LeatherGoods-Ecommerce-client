import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm()
    const [imageURL, setImageURL] = useState('')
    const axiosSecure = useAxiosSecure()
    const item = useLoaderData()
    

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
        console.log(uploadedImageURL.url);

        
        setImageURL(uploadedImageURL.url);
    }
    const onSubmit = async (data) => {
        if(!imageURL){
            setImageURL(item?.imageURL)
        }

        const newData = { ...data, imageURL,  id: item._id}
        console.log(newData);
        axiosSecure.put(`/item/${newData.id}`, newData)
            .then(res => {

                if (res.data.modifiedCount) {
                    reset()
                    Swal.fire({
                        title: 'Success!',
                        text: `Product added successfully`,
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="mt-16">
            <SectionTitle
                Heading={"Update an Item"}
                subHeading={"Want Changes"}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 md:flex-row p-16 container mx-auto bg-white shadow-lg rounded-xl">
                {/* adding picture */}
                <div className="flex flex-col">
                    <div className='mb-5 border border-dashed p-10 flex flex-col gap-5 justify-center items-center'>

                        <img src={item.imageURL} alt="" />
                    </div>
                    <div>
                        {/* <IoCloudUploadOutline className='text-6xl'></IoCloudUploadOutline> */}
                        <div>
                            <input onChange={handleFileUpload} className='cursor-pointer text-end border w-full rounded-md  pl-3 py-2' type="file" id="" />
                        </div>
                    </div>
                </div>
                {/* Other information */}
                <div className='w-full'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                        {/* name */}
                        <div>
                            <p className="mb-2">Product Name</p>
                            <input {...register("name", { required: true })} defaultValue={item?.name} className="w-full border rounded-md border-gray-300 pl-3 py-2" placeholder="name" type="text" />
                        </div>
                        {/* type */}
                        <div>
                            <p className="mb-2">Product Category</p>
                            <select {...register("category", { required: true })} defaultValue={item?.category}
                                name='category'
                                id='category'
                                className='w-full border rounded-md border-gray-300 px-3 py-2'
                            >
                                <option value='Bags'>Bags</option>
                                <option value='Shoes'>Shoes</option>
                                <option value='Pure Leather'>Pure Leather</option>
                                <option value='Other Items'>Other Items</option>
                            </select>
                        </div>
                        {/* status */}
                        <div>
                            <p className="mb-2">Status</p>
                            <select {...register("status", { required: true })} defaultValue={item?.status}
                                name='status'
                                id='status'
                                className='w-full border rounded-md border-gray-300 px-3 py-2'
                            >
                                <option value='On Stock'>On Stock</option>
                                <option value='Out of Stock'>Out of Stock</option>
                                <option value='Soon Arrival'>Soon Arrival</option>
                            </select>
                        </div>
                        {/* price */}
                        <div>
                            <p className="mb-2">Product Price</p>
                            <input {...register("price", { required: true })} defaultValue={item?.price} className="w-full border rounded-md border-gray-300 pl-3 py-2" placeholder="Enter price" type="text" />
                        </div>
                    </div>
                    {/* description */}
                    <div>
                        <p className="mb-2">Describe the Product</p>
                        <textarea {...register("description", { required: true })} defaultValue={item?.description} className="mb-5 textarea textarea-bordered w-full" placeholder=""></textarea>
                    </div>
                    {/* button */}
                    <button class="cursor-pointer relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;