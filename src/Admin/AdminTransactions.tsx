import {BsEye} from "react-icons/bs";
import {CiMenuKebab} from "react-icons/ci";
import {Modal} from "antd";
import {toast} from "react-toastify";
import {useState} from "react";

const AdminTransactions = () => {
    const data: any = [1, 2, 3, 4];
    const [showMenu, setShowMenu] = useState(Array(data.length).fill(false));
    console.log(setShowMenu);
    const loading = true;
    return (
        <>
            <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
                {/* <div className="w-max h-10 flex items-center gap-4 justify-between bg-white">
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Reference
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Mode
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Amount
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Status
                    </div>
                    <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                        Date
                    </div>
                    <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                        Action
                    </div>
                    <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                        Reciept
                    </div>
                </div>
                <div className="w-max h-max flex flex-col gap-2">
                    <div className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow">
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Reference
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Mode
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Amount
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            <p className="w-max h-max px-3 py-1 rounded-full bg-yellow-600 text-white">
                                Pending
                            </p>
                        </div>
                        <div className="w-[10rem] h-full flex items-center text-xs text-black font-medium">
                            Date
                        </div>

                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium relative">
                            <CiMenuKebab
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setShow(!show)}
                            />
                            {show && (
                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Confirm
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Reject
                                    </div>
                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                        Delete
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                            <BsEye className="w-5 h-5 cursor-pointer" />
                        </div>
                    </div>
                </div> */}
                {data?.length > 0 ? (
                    <>
                        <div className="w-full h-max border border-gray-200 bg-white rounded overflow-x-auto">
                            <div className="w-max h-10 border-t border-t-gray-300 pl-6 flex gap-4">
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Reference
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Mode
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    User
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Amount
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Status
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Date
                                </div>
                                <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                                    Action
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Receipt
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                {data.map((item: any, index: number) => (
                                    <div
                                        className="w-max h-10 phone:h-20 border-t border-t-gray-300 pl-6 flex gap-4"
                                        key={index}
                                    >
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            #
                                            {item?._id
                                                ?.slice(-10)
                                                .toUpperCase()}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.type}/{item?.mode}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.fullName}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            ${item?.amount}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] ">
                                            <p
                                                className={`w-max h-max px-3 py-1 phone:py-1 text-white rounded-full flex items-center justify-center ${
                                                    item?.status === "Confirmed"
                                                        ? "bg-green-400"
                                                        : item?.status ===
                                                          "Pending"
                                                        ? "bg-yellow-400"
                                                        : item?.status ===
                                                          "Failed"
                                                        ? "bg-red-400"
                                                        : ""
                                                }`}
                                            >
                                                {item?.status}
                                            </p>
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.date}
                                        </div>
                                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium relative">
                                            <CiMenuKebab
                                                className="w-6 h-6 cursor-pointer"
                                                onClick={() =>
                                                    toast.info("Done did this")
                                                }
                                            />
                                            {showMenu[index] && (
                                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                                    <div
                                                        className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                                        onClick={() =>
                                                            toast.info(
                                                                "Done did this"
                                                            )
                                                        }
                                                    >
                                                        Confirm
                                                    </div>
                                                    <div
                                                        className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                                        onClick={() =>
                                                            toast.info(
                                                                "Done did this"
                                                            )
                                                        }
                                                    >
                                                        Decline
                                                    </div>
                                                    {/* <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                                        Reject
                                                    </div>
                                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                                        Delete
                                                    </div> */}
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            <BsEye
                                                className="w-5 h-5 cursor-pointer"
                                                onClick={() =>
                                                    toast.info("Done did this")
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] rounded">
                            <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                                <p className="text-[#cd9f0c]">
                                    No Transaction Recorded Yet
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Modal
                open={false}
                // onCancel={() => setOpenConfirm(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-2xl font-semibold phone:text-xl">
                        Confirm Payment
                    </p>
                    <p>Are you sure you want to confirm this payment?</p>
                    <div className="w-max h-max flex gap-6">
                        <button
                            className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={() => toast.info("Done did this")}
                            disabled
                        >
                            {loading ? "LOADING..." : "CONFIRM"}
                        </button>
                        <button
                            className="w-max h-max px-6 py-2 bg-[#e14954] text-white rounded text-sm font-semibold"
                            onClick={() => toast.info("Done did this")}
                            disabled={loading}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AdminTransactions;
