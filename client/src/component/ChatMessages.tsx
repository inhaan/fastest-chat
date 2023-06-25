import { IMessage } from "../type/chatType";

interface IChatMessagesProps {
  messages: IMessage[];
}
export const ChatMessages = ({ messages }: IChatMessagesProps) => {
  return (
    <ul>
      {messages.map((message) => {
        return (
          <li key={message.id}>
            <div>{message.nickname}</div>
            <div>{message.content}</div>
            <div>{message.timestamp}</div>
          </li>
        );
      })}
    </ul>
  );
};
