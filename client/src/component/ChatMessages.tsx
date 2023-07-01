import _ from "lodash";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
  memo,
  useMemo,
} from "react";
import dayjs from "dayjs";
import { BsCheckAll } from "react-icons/bs";
import { IMessage } from "../type/chatType";

interface IChatMessagesProps {
  messages: IMessage[];
  myNickname: string | null;
}

export interface IChatMessagesRef {
  scrollToBottom: () => void;
}

export const ChatMessages = memo(
  forwardRef<IChatMessagesRef, IChatMessagesProps>(
    ({ messages, myNickname }, ref) => {
      const messagesRef = useRef<HTMLUListElement>(null);
      const sortedMessages = useMemo(() => {
        return _.sortBy(messages, "timestamp");
      }, [messages]);

      useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
          messagesRef.current?.scrollTo({
            top: messagesRef.current.scrollHeight,
            behavior: "smooth",
          });
        },
      }));

      let prevDate = "";
      let prevMessage: IMessage | null = null;

      return (
        <ul
          ref={messagesRef}
          className="flex flex-col-reverse h-full gap-2 p-5 overflow-auto"
        >
          {sortedMessages
            .reduce<ReactNode[]>((acc, message) => {
              const isMine = message.nickname === myNickname;
              const date = dayjs(message.timestamp).format("YYYY.MM.DD (ddd)");

              // 날짜 표시
              if (prevDate !== date) {
                prevDate = date;
                acc.push(<ChatDateMessage key={date} date={date} />);
              }

              // 멤버 입퇴장 표시
              if (message.type === "join" || message.type === "leave") {
                acc.push(
                  <ChatMemberMessage key={message.id} message={message} />
                );
                return acc;
              }

              // 연결메세지 (이전 메시지와 같은 사용자의 메시지이며 1분 이내의 메시지)
              if (
                prevMessage &&
                prevMessage.nickname === message.nickname &&
                Math.abs(dayjs(prevMessage.timestamp).diff(message.timestamp)) <
                  1000 * 60
              ) {
                acc.push(
                  <ChatMessage
                    key={message.id}
                    message={message}
                    isMine={isMine}
                    contentOnly
                  />
                );
                return acc;
              }

              // 새 메시지
              prevMessage = message;
              acc.push(
                <ChatMessage
                  key={message.id}
                  message={message}
                  isMine={isMine}
                />
              );
              return acc;
            }, [])
            .reverse()}
        </ul>
      );
    }
  )
);

const ChatDateMessage = memo(({ date }: { date: string }) => {
  return (
    <div className="flex justify-center items-center text-gray-400 px-1 pt-2">
      <BsCheckAll className="inline-block text-lg mr-1 text-green-500" />
      <span className="text-sm">{date}</span>
    </div>
  );
});

interface IChatMessageProps {
  message: IMessage;
  isMine: boolean;
  contentOnly?: boolean;
}
export const ChatMessage = memo(
  ({ message, isMine, contentOnly }: IChatMessageProps) => {
    const myMessageStyle = useMemo(() => {
      return isMine ? "self-end items-end" : "self-start items-start";
    }, [isMine]);

    const myMessageContentStyle = useMemo(() => {
      return isMine ? "bg-blue-500 text-white" : "bg-white";
    }, [isMine]);

    const contentOnlyStyle = useMemo(() => {
      return contentOnly ? "" : "pt-1";
    }, [contentOnly]);

    return (
      <li
        key={message.id}
        className={`flex flex-col gap-1 px-1 ${contentOnlyStyle} ${myMessageStyle}`}
      >
        {!contentOnly && (
          <div className="flex gap-2 px-2 pt-1 items-center">
            <div className="font-bold text-sm">{message.nickname}</div>
            <div className="text-sm text-gray-400">
              {dayjs(message.timestamp).format("hh:mm A")}
            </div>
          </div>
        )}
        <div
          className={`rounded-xl inline-block py-2 px-3 w-fit max-w-lg whitespace-pre-line ${myMessageContentStyle}`}
        >
          {message.content}
        </div>
      </li>
    );
  }
);

export const ChatMemberMessage = memo(({ message }: { message: IMessage }) => {
  const enterOrLeave = useMemo(() => {
    return message.type === "join" ? "입장" : "퇴장";
  }, [message.type]);

  return (
    <li className="text-center text-sm text-gray-500 my-2">
      <span className="text-base">☁️</span> {message.nickname} 님이{" "}
      {enterOrLeave}
      하셨습니다.
    </li>
  );
});
