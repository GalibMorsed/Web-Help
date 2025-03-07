import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

// Store API key in .env (DO NOT expose in frontend!)
const KEY_ID =
  "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";
// System message to define ChatGPT's behavior
const systemMessage = {
  role: "system",
  content: "Explain things like you're talking to a software professional.",
};

function AiPage() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = { message, direction: "outgoing", sender: "user" };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    const lastMessage = chatMessages[chatMessages.length - 1];
    const apiMessage = {
      role: lastMessage.sender === "ChatGPT" ? "assistant" : "user",
      content: lastMessage.message,
    };

    const apiRequestBody = {
      model: "gpt-4o", // Corrected model name
      messages: [systemMessage, apiMessage],
    };

    const maxRetries = 5;
    let retryCount = 0;
    let success = false;

    while (retryCount < maxRetries && !success) {
      try {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, retryCount))
        );
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${KEY_ID}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
          }
        );

        if (!response.ok) {
          if (response.status === 429) {
            retryCount++;
            continue;
          } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
        }

        const data = await response.json();
        if (data.choices?.length > 0) {
          setMessages([
            ...chatMessages,
            { message: data.choices[0].message.content, sender: "ChatGPT" },
          ]);
          success = true;
        } else {
          throw new Error("No valid response from ChatGPT.");
        }
      } catch (error) {
        console.error("Error processing message:", error);
        if (retryCount >= maxRetries) {
          break;
        }
      } finally {
        setIsTyping(false);
      }
    }

    if (!success) {
      console.error("Failed to process message after multiple retries.");
    }
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "600px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing..." />
                ) : null
              }
            >
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default AiPage;
