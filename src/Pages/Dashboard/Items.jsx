import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
import { GiLeatherBoot } from "react-icons/gi";
import { GiRolledCloth } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";


const Items = () => {
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const axiosSecure = useAxiosSecure()

   useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/allItems?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`)
            .then(res => {
                setItems(res.data)
            })
    }, [currentPage, itemsPerPage, filter, sort, search])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/itemsCount?filter=${filter}&search=${search}`)
            .then(res => {
                setCount(res.data.count)
            })
    }, [filter, search])

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys().map(element => element + 1)]

    const handlePagination = (value) => {
        // console.log(value);
        setCurrentPage(value)
    }

    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')

    }

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }
    console.log(items);

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

                axiosSecure.delete(`/items/${id}`)
                    .then(res => {
                        // refetch()
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
    console.log(items);
    return (
        <div className="mt-16">
            <SectionTitle
                Heading={"Change & Update"}
                subHeading={"Item List"}
            ></SectionTitle>

            <div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            onChange={e => {
                                setFilter(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={filter}
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='Bags'>Bags</option>
                            <option value='Shoes'>Shoes</option>
                            <option value='Pure Leather'>Pure Leather</option>
                            <option value='Other Items'>Other Items</option>
                        </select>
                    </div>
                    <div>
                        <select
                            onChange={e => {
                                setSort(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Deadline</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Item Name'
                                aria-label='Enter Item Name'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                     
                    <button onClick={handleReset} className='btn'>Reset</button>
                </div>
                {/* all items section */}
                <div className='flex flex-col mt-6 container mx-auto'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Name</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Category</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Price Range</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Description
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Edit
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            items?.map(item => <tr key={item._id}>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {item.name}
                                                </td>

                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <p
                                                            className={`px-3 py-1 ${item.category === 'Bags' && 'text-[#7e0b02]'
                                                                } ${item.category === 'Shoes' && 'text-[#e05d3f]'
                                                                } ${item.category === 'Pure Leather' && 'text-[#8a694f]'
                                                                } ${item.category === 'Other Items' && 'text-[#97623b] bg-gray-100/60'
                                                                } rounded-full text-xs
                                                            `}
                                                        >
                                                            {item?.category === 'Bags' ? <BsHandbagFill className="text-2xl"></BsHandbagFill> :
                                                                item?.category === 'Shoes' ? <GiLeatherBoot className="text-2xl"></GiLeatherBoot> :
                                                                    item?.category === 'Pure Leather' ? <GiRolledCloth className="text-2xl"></GiRolledCloth> :
                                                                        'Other'
                                                            }
                                                        </p>
                                                    </div>
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    ${item.price}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <p
                                                            className={`px-3 py-1 ${item.status === 'On Stock' && 'text-emerald-500 bg-emerald-100/60'
                                                                } ${item.status === 'Out of Stock' && 'text-red-500 bg-red-100/60'
                                                                } ${item.status === 'Soon Arrival' && 'text-yellow-500 bg-yellow-100/60'
                                                                } rounded-full text-xs
                                                            `}
                                                        >
                                                            {item.status}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td
                                                    title=''
                                                    className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                                >
                                                    {item.description.substring(0, 20)}...
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-6'>
                                                        <button onClick={() => handleDelete(item._id)} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth='1.5'
                                                                stroke='currentColor'
                                                                className='w-5 h-5'
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                                />
                                                            </svg>
                                                        </button>

                                                        <Link to={`/dashboard/update/${item._id}`}>
                                                            <button className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                                                                <svg
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    fill='none'
                                                                    viewBox='0 0 24 24'
                                                                    strokeWidth='1.5'
                                                                    stroke='currentColor'
                                                                    className='w-5 h-5'
                                                                >
                                                                    <path
                                                                        strokeLinecap='round'
                                                                        strokeLinejoin='round'
                                                                        d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pagination section */}
            <div className='flex justify-center mt-12'>
                {/* previous button */}
                <button disabled={currentPage === 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* number of pages */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePagination(btnNum)}
                        key={btnNum}
                        className={`hidden ${btnNum === currentPage ? 'text-white bg-blue-200' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* next button */}
                <button disabled={currentPage === numberOfPages}
                    onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Items;