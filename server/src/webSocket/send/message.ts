import { WebSocket } from 'ws';
import { IClient } from '../../global/chatRooms.js';

/** 채팅방의 모든 클라이언트에게 메시지 전송 */
export const sendMessage = (sender: IClient, message: string): void => {
  const clients = sender.chatRoom.getClients();
  clients.forEach((client) => {
    if (client.ws !== sender.ws && client.ws.readyState === WebSocket.OPEN) {
      client.ws.send(
        JSON.stringify({
          type: 'message',
          nickname: sender.nickname,
          message: message,
        }),
      );
    }
  });
};
