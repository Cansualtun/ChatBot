export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatSectionProps {
  messages: Message[];
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  loading: boolean;
}
