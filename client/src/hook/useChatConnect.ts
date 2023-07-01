import { useRef, useCallback, useLayoutEffect } from "react";
import { IWebSocketMessage } from "../type/webSocketType";

interface IChatConnection {
  chatRoomId: string;
  nickname: string;
  ws: WebSocket;
  close: () => void;
  cancel: () => void;
  isSame: (compare: { chatRoomId: string; nickname: string }) => boolean;
  isClosed: () => boolean;
}

export const useChatConnection = (
  chatRoomId?: string,
  nickname?: string | null
) => {
  const connectionRef = useRef<IChatConnection | null>(null);
  const messageHandlerRef = useRef<(message: IWebSocketMessage) => void>();

  useLayoutEffect(() => {
    if (!chatRoomId || !nickname) {
      return;
    }
    if (
      connectionRef.current?.isSame({ chatRoomId, nickname }) &&
      !connectionRef.current?.isClosed()
    ) {
      connectionRef.current?.cancel();
      return;
    }

    const host =
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_HOST
        : window.location.host;
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const socketUrl = `${protocol}//${host}/chat/${chatRoomId}?nickname=${nickname}`;
    const ws = new WebSocket(socketUrl);
    connectionRef.current = createChatConnection(chatRoomId, nickname, ws);

    if (messageHandlerRef.current) {
      connectionRef.current.ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        messageHandlerRef.current?.(message);
      };
    }

    return () => {
      connectionRef.current?.close();
    };
  }, [chatRoomId, nickname]);

  const registMessageHandler = useCallback(
    (handleMessage: (message: IWebSocketMessage) => void) => {
      messageHandlerRef.current = handleMessage;
    },
    []
  );

  const sendMessage = useCallback((message: string) => {
    connectionRef.current?.ws.send(message);
  }, []);

  const leave = useCallback(() => {
    connectionRef.current?.close();
  }, []);

  return {
    connection: connectionRef.current,
    sendMessage,
    leave,
    registMessageHandler,
  };
};

const createChatConnection = (
  chatRoomId: string,
  nickname: string,
  ws: WebSocket
): IChatConnection => {
  let timer: NodeJS.Timeout;

  // 웹소켓 연결이 열렸을 때 실행되는 함수
  ws.onopen = () => {
    console.log("Connected to the chat server");
  };

  // 웹소켓 연결이 닫혔을 때 실행되는 함수
  ws.onclose = () => {
    console.log("Disconnected from the chat server");
  };

  const close = () => {
    timer = setTimeout(() => {
      ws.close();
    }, 100);
  };

  const cancel = () => {
    clearTimeout(timer);
  };

  const isSame = (compare: { chatRoomId: string; nickname: string }) => {
    return chatRoomId === compare.chatRoomId && nickname === compare.nickname;
  };

  const isClosed = () => {
    return (
      ws.readyState === WebSocket.CLOSED || ws.readyState === WebSocket.CLOSING
    );
  };

  return {
    chatRoomId,
    nickname,
    ws,
    close,
    cancel,
    isSame,
    isClosed,
  };
};
