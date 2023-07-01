import { Request } from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import {
  createNewChatRoom,
  getChatRoom,
  hasChatRoom,
} from '../global/chatRooms.js';
import { onMessage } from './listen/message.js';
import { onClose } from './listen/close.js';
import internal from 'stream';
import { sendJoin } from './send/join.js';
import { sendClients } from './send/clients.js';

const wss = new WebSocketServer({ noServer: true });

/** WebSocket 서버 초기화 */
export const initWebSocket = (): void => {
  // WebSocket 연결 이벤트 리스너 설정
  wss.on('connection', handleConnection);
};

/** WebSocket 업그레이드 */
export const handleWebSocketUpgrade = (
  request: Request,
  socket: internal.Duplex,
  head: Buffer,
): void => {
  // URL에서 채팅방 ID 추출
  const { pathname, searchParams } = new URL(request.url, 'http://baseurl');
  const chatRoomId = decodeURIComponent(
    pathname.replace(/^\/chat\//gi, '') ?? '',
  );
  const nickname = decodeURIComponent(searchParams.get('nickname') ?? '');

  // 요청된 채팅방 ID에 따라 처리
  if (!chatRoomId || !nickname) {
    socket.destroy();
    return;
  }

  // 웹소켓 서버에 연결
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
};

/**  WebSocket 연결 */
const handleConnection = (ws: WebSocket, req: Request): void => {
  // URL에서 채팅방 ID 추출
  const { pathname, searchParams } = new URL(req.url, 'http://baseurl');
  const chatRoomId = decodeURIComponent(
    pathname.replace(/^\/chat\//gi, '') ?? '',
  );
  const nickname = decodeURIComponent(searchParams.get('nickname') ?? '');

  // 채팅방 ID 또는 닉네임이 없을 경우 연결 종료
  if (!chatRoomId || !nickname) {
    ws.close();
    return;
  }

  // 새로운 채팅방 ID인 경우 채팅방 생성
  if (!hasChatRoom(chatRoomId)) {
    createNewChatRoom(chatRoomId);
  }

  const chatRoom = getChatRoom(chatRoomId);

  // 클라이언트를 채팅방에 추가
  const client = chatRoom.addClient(ws, nickname);

  // 클라이언트가 채팅방에 들어왔음을 다른 클라이언트에게 알림
  sendJoin(client);

  // 클라이언트에게 채팅방에 있는 클라이언트 목록 전송
  sendClients(client);

  // 이벤트 리스너 설정
  ws.on('message', onMessage(ws, chatRoom));
  ws.on('close', onClose(ws, chatRoom));
};
