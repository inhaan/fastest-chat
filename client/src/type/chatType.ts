export interface IMessage {
  type: "join" | "leave" | "message";
  id: string;
  nickname: string;
  content?: string;
  timestamp: number;
}

export interface IMember {
  nickname: string;
}

export interface IChatRoom {
  roomId: string;
  latestMessage: IMessage;
}
