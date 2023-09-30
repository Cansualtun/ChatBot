import axios from "axios";
import { useState } from "react";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import ChatSection from "../../components/ChatSection";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      setMessages((prevMessages: any) => [
        ...prevMessages,
        { role: "user", content: prompt },
      ]);

      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: result.data.choices[0].message.content },
      ]);

      setPrompt("");
    } catch (error) {
      console.error("Error occurred while fetching data from OpenAI:", error);
    } finally {
      setLoading(false); // API isteği tamamlandığında loading'i false yap
    }
  };
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="flex flex-col h-full bg-primary-background divClass">
        <Button
          variant="borderless"
          className="border-none flex flex-row items-center gap-4 bg-primary-background"
          onClick={() => navigate("/")}
        >
          <AiOutlineArrowLeft style={{ width: "20px", height: "60px" }} />
          <p>Back</p>
        </Button>
        <div className="flex flex-col mt-52 mb-10 items-center justify-center gap-2">
          <h1 className="font-bold text-5xl flex flex-row gap-4">
            <h1 className="text-primary-blue">AI</h1> Chatbot
          </h1>
          <p className="items-center">
            We’ve trained a model called
            <br /> ChatGPT which interacts in a <br /> conversational way.
          </p>
        </div>
        <div className="h-fit">
          <img src="/assets/Images/hero_image.svg" />
        </div>
      </div>
      <ChatSection
        messages={messages}
        prompt={prompt}
        setPrompt={setPrompt}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default Chat;
