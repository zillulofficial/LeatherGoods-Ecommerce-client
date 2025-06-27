import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";


const PurchaseDetails = () => {
    const axiosSecure = useAxiosSecure()
    const [modalData, setModalData] = useState('')
    const { data: purchase = [], refetch } = useQuery({
        queryKey: ['purchase'],
        queryFn: async () => {
            const res = await axiosSecure.get('/purchase')
            return res.data
        }
    })
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/purchase/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleModal = sell => {
        setModalData(sell)
    }
    // console.log(purchase);
    return (
        <div className="mt-16">
            <SectionTitle
                Heading={"Manage all purchase"}
                subHeading={"At a Glance"}
            ></SectionTitle>

            <div className=" container mx-auto bg-white shadow-xl p-12">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="rounded-t-xl">
                            <tr className="bg-[#84ACFA]">
                                <th></th>
                                <th className="font-semibold text-white">Name</th>
                                <th className="font-semibold text-white">Email</th>
                                <th className="font-semibold text-white">See More</th>
                                <th className="font-semibold text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                purchase.map((sell, i) => <tr key={sell.mongoPurchaseData?._id}>
                                    <th>{i + 1}</th>
                                    <td className=" ">{sell.mongoPurchaseData?.buyerName}</td>
                                    <td>{sell.mongoPurchaseData?.buyerEmail ? sell.mongoPurchaseData?.buyerEmail : "selled without email"}</td>
                                    
                                    <td>
                                        <button onClick={() => { document.getElementById('my_modal_5').showModal(), handleModal(sell) }} className="cursor-pointer relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-[#0057B7] transition duration-300 ease-out bsell-2 bsell-[#0057B7] rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0057B7] group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-[#0057B7] transition-all duration-300 transform group-hover:translate-x-full ease">Details</span>
                                            <span className="relative invisible">Details</span>
                                        </button>

                                    </td>
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(sell._id)} className="btn btn-error"><RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                            }
                            {/* modal part */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <img className="w-52" src={modalData.mongoPurchaseData?.imageURL} alt="" />
                                    <div>
                                        <h1 className="text-center pt-6 pb-2 text-xl text-black/60 ">All the Purchase Information</h1>
                                        <hr className="text-slate-300 w-72 mx-auto"/>
                                        <h3 className=" text-md  mb-2 mt-6">Buyer - {modalData.mongoPurchaseData?.buyerName}</h3>
                                        <p className="py-4 ">Phone - {modalData.mongoPurchaseData?.buyerPhone}</p>
                                        <p className="py-4 ">Email -  {modalData.mongoPurchaseData?.buyerEmail}</p>
                                        <p className="py-4 ">Address - {modalData.mongoPurchaseData?.buyerAddress}</p>
                                        <p className="py-4 ">Product Name - {modalData.mongoPurchaseData?.name}</p>
                                        <p className="py-4 ">Product Price - {modalData.mongoPurchaseData?.price}</p>
                                        <p className="py-4 ">Product Category - {modalData.mongoPurchaseData?.category}</p>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PurchaseDetails;