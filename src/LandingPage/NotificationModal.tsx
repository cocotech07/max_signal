import React from "react";

interface NotificationModalProps {
    message: string;
    visible: boolean;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
    message,
    visible,
}) => {
    return (
        <div
            className={`fixed bottom-5 left-5 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="bg-white px-4 py-5 rounded-md w-max h-max shadow-2xl border border-gray-200">{message}</div>
        </div>
    );
};

export default NotificationModal;
