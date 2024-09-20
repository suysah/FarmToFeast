import React, { useState } from "react";
import styles from "./Chat.module.css";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      username: "John Doe",
      lastMessage: "I have a question about the product...",
      time: "10:30 AM",
    },
    {
      id: 2,
      username: "Jane Smith",
      lastMessage: "Is this available in bulk?",
      time: "09:45 AM",
    },
    {
      id: 3,
      username: "Robert Lee",
      lastMessage: "Can you offer a discount?",
      time: "Yesterday",
    },
    {
      id: 4,
      username: "Alice Cooper",
      lastMessage: "When can I expect delivery?",
      time: "Yesterday",
    },
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <main className={styles.maainContainer}>
      <div className={styles.seller_chat_container}>
        {!selectedChat ? (
          <ChatList chats={chats} onChatClick={handleChatClick} />
        ) : (
          <div className={styles.chatBox}>
            <button
              className={styles.back_button}
              onClick={() => setSelectedChat(null)}
            >
              Back to chat list
            </button>
            <h2>Chat with {selectedChat.username}</h2>
            <ChatBox />
          </div>
        )}
      </div>
    </main>
  );
};

export default Chat;

// =========================================================================================

// import React, { useEffect } from "react";
// import { useHistory, useOutletContext } from "react-router-dom";
// import { ChatEngine } from "react-chat-engine";

// const Chat = () => {
//   const userInfo = useOutletContext();

//   useEffect(() => {
//     if (!userInfo) return;

//     axios.get("https://api.chatEngine.io/user");
//   }, [userInfo]);

//   return (
//     <div className="chats-page">
//       <div className="nav-bar">
//         <div className="logo-tab">Chats</div>
//         <div className="logout-tab">Logout</div>
//         <ChatEngine
//           height="calc(100vh - 66px)"
//           projectId="
// 857e94d4-22c0-4d6a-bfd9-d8004bed818f"
//           userName="."
//           userSecret="."
//         />
//       </div>
//     </div>
//   );
// };

// export default Chat;
