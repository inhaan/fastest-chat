import { useReducer, useLayoutEffect, useCallback } from "react";
import {
  IChatAction,
  chatReducer,
  initialChatState,
} from "../store/chatReducer";
import { chatDB } from "../store/chatDB";

export const useChatStore = (roomId?: string) => {
  const [{ messages, members, myNickname }, dispatch] = useReducer(
    chatReducer,
    initialChatState
  );

  const dispatchMiddleware = useCallback(
    (action: IChatAction) => {
      if (roomId) {
        switch (action.type) {
          case "CHAT_ADD_MESSAGE":
            chatDB.saveMessages(roomId, [...messages, action.payload]);
            break;
        }
      }
      dispatch(action);
    },
    [roomId, messages]
  );

  useLayoutEffect(() => {
    if (roomId) {
      chatDB.getMessagesByRoomId(roomId).then((messages) => {
        dispatch({
          type: "CHAT_INIT_MESSAGES",
          payload: messages,
        });
      });
    }
  }, [roomId]);

  return {
    messages,
    members,
    myNickname,
    dispatch: dispatchMiddleware,
  };
};
