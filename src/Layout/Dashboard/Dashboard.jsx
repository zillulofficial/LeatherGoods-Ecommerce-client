import { Link, NavLink, Outlet } from "react-router-dom";
import { MdAddChart } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="">

                {/* dashboard for small device */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" md:hidden">
                        <button class="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0057B7] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0057B7] group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg class="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Dashboard</span>
                        </button>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content rounded-box z-10 ">
                        <Link to='/'><img className="w-16 mt-8 mb-3" src="https://i.postimg.cc/GhDYmQG9/tanex-interenational.png" alt="" /></Link>

                        <aside className="flex min-h-screen flex-col w-56 px-5  overflow-y-auto bg-white shadow-lg">
                            <div className="flex flex-col justify-between flex-1">
                                <nav className="-mx-3 space-y-6 ">
                                    <div className="space-y-3 ">
                                        <label className="px-3 text-xs text-gray-500 uppercase">analytics</label>

                                        <NavLink to='/dashboard/users' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                            "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                            </svg>

                                            <span className="mx-2 text-sm font-medium">Users</span>
                                        </NavLink>
                                        <NavLink to='dashboard/contacts' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                            "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                            </svg>

                                            <span className="mx-2 text-sm font-medium">Orders / Contacts</span>
                                        </NavLink>
                                    </div>

                                    <div className="space-y-3 ">
                                        <label className="px-3 text-xs text-gray-500 uppercase">content</label>

                                        <NavLink to='/dashboard/addItems' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                            "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                            <MdAddChart className="text-xl"/>

                                            <span className="mx-2 text-sm font-medium">Add Item</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/items' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                            "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>

                                            <span className="mx-2 text-sm font-medium">Item List</span>
                                        </NavLink>


                                    </div>

                                    
                                </nav>
                            </div>
                        </aside>
                    </ul>
                </div>

                {/* dashboard for large device */}
                <div className="hidden md:block">
                    <Link to='/'><img className="w-16 mb-5" src="https://i.postimg.cc/GhDYmQG9/tanex-interenational.png" alt="" /></Link>
                    <aside className="flex min-h-screen flex-col w-64 px-5  overflow-y-auto bg-white shadow-lg">
                        <div className="flex flex-col justify-between flex-1 ">
                            <nav className="-mx-3 space-y-6 ">
                                <div className="space-y-3 ">
                                    <label className="px-3 text-xs text-gray-500 uppercase">analytics</label>

                                    <NavLink to='/dashboard/users' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                        "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                        </svg>

                                        <span className="mx-2 text-sm font-medium">Users</span>
                                    </NavLink>

                                    <NavLink to='/dashboard/contacts' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                        "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                        </svg>

                                        <span className="mx-2 text-sm font-medium">Orders / Contacts</span>
                                    </NavLink>
                                </div>

                                <div className="space-y-3 ">
                                    <label className="px-3 text-xs text-gray-500 uppercase">content</label>

                                    <NavLink to='/dashboard/addItem' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                        "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                        <MdAddChart className="text-xl"/>

                                        <span className="mx-2 text-sm font-medium">Add Item</span>
                                    </NavLink>
                                    <NavLink to='/dashboard/item' className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg bg-[#0066ff10] cursor-pointer" :
                                        "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#0066ff10] cursor-pointer"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>

                                        <span className="mx-2 text-sm font-medium">Item List</span>
                                    </NavLink>


                                </div>

                                
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;