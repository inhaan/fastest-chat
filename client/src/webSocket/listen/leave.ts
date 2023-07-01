import { IChatAction } from "../../store/chatReducer";
import { IWebSocketMessage } from "../../type/webSocketType";

export const onLeave = (
  webSocketMessage: IWebSocketMessage,
  dispatch: React.Dispatch<IChatAction>
) => {
  dispatch({
    type: "CHAT_LEAVE_MEMBER",
    payload: {
      nickname: webSocketMessage.nickname,
    },
  });

  dispatch({
    type: "CHAT_SET_MEMBERS",
    payload: webSocketMessage.clients,
  });
};
