import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.JPG'

const Navbar = () => {

    const link = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'}>Add Friend</NavLink>
    </>
    return (
        <div className="navbar bg-linear-to-r  from-[#09122C] via-[#FF9D23] to-[#09122C] text-neutral-content py-2">
            <button className="btn btn-ghost text-xl">
                <img src={logo} alt="" className='w-10 ' />
                <h2 className='-ml-7 text-black font-bold'>C</h2>
            </button>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 font-bold text-black">
                        {link}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-3 font-bold text-lg text-black">
                    {link}
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <button className="btn btn-ghost btn-circle mr-5">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                <Link to="/login" className="btn">Sign In</Link>
            </div>
        </div>

    )
}
export default Navbar