import { sendMessage } from '../send/message.js';
export const onMessage = (ws, chatRoom) => (message) => {
    // 채팅방의 모든 클라이언트에게 메시지 전송
    sendMessage(chatRoom.getClient(ws), message.toString());
};
//# sourceMappingURL=message.js.map