import {LuClipboardList} from "react-icons/lu";

const SendMoneyLog = () => {
    const testData = [1, 2, 3];
    return (
        <div className="w-full h-max flex flex-col border text-white border-gray-500 rounded bg-[#041f2c]">
            <p className="text-lg text-gray-200 px-4 py-3 border-b border-b-gray-500 font-semibold">
                ALL Send Money Log
            </p>
            <div className="w-full h-max overflow-x-auto scrollbar-thumb-[#341414] scrollbar-track-[#b76161] scrollbar-thin phone:scrollbar-none px-4 py-4">
                <div className="w-max h-max flex flex-col rounded">
                    <div className="w-[100%] h-20 flex justify-between">
                        <div className="w-max h-max flex items-center gap-1 font-semibold text-sm py-2 px-4">
                            <p>Show</p>
                            <select
                                name=""
                                id=""
                                className="w-16 rounded h-10 outline-none bg-none text-black"
                            >
                                <option value="10">10</option>
                                <option value="10">20</option>
                                <option value="10">30</option>
                            </select>
                            <p>Entries</p>
                        </div>
                        <div className="w-max h-max flex items-center gap-1 font-semibold text-sm py-2 px-4">
                            <p>Search</p>
                            <input
                                type="search"
                                className="w-32 h-7 text-xs pl-2 rounded outline-none bg-inherit border border-gray-600"
                            />
                        </div>
                    </div>
                    <div className="w-full h-12 bg-[#1a455c] flex items-center rounded rounded-b-none px-2 border border-gray-600 text-xs font-bold">
                        <div className="w-80 h-max">DESCRIPTION</div>
                        <div className="w-52 h-max">TRANSACTIONS ID</div>
                        <div className="w-40 h-max">AMOUNT</div>
                        <div className="w-20 h-max">FEE</div>
                        <div className="w-28 h-max">STATUS</div>
                        <div className="w-40 h-max">METHOD</div>
                    </div>
                    <div className="w-full h-max flex flex-col rounded-b border-b border-x border-x-gray-600 border-b-gray-600">
                        {testData.length < 0 ? (
                            <div className="w-full h-20 flex items-center justify-center">
                                <p>No Send Money Yet</p>
                            </div>
                        ) : (
                            testData.map((index) => (
                                <>
                                    <div
                                        className="w-full h-20 bg-[#003049] hover:bg-[#1c3247] flex items-center rounded-b text-sm text-white font-bold px-2 "
                                        key={index}
                                    >
                                        <div className="w-80 h-max flex gap-4">
                                            <div className="w-11 h-11 rounded-full bg-[#3a4d7e] flex items-center justify-center text-[#fff]">
                                                <LuClipboardList size={18} />
                                            </div>
                                            <div className="w-max h-max flex flex-col gap-1">
                                                <p className="text-base font-bold text-white">
                                                    Send BTC
                                                </p>
                                                <p className=" font-semibold text-gray-400 text-xs">
                                                    Jun 13 2024 10:06
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-52 h-max">
                                            TRXJZUVWBXW62
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
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoneyLog;
