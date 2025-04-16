import { Link } from "react-router-dom";
import logo from '../assets/logo.JPG'
import { HomeIcon, LogOut, MessageSquare, Settings, User } from "lucide-react";
import { IoLogoWechat } from "react-icons/io5";
import { useAuthStore } from "../Store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 bg-linear-to-r  from-[#09122C] via-[#FF9D23] to-[#09122C] fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80 "
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <button className="btn btn-ghost text-xl">
                  <img src={logo} alt="" className='w-10 ' />
                  <h2 className='-ml-7 text-black font-bold'>C</h2>
                </button>
              </div>
              <h1 className="text-lg text-white font-bold">Connectopia</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/home"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
                <Link to={"/chats"} className={`btn btn-sm gap-2`}>
                <IoLogoWechat className="size-5" />
                  <span className="hidden sm:inline">Chats</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5 text-white" />
                  <span className="hidden sm:inline text-white">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;