

const WalletExchange = () => {
    return (
        <div className="w-full h-max flex flex-col gap-8 text-white mb-16">
            <div className="w-full h-max flex flex-col bg-[#041f2c] border border-gray-600 rounded">
                <div className="w-full h-16 flex items-center justify-between px-4 font-semibold text-lg border-b border-b-gray-600">
                    <p>Wallet Exchange</p>
                </div>
                <div className="w-full h-max p-5 flex flex-col gap-5">
                    <div className="w-full h-max flex  justify-between gap-5 phone:hidden">
                        <div className="w-1/2 h-max px-4 py-3  rounded flex gap-4 items-center border-2 border-[#ffc300] relative">
                            <div className="text-black bg-[#ffc300] font-semibold w-7 h-7 rounded-full flex items-center justify-center">
                                01
                            </div>
                            <div className="w-max h-max flex flex-col ">
                                <p className="wtxt-lg font-semibold">
                                    Wallet Details
                                </p>
                                <p className="text-sm font-semibold">
                                    Enter your wallet details
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 h-max px-4 py-3  rounded flex gap-4 items-center border border-[#ffc300] relative">
                            <div className="text-black bg-[#e73667] font-semibold w-7 h-7 rounded-full flex items-center justify-center">
                                02
                            </div>
                            <div className="w-max h-max flex flex-col ">
                                <p className="wtxt-lg font-semibold">Success</p>
                                <p className="text-sm font-semibold">
                                    Successfully exchange
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex phone:flex-col  justify-between gap-5">
                        <div className="w-1/3 phone:w-full h-max flex flex-col gap-2">
                            <p>From Wallet</p>
                            <div className="w-full h-max  rounded flex flex-col">
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-14 border-2 border-gray-500 rounded bg-transparent"
                                >
                                    <option value="" className="text-black">
                                        Main Wallet(0.00 USD)
                                    </option>
                                    <option value="" className="text-black">
                                        Main Wallet(0.00 USD)
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/3 phone:w-full h-max flex flex-col gap-2">
                            <p>Enter Amount</p>
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
                        <div className="w-1/3 phone:w-full h-max flex flex-col gap-2">
                            <p>To Wallet</p>
                            <div className="w-full h-max  rounded flex flex-col">
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-14 border-2 border-gray-500 rounded bg-transparent"
                                >
                                    <option value="" className="text-black">
                                        Main Wallet(0.00 USD)
                                    </option>
                                    <option value="" className="text-black">
                                        Main Wallet(0.00 USD)
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max border border-gray-600 rounded">
                        <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-600">
                            <p className="w-[60%] h-max flex items-center pl-5 font-semibold text-gray-300">
                                Amount
                            </p>
                            <p className="w-[40%] h-max flex items-center text-sm">
                                1000USD
                            </p>
                        </div>
                        <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-600">
                            <p className="w-[60%] h-max flex items-center pl-5 font-semibold text-gray-300">
                                Charge
                            </p>
                            <p className="w-[40%] h-max flex items-center text-sm">
                                0 USD
                            </p>
                        </div>
                        <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-600">
                            <p className="w-[60%] h-max flex items-center pl-5 font-semibold text-gray-300">
                                Total
                            </p>
                            <p className="w-[40%] h-max flex items-center text-sm">
                                1000USD
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-16 flex items-center">
                        <button className="w-max h-max px-5 py-3 bg-[#e73667] rounded-full text-sm font-semibold">
                            PROCEED TO EXCHANGE {">>"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletExchange;
