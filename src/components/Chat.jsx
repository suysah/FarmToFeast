import React, { useState } from "react";
import styles from "../components/Chat.module.css";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, username: "John Doe", lastMessage: "I have a question about the product...", time: "10:30 AM" },
    { id: 2, username: "Jane Smith", lastMessage: "Is this available in bulk?", time: "09:45 AM" },
    { id: 3, username: "Robert Lee", lastMessage: "Can you offer a discount?", time: "Yesterday" },
    { id: 4, username: "Alice Cooper", lastMessage: "When can I expect delivery?", time: "Yesterday" },
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
          <button className={styles.back_button} onClick={() => setSelectedChat(null)}>
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
