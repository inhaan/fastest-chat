import { WebSocket } from 'ws';
import { IChatRoom, deleteChatRoom } from '../../global/chatRooms.js';
import { sendLeave } from '../send/leave.js';

export const onClose = (ws: WebSocket, chatRoom: IChatRoom) => (): void => {
  const client = chatRoom.getClient(ws);

  // 클라이언트를 채팅방에서 제거
  chatRoom.deleteClient(ws);

  // 클라이언트가 채팅방에서 나갔음을 다른 클라이언트에게 알림
  sendLeave(client);

  // 채팅방에 클라이언트가 없으면 채팅방 제거
  if (chatRoom.getClients().length === 0) {
    deleteChatRoom(chatRoom.roomId);
  }
};
