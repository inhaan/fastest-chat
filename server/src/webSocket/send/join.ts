import { WebSocket } from 'ws';
import { IClient, createClientInfos } from '../../global/chatRooms.js';

/** 클라이언트가 채팅방에 들어왔음을 다른 클라이언트에게 알림 */
export const sendJoin = (joiner: IClient): void => {
  const clients = joiner.chatRoom.getClients();
  const clientsInfo = createClientInfos(clients);
  clients.forEach((client) => {
    if (client.ws !== joiner.ws && client.ws.readyState === WebSocket.OPEN) {
      client.ws.send(
        JSON.stringify({
          type: 'join',
          nickname: joiner.nickname,
          clients: clientsInfo,
        }),
      );
    }
  });
};
