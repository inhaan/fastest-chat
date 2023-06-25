import { RawData, WebSocket } from 'ws';
import { IChatRoom } from '../../global/chatRooms.js';
import { sendMessage } from '../send/message.js';

export const onMessage =
  (ws: WebSocket, chatRoom: IChatRoom) =>
  (message: RawData): void => {
    // 채팅방의 모든 클라이언트에게 메시지 전송
    sendMessage(chatRoom.getClient(ws), message.toString());
  };
