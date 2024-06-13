import {Outlet} from "react-router";
import {MdOutlineDashboard} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {LuUser2} from "react-icons/lu";
import {TiHomeOutline} from "react-icons/ti";

const User = () => {
    return (
        <>
            <div className="w-full h-max flex">
                <div className="w-[27%] phone:hidden h-screen bg-[#003049] border-r border-r-gray-600">
                    <div className="w-full h-20 flex items-center justify-center border-b border-b-gray-600">
                        <span className="w-max h-max p-2 bg-black text-white flex items-center justify-center text-2xl">
                            LOGO
                        </span>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] overflow-y-auto scrollbar-none scrollbar-thumb-[#003049] scrollbar-track-[#042836] scrollbar-thin ">
                        <div className="w-full h-max flex flex-col ">
                            <div className="w-full h-max flex flex-col gap-2 p-5 border-b border-b-gray-600">
                                <div className="w-full h-max rounded bg-gradient-to-r from-[#e52e71] to-[#ff8a00] p-3 flex flex-col gap-2">
                                    <div className="w-full h-max flex justify-between">
                                        <p className="text-2xl font-bold text-white">
                                            Account Balance
                                        </p>
                                        <button className="px-2 py-1 w-max h-max bg-gray-200 rounded font-bold text-[10px]">
                                            WALLET
                                        </button>
                                    </div>
                                    <div className="w-full h-max flex justify-between mt-4 font-semibold text-white">
                                        <p>Main Wallet</p>
                                        <p>$0.00</p>
                                    </div>
                                    <div className="w-full h-max flex justify-between font-semibold text-white">
                                        <p>Main Wallet</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>
                                <div className="w-full h-max flex justify-between gap-4">
                                    <button className="w-1/2 h-max py-3 bg-[#5364f1] rounded font-semibold text-white">
                                        Deposit
                                    </button>
                                    <button className="w-1/2 h-max py-3 bg-[#2a9d8f] rounded font-semibold text-white">
                                        Invest Now
                                    </button>
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-3 p-7 transition-all duration-500">
                                <NavLink
                                    to={"/user/dashboard"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>DASHBOARD</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/schemas"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>ALL SCHEMA</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/invest-logs"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>SCHEMA LOGS</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/transactions"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>ALL TRANSACTIONS</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/deposit"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>ADD MONEY</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/deposit/log"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>ADD MONEY LOG</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/wallet-exchange"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>WALLET EXCHANGE</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/send-money"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>SEND MONEY</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/send-money/log"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>SEND MONEY LOG</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/withdraw"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>WITHDRAW</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/withdraw/log"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>WITHDRAW LOG</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/ranking-badge"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>RANKING BADGE</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/settings"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>SETTINGS</p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"/user/support-ticket/index"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "hover:bg-gray-600 transition-all duration-500 rounded-full text-white"
                                            : "transition-all bg-[#535a94] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-10 rounded-full cursor-pointer flex items-center pl-4 gap-2 font-bold text-sm ">
                                        <span>
                                            <MdOutlineDashboard size={20} />
                                        </span>
                                        <p>SUPPORT TICKETS</p>
                                    </div>
                                </NavLink>
                                <div className="w-full h-10 rounded-full bg-[#f15b38] cursor-pointer flex items-center justify-center pl-4 gap-2 font-bold text-sm text-white">
                                    <span>
                                        <MdOutlineDashboard size={20} />
                                    </span>
                                    <p>LOGOUT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[73%] phone:w-full h-screen bg-[#042836] ">
                    <div className="w-full h-20 flex items-center justify-between bg-[#003049] border-b border-b-gray-600 px-5">
                        <div className="w-max h-max transition-all duration-500 hidden phone:flex items-center justify-center p-2 px-3 cursor-pointer hover:bg-[#e6306f] text-white rounded bg-[#535a94]">
                            <FaArrowRight />
                        </div>
                        <div className="w-max h-max transition-all duration-500 flex items-center phone:hidden justify-center p-2 px-3 cursor-pointer hover:bg-[#e6306f] text-white rounded bg-[#535a94]">
                            <FaArrowLeft />
                        </div>
                        <div className="w-max h-max flex gap-4 items-center">
                            <div className="w-max h-max hidden transition-all duration-500 phone:flex items-center justify-center p-2 px-3 cursor-pointer hover:bg-[#535a94] text-white rounded bg-[#e6306f]">
                                <TiHomeOutline />
                            </div>
                            <div className="w-max h-max transition-all duration-500 flex items-center justify-center p-2 px-3 cursor-pointer hover:bg-[#e6306f] text-white rounded bg-[#535a94]">
                                <LuUser2 />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] overflow-y-auto scrollbar-none scrollbar-thumb-[#003049] scrollbar-track-[#042836] scrollbar-thin ">
                        <div className="w-full h-max flex flex-col p-5 ">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
