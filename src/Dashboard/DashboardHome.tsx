import {AiOutlineBank} from "react-icons/ai";
import firstprize from "../assets/firstPrizeicon.svg";
import {LuClipboardList} from "react-icons/lu";

const DashboardHome = () => {
    return (
        <div className="w-full h-max flex flex-col gap-8 text-[rgba(255,255,255,0.8)] mb-16">
            <div className="w-full h-max phone:flex phone:justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-[#ffc300] bg-[#073456] flex items-center justify-center flex-col relative">
                    <span className="w-12 h-12 rounded-full border-4 border-[#ffc300] flex items-center justify-center absolute top-0 right-0 bg-[#5364f1]">
                        <img
                            src={firstprize}
                            alt="firstprize"
                            className="w-7 h-7"
                        />
                    </span>
                    <p className="text-lg text-white">Level 1</p>
                    <p className="text-[rgba(255,255,255,0.6)]">
                        Max-Signal Member
                    </p>
                </div>
            </div>
            <div className="w-full h-max flex phone:flex-col justify-between gap-5">
                <div className="w-1/4  phone:w-full h-28 overflow-hidden relative border-2 border-[#ffc30080] bg-[#535a94] rounded-md homecard flex gap-4 items-center pl-4 hover:-translate-y-1 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#535a94] ">
                        <AiOutlineBank size={27} />
                    </div>
                    <div className="w-max h-max flex flex-col ">
                        <p className="text-2xl font-semibold text-white">
                            $0.00
                        </p>
                        <p className=" font-semibold text-gray-100">
                            Profit Wallet
                        </p>
                    </div>
                </div>
                <div className="w-1/4 phone:w-full h-28 overflow-hidden relative border-2 border-[#ffc30080] bg-[#535a94] rounded-md homecard flex gap-4 items-center pl-4 hover:-translate-y-1 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#535a94]">
                        <AiOutlineBank size={27} />
                    </div>
                    <div className="w-max h-max flex flex-col ">
                        <p className="text-2xl font-semibold text-white">
                            $0.00
                        </p>
                        <p className=" font-semibold text-gray-100">
                            Total Deposit
                        </p>
                    </div>
                </div>
                <div className="w-1/4 phone:w-full h-28 overflow-hidden relative border-2 border-[#ffc30080] bg-[#535a94] rounded-md homecard flex gap-4 items-center pl-4 hover:-translate-y-1 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#535a94]">
                        <AiOutlineBank size={27} />
                    </div>
                    <div className="w-max h-max flex flex-col ">
                        <p className="text-2xl font-semibold text-white">
                            $0.00
                        </p>
                        <p className=" font-semibold text-gray-100">
                            Total Profit
                        </p>
                    </div>
                </div>
                <div className="w-1/4 phone:w-full h-28 overflow-hidden relative border-2 border-[#ffc30080] bg-[#535a94] rounded-md homecard flex gap-4 items-center pl-4 hover:-translate-y-1 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#535a94]">
                        <AiOutlineBank size={27} />
                    </div>
                    <div className="w-max h-max flex flex-col ">
                        <p className="text-2xl font-semibold text-white">
                            $0.00
                        </p>
                        <p className=" font-semibold text-gray-100">
                            Total Withdrawal
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-max flex flex-col border border-gray-500 rounded bg-[#041f2c]">
                <p className="text-lg text-gray-200 px-4 py-3 border-b border-b-gray-500 font-semibold">
                    Recent Transactions
                </p>
                <div className="w-full h-max overflow-x-auto scrollbar-thumb-[#341414] scrollbar-track-[#b76161] scrollbar-thin phone:scrollbar-none px-4 py-4">
                    <div className="w-max h-max flex flex-col rounded">
                        <div className="w-full h-12 bg-[#1a455c] flex items-center rounded rounded-b-none px-2 border border-gray-600 text-xs font-bold">
                            <div className="w-80 h-max">DESCRIPTION</div>
                            <div className="w-52 h-max">TRANSACTIONS ID</div>
                            <div className="w-56 h-max">TYPE</div>
                            <div className="w-40 h-max">AMOUNT</div>
                            <div className="w-20 h-max">FEE</div>
                            <div className="w-28 h-max">STATUS</div>
                            <div className="w-40 h-max">GATEWAY</div>
                        </div>
                        <div className="w-full h-max flex flex-col rounded-b border-b border-x border-x-gray-600 border-b-gray-600">
                            <>
                                <div className="w-full h-20 bg-[#003049] hover:bg-[#1c3247] flex items-center rounded-b text-sm text-white font-bold px-2 ">
                                    <div className="w-80 h-max flex gap-4">
                                        <div className="w-11 h-11 rounded-full bg-[#3a4d7e] flex items-center justify-center text-[#fff]">
                                            <LuClipboardList size={18} />
                                        </div>
                                        <div className="w-max h-max flex flex-col gap-1">
                                            <p className="text-base font-bold text-white">
                                                Deposit With BTC
                                            </p>
                                            <p className=" font-semibold text-gray-400 text-xs">
                                                Jun 13 2024 10:06
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-52 h-max">
                                        TRXJZUVWBXW62
                                    </div>
                                    <div className="w-56 h-max">
                                        <p className="w-max h-max px-4 py-[2px] bg-[#e73667] rounded-full text-xs">
                                            Manual Deposit
                                        </p>
                                    </div>
                                    <div className="w-40 h-max text-[rgb(42,157,143)]">
                                        +2000.00 USD
                                    </div>
                                    <div className="w-20 h-max">0 USD</div>
                                    <div className="w-28 h-max">
                                        {" "}
                                        <p className="w-max h-max px-3 py-[2px] bg-[#ffc300] text-black rounded-full text-xs">
                                            Pending
                                        </p>
                                    </div>
                                    <div className="w-40 h-max">BTC</div>
                                </div>
                                <div className="w-full h-20 bg-[#003049] hover:bg-[#1c3247] flex items-center rounded-b text-sm text-white font-bold px-2 ">
                                    <div className="w-80 h-max flex gap-4">
                                        <div className="w-11 h-11 rounded-full bg-[#3a4d7e] flex items-center justify-center text-[#fff]">
                                            <LuClipboardList size={18} />
                                        </div>
                                        <div className="w-max h-max flex flex-col gap-1">
                                            <p className="text-base font-bold text-white">
                                                Deposit With BTC
                                            </p>
                                            <p className=" font-semibold text-gray-400 text-xs">
                                                Jun 13 2024 10:06
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-52 h-max">
                                        TRXJZUVWBXW62
                                    </div>
                                    <div className="w-56 h-max">
                                        <p className="w-max h-max px-4 py-[2px] bg-[#e73667] rounded-full text-xs">
                                            Manual Deposit
                                        </p>
                                    </div>
                                    <div className="w-40 h-max text-[rgb(42,157,143)]">
                                        +2000.00 USD
                                    </div>
                                    <div className="w-20 h-max">0 USD</div>
                                    <div className="w-28 h-max">
                                        {" "}
                                        <p className="w-max h-max px-3 py-[2px] bg-[#ffc300] text-black rounded-full text-xs">
                                            Pending
                                        </p>
                                    </div>
                                    <div className="w-40 h-max">BTC</div>
                                </div>
                                <div className="w-full h-20 bg-[#003049] hover:bg-[#1c3247] flex items-center rounded-b text-sm text-white font-bold px-2 ">
                                    <div className="w-80 h-max flex gap-4">
                                        <div className="w-11 h-11 rounded-full bg-[#3a4d7e] flex items-center justify-center text-[#fff]">
                                            <LuClipboardList size={18} />
                                        </div>
                                        <div className="w-max h-max flex flex-col gap-1">
                                            <p className="text-base font-bold text-white">
                                                Deposit With BTC
                                            </p>
                                            <p className=" font-semibold text-gray-400 text-xs">
                                                Jun 13 2024 10:06
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-52 h-max">
                                        TRXJZUVWBXW62
                                    </div>
                                    <div className="w-56 h-max">
                                        <p className="w-max h-max px-4 py-[2px] bg-[#e73667] rounded-full text-xs">
                                            Manual Deposit
                                        </p>
                                    </div>
                                    <div className="w-40 h-max text-[rgb(42,157,143)]">
                                        +2000.00 USD
                                    </div>
                                    <div className="w-20 h-max">0 USD</div>
                                    <div className="w-28 h-max">
                                        {" "}
                                        <p className="w-max h-max px-3 py-[2px] bg-[#ffc300] text-black rounded-full text-xs">
                                            Pending
                                        </p>
                                    </div>
                                    <div className="w-40 h-max">BTC</div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
