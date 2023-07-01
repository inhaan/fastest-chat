// 채팅방 관리를 위한 객체
const chatRooms = {};
const clientExtends = new WeakMap();
/** 채팅방 존재 여부 */
export const hasChatRoom = (roomId) => {
    return !!chatRooms[roomId];
};
/** 채팅방 생성 */
export const createNewChatRoom = (roomId) => {
    chatRooms[roomId] = { clientWebSocketSet: new Set() };
    return getChatRoom(roomId);
};
/** 채팅방 삭제 */
export const deleteChatRoom = (roomId) => {
    delete chatRooms[roomId];
};
/** 전체 채팅방 조회 */
export const getChatRooms = () => {
    return Object.entries(chatRooms).map(([roomId, room]) => {
        return createChatRoom(roomId, room);
    });
};
/** 채팅방 조회 */
export const getChatRoom = (roomId) => {
    const room = chatRooms[roomId];
    if (!room) {
        return undefined;
    }
    return createChatRoom(roomId, room);
};
/** 클라이언트 정보 생성 */
export const createClientInfos = (clients) => {
    return clients.map((client) => ({ nickname: client.nickname }));
};
const createChatRoom = (roomId, room) => {
    const chatRoom = {
        roomId,
        getClient,
        getClients: () => getClients(room),
        addClient: (ws, nickname) => {
            room.clientWebSocketSet.add(ws);
            clientExtends.set(ws, { nickname: nickname, chatRoom });
            return getClient(ws);
        },
        deleteClient: (ws) => {
            room.clientWebSocketSet.delete(ws);
        },
    };
    return chatRoom;
};
/** 클라이언트 조회 */
const getClient = (ws) => {
    const extendsData = clientExtends.get(ws);
    if (!extendsData) {
        return undefined;
    }
    return {
        ws,
        nickname: extendsData.nickname,
        chatRoom: extendsData.chatRoom,
    };
};
/** 채팅방의 전체 클라이언트 조회 */
const getClients = (room) => {
    return Array.from(room.clientWebSocketSet).map((ws) => getClient(ws));
};
//# sourceMappingURL=chatRooms.js.map