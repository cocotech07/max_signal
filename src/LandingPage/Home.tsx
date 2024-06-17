import React, {useState, useEffect} from "react";
import NotificationModal from "./NotificationModal";

const messages = [
    "Customer bought Dhaniel 1 hour ago",
    "Customer bought Ben 2 hours ago",
    "Customer bought Okon 30 minutes ago",
    "Customer bought Benevolent ;) 45 minutes ago",
];

const Home: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(messages[0]);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setMessageIndex(
                    (prevIndex) => (prevIndex + 1) % messages.length
                );
                setCurrentMessage(messages[messageIndex]);
                setVisible(true);
            }, 1000);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [messageIndex]);

    return (
        <div className="Home">
            <div>Landing Page </div>
            <NotificationModal message={currentMessage} visible={visible} />
        </div>
    );
};

export default Home;
