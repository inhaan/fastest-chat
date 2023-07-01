import { IChatAction } from "../store/chatReducer";
import { IWebSocketMessage } from "../type/webSocketType";
import { onClients } from "./listen/clients";
import { onJoin } from "./listen/join";
import { onLeave } from "./listen/leave";
import { onMessage } from "./listen/message";

export const onWebSocketMessage = (
  webSocketMessage: IWebSocketMessage,
  dispatch: React.Dispatch<IChatAction>
) => {
  switch (webSocketMessage.type) {
    case "clients":
      onClients(webSocketMessage, dispatch);
      break;
    case "join":
      onJoin(webSocketMessage, dispatch);
      break;
    case "leave":
      onLeave(webSocketMessage, dispatch);
      break;
    case "message":
      onMessage(webSocketMessage, dispatch);
      break;
    default:
      break;
  }
};
