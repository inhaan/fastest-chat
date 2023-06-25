import shortUUID from "short-uuid";
import { IMember, IMessage } from "../type/chatType";

interface IChatState {
  myNickname: string;
  messages: IMessage[];
  members: IMember[];
}

interface IChatSetMyNicknameAction {
  type: "CHAT_SET_MY_NICKNAME";
  payload: string;
}

interface IChatAddMessageAction {
  type: "CHAT_ADD_MESSAGE";
  payload: Omit<IMessage, "id" | "timestamp">;
}

interface IChatAddMemberAction {
  type: "CHAT_ADD_MEMBER";
  payload: IMember;
}

type IChatAction =
  | IChatAddMessageAction
  | IChatAddMemberAction
  | IChatSetMyNicknameAction;

export const initialChatState: IChatState = {
  myNickname: "inhan",
  messages: [
    {
      id: shortUUID.generate(),
      nickname: "inhan",
      content: "안녕하세요",
      timestamp: Date.now(),
    },
    {
      id: shortUUID.generate(),
      nickname: "ina",
      content: "반갑습니다",
      timestamp: Date.now(),
    },
  ],
  members: [{ nickname: "inhan" }, { nickname: "ina" }],
};

export const chatReducer = (
  state: IChatState,
  action: IChatAction
): IChatState => {
  switch (action.type) {
    case "CHAT_ADD_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: shortUUID.generate(),
            ...action.payload,
            timestamp: Date.now(),
          },
        ],
      };
    case "CHAT_ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case "CHAT_SET_MY_NICKNAME":
      return {
        ...state,
        myNickname: action.payload,
      };
    default:
      return state;
  }
};
