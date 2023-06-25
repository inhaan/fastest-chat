import { useReducer } from "react";
import { chatReducer, initialChatState } from "../store/chatReducer";

export const useChatStore = () => {
  const [{ messages, members }, dispatch] = useReducer(
    chatReducer,
    initialChatState
  );
  return { messages, members, dispatch };
};
