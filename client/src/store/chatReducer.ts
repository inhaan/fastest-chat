import shortUUID from "short-uuid";
import { IMember, IMessage } from "../type/chatType";

interface IChatState {
  myNickname: string | null;
  messages: IMessage[];
  members: IMember[];
}

interface IChatSetMyNicknameAction {
  type: "CHAT_SET_MY_NICKNAME";
  payload: string;
}

interface IChatInitMessagesAction {
  type: "CHAT_INIT_MESSAGES";
  payload: IMessage[];
}

interface IChatAddMessageAction {
  type: "CHAT_ADD_MESSAGE";
  payload: IMessage;
}

interface ICHatSetMembersAction {
  type: "CHAT_SET_MEMBERS";
  payload: IMember[];
}

interface IChatAddMemberAction {
  type: "CHAT_ADD_MEMBER";
  payload: IMember;
}

interface IChatJoinMemberAction {
  type: "CHAT_JOIN_MEMBER";
  payload: IMember;
}

interface IChatLeaveMemberAction {
  type: "CHAT_LEAVE_MEMBER";
  payload: IMember;
}

export type IChatAction =
  | IChatInitMessagesAction
  | IChatAddMessageAction
  | IChatAddMemberAction
  | IChatSetMyNicknameAction
  | ICHatSetMembersAction
  | IChatJoinMemberAction
  | IChatLeaveMemberAction;

export const initialChatState: IChatState = {
  myNickname: "",
  messages: [],
  members: [],
};

export const chatReducer = (
  state: IChatState,
  action: IChatAction
): IChatState => {
  switch (action.type) {
    case "CHAT_INIT_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "CHAT_ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "CHAT_SET_MEMBERS":
      return {
        ...state,
        members: action.payload,
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
    case "CHAT_JOIN_MEMBER":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            type: "join",
            id: shortUUID.generate(),
            ...action.payload,
            timestamp: Date.now(),
          },
        ],
      };
    case "CHAT_LEAVE_MEMBER":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            type: "leave",
            id: shortUUID.generate(),
            ...action.payload,
            timestamp: Date.now(),
          },
        ],
      };
    default:
      return state;
  }
};

export const createMessage = (
  message: Omit<IMessage, "id" | "timestamp" | "type">
): IMessage => ({
  type: "message",
  id: shortUUID.generate(),
  ...message,
  timestamp: Date.now(),
});
