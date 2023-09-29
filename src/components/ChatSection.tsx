import React from "react";
import { CiUser } from "react-icons/ci";
import { AiFillSmile } from "react-icons/ai";
import CInput from "./UI/Input";
import { ChatSectionProps } from "../types/chatTypes";

const ChatSection: React.FC<ChatSectionProps> = ({
  messages,
  prompt,
  setPrompt,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="flex flex-col h-screen flex-grow">
      <a href="/">
        <img
          className="p-4"
          src="/assets/logos/logo.svg"
          alt="Logo"
          style={{ width: "166px" }}
        />
      </a>
      <div className="flex flex-col-reverse overflow-y-auto flex-grow">
        <div className="p-4 flex items-center justify-center flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded-md p-2 mb-2 flex-row gap-4 flex items-center ${
                message.role === "user" ? "bg-[#00000]" : "bg-[#1A1A1A]"
              }`}
              style={{ maxWidth: "576px" }}
            >
              <strong>
                {message.role === "user" ? (
                  <CiUser size={"50px"} color="#ff7f00" />
                ) : (
                  <AiFillSmile size={"50px"} color="#B6FBFF" />
                )}
              </strong>
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-10 w-full">
        <CInput
          placeholder="Type something..."
          value={prompt}
          onChange={setPrompt}
          onSubmit={handleSubmit}
          disabled={loading}
          className="max-w-[576px]"
        />
      </div>
    </div>
  );
};

export default ChatSection;
