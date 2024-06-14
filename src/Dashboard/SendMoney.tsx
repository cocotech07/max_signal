import {NavLink} from "react-router-dom";
import error from "../assets/403.svg";

const SendMoney = () => {
    return (
        <div className="w-full h-screen bg-[#032836] z-[1002] fixed top-0 left-0 flex flex-col gap-10 items-center justify-center">
            <img src={error} alt="" className="w-60" />
            <p className="text-4xl text-white">403</p>
            <div className="w-max h-max flex flex-col gap-4 items-center text-white">
                <p className="text-2xl">Send Money Disable Now</p>
                <NavLink to="/user/dashboard">
                    <button className="w-max h-max px-6 text-sm py-2 bg-[#e73667] rounded-full text-white">
                        BACK TO HOME
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default SendMoney;
