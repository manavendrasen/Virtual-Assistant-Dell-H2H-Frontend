import React from "react";
import Widget from "rasa-webchat";
import chatLauncher from "../assets/images/chat.svg";
import styles from "../assets/css/Chatbot.module.css";

const Chatbot = () => {
  const onChatClose = () => {
    sessionStorage.clear();
  };
  return (
    <div className={styles.chatBot}>
      <Widget
        initPayload="greet"
        socketUrl="http://localhost:5005"
        socketPath="/socket.io/"
        title="Dell Support Bot"
        subtitle="Say Hi to get started!"
        openLauncherImage={chatLauncher}
        inputTextFieldHint="How can I help you?"
        params={{
          images: {
            dims: {
              width: 300,
              height: 200,
            },
          },
          storage: "session",
        }}
        // embedded="true"
        showFullScreenButton
        onSocketEvent={{
          bot_uttered: () => console.log("the bot said something"),
          connect: () => console.log("connection established"),
          disconnect: () => onChatClose(),
        }}
        onWidgetEvent={{
          onChatClose: () => onChatClose(),
        }}
      />
    </div>
  );
};

export default Chatbot;
