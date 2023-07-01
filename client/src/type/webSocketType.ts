export interface IWebSocketMessage {
  type: string;
  nickname: string;
  message: string;
  clients: { nickname: string }[];
}
