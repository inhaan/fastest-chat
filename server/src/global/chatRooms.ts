import { WebSocket } from 'ws';

export interface IClient {
  ws: WebSocket;
  nickname: string;
  chatRoom: IChatRoom;
}

export interface IChatRoom {
  roomId: string;
  getClients: () => IClient[];
  getClient: (ws: WebSocket) => IClient | undefined;
  addClient: (ws: WebSocket, nickname: string) => IClient;
  deleteClient: (ws: WebSocket) => void;
}

export interface IClientInfo {
  nickname: string;
}

interface IInnerChatRoom {
  clientWebSocketSet: Set<WebSocket>;
}

// 채팅방 관리를 위한 객체
const chatRooms: { [key: string]: IInnerChatRoom } = {};
const clientExtends: WeakMap<
  WebSocket,
  { nickname: string; chatRoom: IChatRoom }
> = new WeakMap();

/** 채팅방 존재 여부 */
export const hasChatRoom = (roomId: string): boolean => {
  return !!chatRooms[roomId];
};

/** 채팅방 생성 */
export const createNewChatRoom = (roomId: string): IChatRoom => {
  chatRooms[roomId] = { clientWebSocketSet: new Set() };
  return getChatRoom(roomId);
};

/** 채팅방 삭제 */
export const deleteChatRoom = (roomId: string): void => {
  delete chatRooms[roomId];
};

/** 전체 채팅방 조회 */
export const getChatRooms = (): IChatRoom[] => {
  return Object.entries(chatRooms).map(([roomId, room]) => {
    return createChatRoom(roomId, room);
  });
};

/** 채팅방 조회 */
export const getChatRoom = (roomId: string): IChatRoom | undefined => {
  const room = chatRooms[roomId];
  if (!room) {
    return undefined;
  }
  return createChatRoom(roomId, room);
};

/** 클라이언트 정보 생성 */
export const createClientInfos = (clients: IClient[]): IClientInfo[] => {
  return clients.map((client) => ({ nickname: client.nickname }));
};

const createChatRoom = (roomId: string, room: IInnerChatRoom): IChatRoom => {
  const chatRoom = {
    roomId,
    getClient,
    getClients: () => getClients(room),
    addClient: (ws: WebSocket, nickname: string): IClient => {
      room.clientWebSocketSet.add(ws);
      clientExtends.set(ws, { nickname: nickname, chatRoom });
      return getClient(ws);
    },
    deleteClient: (ws: WebSocket): void => {
      room.clientWebSocketSet.delete(ws);
    },
  };
  return chatRoom;
};

/** 클라이언트 조회 */
const getClient = (ws: WebSocket): IClient | undefined => {
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
const getClients = (room: IInnerChatRoom): IClient[] => {
  return Array.from(room.clientWebSocketSet).map((ws) => getClient(ws));
};
