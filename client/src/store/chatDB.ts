import _ from "lodash";
import { IChatRoom, IMessage } from "../type/chatType";

// IndexedDB 초기화
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("ChatDB", 1);

    request.onerror = (event) => {
      console.error("IndexedDB에 접근하는 동안 오류가 발생했습니다.");
      reject("오류");
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result as IDBDatabase;
      resolve(db);
    };

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result as IDBDatabase;
      const objectStore = db.createObjectStore("Chats", { keyPath: "roomId" });
      objectStore.createIndex("roomId", "roomId", { unique: true });
    };
  });
};

// 여러 메시지 한꺼번에 저장
const saveMessages = async (
  roomId: string,
  messages: IMessage[]
): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("Chats", "readwrite");
    const objectStore = transaction.objectStore("Chats");

    const request = objectStore.get(roomId);

    request.onsuccess = (event: any) => {
      let chatData = event.target.result as
        | { roomId: string; messages: IMessage[] }
        | undefined;
      chatData = chatData || { roomId, messages: [] };
      chatData.messages = messages;
      const updateRequest = objectStore.put(chatData);

      updateRequest.onerror = (event) => {
        console.error("메시지를 저장하는 동안 오류가 발생했습니다.");
        reject("오류");
      };

      updateRequest.onsuccess = (event) => {
        resolve();
      };
    };

    request.onerror = (event) => {
      console.error("채팅방 데이터를 가져오는 동안 오류가 발생했습니다.");
      reject("오류");
    };
  });
};

// 전체 채팅방 데이터 조회
const getAllChatRooms = async (): Promise<IChatRoom[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("Chats", "readonly");
    const objectStore = transaction.objectStore("Chats");
    const request = objectStore.getAll();

    request.onsuccess = (event: any) => {
      const orgChatRooms = event.target.result as {
        roomId: string;
        messages: IMessage[];
      }[];
      const chatRooms = orgChatRooms
        .map((chatRoom) => {
          const latestMessage = _.sortBy(
            chatRoom.messages,
            "timestamp"
          ).pop() as IMessage;
          return {
            roomId: chatRoom.roomId,
            latestMessage,
          };
        })
        .filter((chatRoom) => chatRoom.latestMessage);
      resolve(chatRooms);
    };

    request.onerror = (event) => {
      console.error("전체 채팅방 데이터를 가져오는 동안 오류가 발생했습니다.");
      reject("오류");
    };
  });
};

// 특정 채팅방의 메시지 가져오기
const getMessagesByRoomId = async (roomId: string): Promise<IMessage[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("Chats", "readonly");
    const objectStore = transaction.objectStore("Chats");

    const request = objectStore.get(roomId);

    request.onsuccess = (event: any) => {
      const chatData = event.target.result as
        | { roomId: string; messages: IMessage[] }
        | undefined;
      const messages = chatData ? chatData.messages : [];
      resolve(messages);
    };

    request.onerror = (event) => {
      console.error("채팅방 데이터를 가져오는 동안 오류가 발생했습니다.");
      reject("오류");
    };
  });
};

// 채팅방 삭제
const deleteChatRoom = async (roomId: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("Chats", "readwrite");
    const objectStore = transaction.objectStore("Chats");

    const request = objectStore.delete(roomId);

    request.onsuccess = (event) => {
      resolve();
    };

    request.onerror = (event) => {
      console.error("채팅방을 삭제하는 동안 오류가 발생했습니다.");
      reject("오류");
    };
  });
};

export const chatDB = {
  saveMessages,
  getAllChatRooms,
  getMessagesByRoomId,
  deleteChatRoom,
};
