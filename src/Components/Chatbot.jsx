import React from "react";
import Widget from "rasa-webchat";
import chatLauncher from "../assets/images/chat.svg";
import styles from "../assets/css/Chatbot.module.css";

const Chatbot = () => {
  const onChatClose = () => {
    sessionStorage.clear();
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      try {
        document.querySelector(".rw-send").click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.chatBot} onKeyDown={handleKeyDown}>
      <Widget
        initPayload="greet"
        socketUrl="http://localhost:5005"
        socketPath="/socket.io/"
        title="Dell Support Bot"
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
