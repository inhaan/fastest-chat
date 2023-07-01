import { createClientInfos } from '../../global/chatRooms.js';
/** 클라이언트에게 채팅방에 있는 클라이언트 목록 전송 */
export const sendClients = (client) => {
    const clients = client.chatRoom.getClients();
    const clientsInfo = createClientInfos(clients);
    client.ws.send(JSON.stringify({ type: 'clients', clients: clientsInfo }));
};
//# sourceMappingURL=clients.js.map