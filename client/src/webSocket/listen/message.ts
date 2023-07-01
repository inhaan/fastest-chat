import { IChatAction, createMessage } from "../../store/chatReducer";
import { IWebSocketMessage } from "../../type/webSocketType";

export const onMessage = (
  webSocketMessage: IWebSocketMessage,
  dispatch: React.Dispatch<IChatAction>
) => {
  const message = createMessage({
    nickname: webSocketMessage.nickname,
    content: webSocketMessage.message,
  });

  dispatch({
    type: "CHAT_ADD_MESSAGE",
    payload: message,
  });
};
