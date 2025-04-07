import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [isAdmin]= useAdmin()


    const navOptions = <>
        <NavLink to='/'  className={({ isActive }) => isActive ? "text-[#0057B7] cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto" : 
        "cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto"}><div>Home</div></NavLink>
        <NavLink to='/aboutUs'  className={({ isActive }) => isActive ? "text-[#0057B7] cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto" : 
        "cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto"}><div>About Us</div></NavLink>
        <NavLink to='/contactUs'  className={({ isActive }) => isActive ? "text-[#0057B7] cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto" : 
        "cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto"}><div>Contact Us</div></NavLink>
        {
            isAdmin? <NavLink to='/dashboard'  className={({ isActive }) => isActive ? "text-[#0057B7] cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto" : 
            "cursor-pointer roboto font-medium text-xs  lg:hover:border-b-2 hover:border-[#0057B7] duration-75 ease-in py-2 px-3 mx-3 uppercase font-roboto"}><div>Dashboard</div></NavLink>: ''
        }
     
    </>


    const handleLogOut = () => {
        logout()
            .then(
                navigate('/')
            )

    }
    return (
        <div className="w-full sticky top-0 bg-white px-4 z-30">
            <div className="navbar bg-white max-w-[1580px] lg:ml-32 flex justify-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='ml-3 lg:ml-12 flex-1'>

                        <Link to='/'><img className="w-20" src="https://i.postimg.cc/GhDYmQG9/tanex-interenational.png" alt="" /></Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='menu-horizontal px-1'>


                        {
                            user ?
                                <button onClick={handleLogOut} className=" mr-5 relative cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#0057B7dc] group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0057B7]  group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0057B7d5] group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Logout</span>
                                </button>
                                :
                                <Link to='/login' className="relative cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#0057B7dc] group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0057B7]  group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0057B7d5] group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Log in</span>
                                </Link>
                        }
                    </ul>

                    {
                        user &&
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div className='w-10 rounded-full my-anchor-element ' title={user?.email}>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                                    />
                                </div>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;