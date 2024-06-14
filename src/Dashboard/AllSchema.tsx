import plan1 from "../assets/plan1.png";

const AllSchema = () => {
    return (
        <div className="w-full h-max flex flex-col gap-8 text-[rgba(255,255,255,0.8)] mb-16">
            <div className="w-full h-max flex flex-col bg-[#041f2c] border border-gray-600 rounded">
                <div className="w-full h-16 phone:h-max phone:py-4 flex phone:flex-col phone:gap-4 phone:items-start items-center justify-between px-4 font-semibold text-lg border-b border-b-gray-600">
                    <p>All The Schemas</p>
                    <p className="phone:text-xs">
                        Note: Numbers of Period means number of days and 1
                        period= 1 day
                    </p>
                </div>
                <div className="w-full h-max p-5 flex phone:flex-col gap-5 phone:gap-7">
                    <div className="w-1/4 phone:w-full rounded-md border-2 border-[#e7366780] py-2 px-4 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-500 bg-[#112a37]">
                        <div className="w-full h-max flex flex-col gap-1">
                            <div className="w-full h-max flex justify-end">
                                <div className="w-max h-max px-3 py-1 bg-gradient-to-r from-[#6549d5] to-[#e33fa1] font-bold text-xs rounded-md">
                                    STARTER PLAN
                                </div>
                            </div>
                            <div className="w-full h-max">
                                <img src={plan1} alt="" className="w-12" />
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className="text-2xl font-semibold">
                                Starter Plan
                            </p>
                            <p className="text-[rgba(255,195,0,0.8)]">
                                Daily $429
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-5">
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Investment
                                <span className="w-max h-max px-2 py-1 bg-[#206f6c] rounded-md">
                                    $1000
                                </span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Capital Back
                                <span className="">No</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Return Type
                                <span className="">Period</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Number of Period
                                <span className="">7 Times</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Profit Withdraw
                                <span className="">Anytime</span>
                            </p>
                            <p className="font-semibold w-full h-max flex justify-between items-center text-[rgba(255,195,0,0.8)] text-xs">
                                * Saturdays are Holidays
                            </p>
                        </div>
                        <div className="w-full h-14 flex items-center justify-center mb-6">
                            <button className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] text-xs font-semibold w-full h-10 rounded-full ">
                                INVEST NOW
                            </button>
                        </div>
                    </div>
                    <div className="w-1/4 phone:w-full rounded-md border-2 border-[#e7366780] py-2 px-4 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-500 bg-[#112a37]">
                        <div className="w-full h-max flex flex-col gap-1">
                            <div className="w-full h-max flex justify-end">
                                <div className="w-max h-max px-3 py-1 bg-gradient-to-r from-[#6549d5] to-[#e33fa1] font-bold text-xs rounded-md">
                                    BEST PLAN
                                </div>
                            </div>
                            <div className="w-full h-max">
                                <img src={plan1} alt="" className="w-12" />
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className="text-2xl font-semibold">
                                Standard Plan
                            </p>
                            <p className="text-[rgba(255,195,0,0.8)]">
                                Daily $828
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-5">
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Investment
                                <span className="w-max h-max px-2 py-1 bg-[#206f6c] rounded-md">
                                    $2000-$10000
                                </span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Capital Back
                                <span className="">No</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Return Type
                                <span className="">Period</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Number of Period
                                <span className="">7 Times</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Profit Withdraw
                                <span className="">Anytime</span>
                            </p>
                            <p className="font-semibold w-full h-max flex justify-between items-center text-[rgba(255,195,0,0.8)] text-xs">
                                * Saturdays are Holidays
                            </p>
                        </div>
                        <div className="w-full h-14 flex items-center justify-center mb-6">
                            <button className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] text-xs font-semibold w-full h-10 rounded-full ">
                                INVEST NOW
                            </button>
                        </div>
                    </div>
                    <div className="w-1/4 phone:w-full rounded-md border-2 border-[#e7366780] py-2 px-4 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-500 bg-[#112a37]">
                        <div className="w-full h-max flex flex-col gap-1">
                            <div className="w-full h-max flex justify-end">
                                <div className="w-max h-max px-3 py-1 bg-gradient-to-r from-[#6549d5] to-[#e33fa1] font-bold text-xs rounded-md">
                                    ULTIMATE PLAN
                                </div>
                            </div>
                            <div className="w-full h-max">
                                <img src={plan1} alt="" className="w-12" />
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className="text-2xl font-semibold">
                                Advance Plan
                            </p>
                            <p className="text-[rgba(255,195,0,0.8)]">
                                Daily $2145
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-5">
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Investment
                                <span className="w-max h-max px-2 py-1 bg-[#206f6c] rounded-md">
                                    $10000-$200000
                                </span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Capital Back
                                <span className="">No</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Return Type
                                <span className="">Period</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Number of Period
                                <span className="">7 Times</span>
                            </p>
                            <p className="font-semibold text-sm w-full h-max flex justify-between items-center">
                                Profit Withdraw
                                <span className="">Anytime</span>
                            </p>
                            <p className="font-semibold w-full h-max flex justify-between items-center text-[rgba(255,195,0,0.8)] text-xs">
                                * Saturdays are Holidays
                            </p>
                        </div>
                        <div className="w-full h-14 flex items-center justify-center mb-6">
                            <button className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] text-xs font-semibold w-full h-10 rounded-full ">
                                INVEST NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSchema;
