// import {Modal} from "antd";
import {useState} from "react";
import {CiMenuKebab} from "react-icons/ci";
import {toast} from "react-toastify";

const Users = () => {
    const users: any = [1,2];
    const [showMenu, setShowMenu] = useState(Array(users.length).fill(false));
    console.log(setShowMenu);
    const loading = true;
    return (
        <>
            <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
                <div className="w-max h-10 flex items-center gap-4 justify-between bg-gray-300">
                    <p className="w-32 h-full flex justify-center items-center">
                        Name
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        User Name
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Email
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Status
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Approved
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Account Balance
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Date registered
                    </p>
                    <p className="w-32 h-full flex justify-center items-center">
                        Action
                    </p>
                </div>
                <div className="w-max h-max flex flex-col gap-2">
                    {users?.map((item: any, index: number) => (
                        <div
                            className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow"
                            key={index}
                        >
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.fullName}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.userName}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.email}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.status}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item.isApproved ? "True" : "False"}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                ${item?.balance}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm">
                                {item?.dateRegistered}
                            </p>
                            <p className="w-32 h-full flex justify-center items-center text-sm relative">
                                <CiMenuKebab
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => toast.info("Done did this")}
                                />
                                {showMenu[index] && (
                                    <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() =>
                                                toast.info("Done did this")
                                            }
                                        >
                                            Credit/Debit
                                        </div>
                                        {/* <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer" onClick={()=>setOpenSuspend(true)}>
                                            Suspend
                                        </div> */}
                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() =>
                                                toast.info("Done did this")
                                            }
                                        >
                                            {loading ? "Unsuspend" : "Suspend"}
                                        </div>

                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() =>
                                                toast.info("Done did this")
                                            }
                                        >
                                            Delete User
                                        </div>
                                        <div
                                            className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                            onClick={() =>
                                                toast.info("Done did this")
                                            }
                                        >
                                            Approve User
                                        </div>
                                    </div>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          
        </>
    );
};

export default Users;
