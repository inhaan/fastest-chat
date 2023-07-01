import { IChatAction } from "../../store/chatReducer";
import { IWebSocketMessage } from "../../type/webSocketType";

export const onJoin = (
  webSocketMessage: IWebSocketMessage,
  dispatch: React.Dispatch<IChatAction>
) => {
  dispatch({
    type: "CHAT_JOIN_MEMBER",
    payload: {
      nickname: webSocketMessage.nickname,
    },
  });

  dispatch({
    type: "CHAT_SET_MEMBERS",
    payload: webSocketMessage.clients,
  });
};
