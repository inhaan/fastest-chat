import { WebSocket } from 'ws';
import { createClientInfos } from '../../global/chatRooms.js';
export const sendLeave = (leaver) => {
    // 클라이언트가 채팅방에서 나갔음을 다른 클라이언트에게 알림
    const clients = leaver.chatRoom.getClients();
    const clientsInfo = createClientInfos(clients);
    clients.forEach((client) => {
        if (client.ws.readyState === WebSocket.OPEN) {
            client.ws.send(JSON.stringify({
                type: 'leave',
                nickname: leaver.nickname,
                clients: clientsInfo,
            }));
        }
    });
};
//# sourceMappingURL=leave.js.map