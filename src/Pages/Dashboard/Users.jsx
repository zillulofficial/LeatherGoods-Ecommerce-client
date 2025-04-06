import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { IoIosPeople } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleSetAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an admin!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
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

                axiosSecure.delete(`/users/${id}`)
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
    return (
        <div className="mt-16">
                <SectionTitle
                    Heading={"Manage all users"}
                    subHeading={"How Many??"}
                ></SectionTitle>
            <div className=" container mx-auto bg-white shadow-xl p-12">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="rounded-t-xl">
                            <tr className="bg-[#84ACFA]">
                                <th></th>
                                <th className="font-semibold text-white">Image</th>
                                <th className="font-semibold text-white">Name</th>
                                <th className="font-semibold text-white">Email</th>
                                <th className="font-semibold text-white">Role</th>
                                <th className="font-semibold text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td className="h-16 w-16"><img className="rounded-md" src={user.photoURL} alt="" /></td>
                                    <td className=" ">{user?.name}</td>
                                    <td>{user.email ? user?.email : "user logged in without email"}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? "Admin" : <button onClick={() => handleSetAdmin(user)}><IoIosPeople className=" bg-[#84ACFA] p-2 w-10 h-10 text-2xl text-white rounded-md cursor-pointer"></IoIosPeople></button>
                                        }
                                    </td>
                                    <td className="flex justify-center">
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-error"><RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;