import { memo, useCallback, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface IMainTitleProps {
  goChatRoom: (chatRoomId: string) => void;
}
export const MainTitle = memo(({ goChatRoom }: IMainTitleProps) => {
  const [chatRoomId, setChatRoomId] = useState("");

  const onChangeChatRoomId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (value.includes(" ")) {
        value = value.replace(" ", "");
      }
      setChatRoomId(value);
    },
    []
  );

  const onKeyDownChatRoomId = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        goChatRoom(chatRoomId);
      }
    },
    [chatRoomId, goChatRoom]
  );

  const onClickGoChatRoom = useCallback(() => {
    goChatRoom(chatRoomId);
  }, [chatRoomId, goChatRoom]);

  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center font-bold gap-5"
      style={{ paddingTop: "calc(var(--vh, 1vh) * 20)" }}
    >
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <div className="text-white text-4xl">fastest-chat.com/</div>
        <input
          type="text"
          className="inline-block w-52 rounded-lg outline-none px-4 py-5 text-2xl shadow-xl"
          autoFocus
          autoComplete="on"
          placeholder="채팅방 이름"
          value={chatRoomId}
          onChange={onChangeChatRoomId}
          onKeyDown={onKeyDownChatRoomId}
        />
      </div>
      <div
        className="text-3xl cursor-pointer transition-all text-yellow-300 hover:text-yellow-400 active:text-yellow-500"
        onClick={onClickGoChatRoom}
      >
        <FaArrowRight className="inline-block" />
      </div>
    </div>
  );
});
