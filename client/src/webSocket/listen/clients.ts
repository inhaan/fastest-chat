import { IChatAction } from "../../store/chatReducer";
import { IWebSocketMessage } from "../../type/webSocketType";

export const onClients = (
  webSocketMessage: IWebSocketMessage,
  dispatch: React.Dispatch<IChatAction>
) => {
  dispatch({
    type: "CHAT_SET_MEMBERS",
    payload: webSocketMessage.clients,
  });
};
