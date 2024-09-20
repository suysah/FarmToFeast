import React from "react";
import styles from  "./ChatList.module.css";

const ChatList = ({ chats = [], onChatClick }) => {
  return (
    <div className={styles.chat_list_container}>
      {chats.length > 0 ? (
        chats.map((chat) => (
          <div key={chat.id} className={styles.chat_item} onClick={() => onChatClick(chat)}>
            <div className={styles.chat_info}>
              <div className={styles.chat_username}>{chat.username}</div>
              <div className={styles.chat_last_message}>{chat.lastMessage}</div>
            </div>
            <div className={styles.chat_time}>{chat.time}</div>
          </div>
        ))
      ) : (
        <div>No chats available</div>
      )}
    </div>
  );
};

export default ChatList;
