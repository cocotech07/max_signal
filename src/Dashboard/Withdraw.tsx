const Withdraw = () => {
    return (
        <div className="w-full h-max flex flex-col gap-8 text-white mb-16">
            <div className="w-full h-max flex flex-col bg-[#041f2c] border border-gray-600 rounded">
                <div className="w-full h-16 flex items-center justify-between px-4 font-semibold text-lg border-b border-b-gray-600">
                    <p>Withdraw Money</p>
                    <button className="w-max h-max px-4 py-2 bg-[#e73667] text-xs font-semibold rounded">
                        Withdraw Account
                    </button>
                </div>
                <div className="w-full h-max p-5 flex flex-col gap-5">
                    <div className="w-full h-max flex phone:flex-col  justify-between gap-5">
                        <div className="w-1/3 phone:w-full h-max flex flex-col gap-2">
                            <p>Withdraw Account</p>
                            <div className="w-full h-max  rounded flex flex-col">
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-14 border-2 border-gray-500 rounded bg-transparent"
                                >
                                    <option value="" className="text-black">
                                        Mobile Money USD
                                    </option>
                                    <option value="" className="text-black">
                                        Mobile Money USD
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/3 phone:w-full h-max flex flex-col gap-2">
                            <p>Amount</p>
                            <div className="w-full h-max  rounded flex">
                                <input
                                    type="text"
                                    className="w-[60%] h-14 rounded-l border border-gray-500 bg-transparent outline-none pl-4"
                                />
                                <div className="w-[40%] h-14 rounded-r border border-gray-500 bg-transparent outline-none border-l-0 flex items-center justify-center">
                                    USD
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max border border-gray-600 rounded">
                        <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-600">
                            <p className="w-[60%] h-max flex items-center pl-5 font-semibold text-gray-300">
                                Withdraw Amount
                            </p>
                            <p className="w-[40%] h-max flex items-center text-sm">
                                1000USD
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-16 flex items-center">
                        <button className="w-max h-max px-5 py-3 bg-[#e73667] rounded-full text-sm font-semibold">
                            WITHDRAW MONEY {">>"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
