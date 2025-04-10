import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { IoIosPeople } from "react-icons/io";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";

const Orders = () => {
    const axiosSecure = useAxiosSecure()
    const [modalData, setModalData] = useState('')
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/orders')
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

                axiosSecure.delete(`/orders/${id}`)
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
    const handleModal = order => {
        setModalData(order)
    }

    return (
        <div className="mt-16">
            <SectionTitle
                Heading={"Manage all Orders"}
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
                                <th className="font-semibold text-white">Description</th>
                                <th className="font-semibold text-white">See More</th>
                                <th className="font-semibold text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                orders.map((order, i) => <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td className=" ">{order?.name}</td>
                                    <td>{order.email ? order?.email : "ordered without email"}</td>
                                    <td>{order.description.substring(0, 26)}...</td>
                                    <td>
                                        <button onClick={() => { document.getElementById('my_modal_5').showModal(), handleModal(order) }} className="cursor-pointer relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-[#0057B7] transition duration-300 ease-out border-2 border-[#0057B7] rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0057B7] group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-[#0057B7] transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                                            <span className="relative invisible">View Details</span>
                                        </button>

                                    </td>
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-error"><RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                            }
                            {/* modal part */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg flex items-center gap-3 mb-2"><IoPersonOutline></IoPersonOutline>{modalData.name}</h3>
                                    <p className="py-4 flex items-center gap-3"><MdOutlinePhoneInTalk className="text-xl"></MdOutlinePhoneInTalk>{modalData.phone}</p>
                                   <p className="py-4 flex items-center gap-3"><AiTwotoneMail className="text-xl"></AiTwotoneMail> {modalData.email}</p>
                                    <p className="py-4 flex items-center gap-3"><MdLibraryBooks className="text-xl"></MdLibraryBooks>{modalData.description}</p>
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

export default Orders;