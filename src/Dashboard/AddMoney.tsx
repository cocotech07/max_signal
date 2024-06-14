import btcIcon from "../assets/btcicon.png";

const AddMoney = () => {
    return (
        <div className="w-full h-max flex flex-col gap-8 text-white mb-16">
            <div className="w-full h-max flex flex-col bg-[#041f2c] border border-gray-600 rounded">
                <div className="w-full h-16 flex items-center justify-between px-4 font-semibold text-lg border-b border-b-gray-600">
                    <p>Add Money</p>
                    <button className="w-max h-max px-4 py-2 bg-[#e73667] text-xs font-semibold rounded">
                        DEPOSIT HISTORY
                    </button>
                </div>
                <div className="w-full h-max p-5 flex flex-col gap-5">
                    <div className="w-full h-max flex  justify-between gap-5 phone:hidden">
                        <div className="w-1/2 h-max px-4 py-3  rounded flex gap-4 items-center border-2 border-[#ffc300] relative">
                            <div className="text-black bg-[#ffc300] font-semibold w-7 h-7 rounded-full flex items-center justify-center">
                                01
                            </div>
                            <div className="w-max h-max flex flex-col ">
                                <p className="wtxt-lg font-semibold">
                                    Deposit Amount
                                </p>
                                <p className="text-sm font-semibold">
                                    Enter your deposit details
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
                                    Success your deposit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex  justify-between gap-5">
                        <div className="w-1/2 h-max flex flex-col gap-2">
                            <p>Payment Method</p>
                            <div className="w-full h-max  rounded flex flex-col">
                                <select
                                    name=""
                                    id=""
                                    className="w-full h-14 border-2 border-gray-500 rounded bg-transparent"
                                >
                                    <option value="" className="text-black">
                                        --Select Gateway--
                                    </option>
                                    <option value="" className="text-black">
                                        ETH
                                    </option>
                                    <option value="" className="text-black">
                                        BTC
                                    </option>
                                </select>
                                <p className="text-xs text-[#e73667]">
                                    Charge 0
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 h-max flex flex-col gap-2">
                            <p>Enter Amount</p>
                            <div className="w-full h-max  rounded flex flex-col ">
                                <input
                                    type="text"
                                    className="w-full h-14 rounded border border-gray-500 bg-transparent outline-none pl-4"
                                />
                                <p className="text-xs text-[#e73667]">
                                    Minimum 1000 USD and Maximum 200000 USD
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col">
                        <div className="w-full h-max flex flex-col gap-5 mb-4">
                            <p>
                                Deposit dollars worth the equivalent of BTC to
                                the address
                                bc1qjx5r7hvk9nxd2mged6fmm5lg27zddmsl854wxk and
                                provide transaction hash as proof, please follow
                                these instructions:
                            </p>
                            <p>
                                Go to a cryptocurrency exchange or wallet that
                                supports BTC and USD deposits.
                            </p>
                            <p>
                                Send the equivalent amount of BTC to the address
                                bc1qjx5r7hvk9nxd2mged6fmm5lg27zddmsl854wxk. Make
                                sure you double-check the address to avoid any
                                mistakes.
                            </p>
                            <p>
                                Take note of the transaction hash or ID provided
                                by the exchange or wallet once the transaction
                                is confirmed. This is usually a long string of
                                characters that uniquely identifies your
                                transaction on the blockchain.
                            </p>
                            <p>
                                Submit the transaction hash along with your
                                deposit details as this will serve as proof of
                                your deposit.
                            </p>
                            <p>
                                Note that the processing time for your deposit
                                may vary depending on the blockchain network's
                                traffic and the exchange or wallet's processing
                                times.
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-5">
                            <div className="w-full h-max flex flex-col gap-1">
                                <p className=" font-semibold">
                                    Transaction Hash
                                </p>
                                <input
                                    type="text"
                                    className="w-full h-14 rounded border border-gray-500 bg-transparent outline-none pl-4"
                                />
                            </div>
                            <div className="w-full h-max flex flex-col gap-1">
                                <p className=" font-semibold">
                                    Additional Information
                                </p>
                                <textarea
                                    name=""
                                    id=""
                                    className="w-full min-h-32 rounded border border-gray-500 bg-transparent outline-none pl-4"
                                ></textarea>
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
                                Payment Method
                            </p>
                            <p className="w-[40%] h-max flex items-center text-sm">
                                <img src={btcIcon} alt="" className="w-10" />
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
                            PROCEED TO PAYMENT {">>"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMoney;
