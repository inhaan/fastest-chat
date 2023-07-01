import dayjs from "dayjs";
import { FaXmark } from "react-icons/fa6";
import { IChatRoom } from "../type/chatType";
import imgChat from "../img/chat.svg";
import { memo, useCallback } from "react";

interface IMainChatRoomsProps {
  chatRooms: IChatRoom[];
  onGoChatRoom: (chatRoomId: string) => void;
  onDeleteChatRoom: (chatRoomId: string) => void;
}

export const MainChatRooms = memo(
  ({ chatRooms, onGoChatRoom, onDeleteChatRoom }: IMainChatRoomsProps) => {
    const onClickDelete = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const chatRoomId = e.currentTarget.dataset.chat_room_id;
        if (!chatRoomId) {
          return;
        }
        if (!window.confirm("기록을 삭제하시겠습니까?")) {
          return;
        }
        onDeleteChatRoom(chatRoomId);
      },
      [onDeleteChatRoom]
    );

    const onClickChatRoom = useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        const chatRoomId = e.currentTarget.dataset.chat_room_id;
        if (!chatRoomId) {
          return;
        }
        onGoChatRoom(chatRoomId);
      },
      [onGoChatRoom]
    );

    return (
      <ul className="w-4/5 max-w-md mt-32 bg-white rounded-lg shadow-lg overflow-hidden">
        {chatRooms.map((chatRoom) => (
          <li
            key={chatRoom.roomId}
            data-chat_room_id={chatRoom.roomId}
            className="flex items-center gap-2 cursor-pointer px-3 py-2 sm:px-7 sm:py-5 border-b hover:bg-gray-100 active:bg-gray-200 transition-all "
            onClick={onClickChatRoom}
          >
            <img src={imgChat} alt="chat" className="w-7 h-7 mr-2" />
            <div className="flex-1 flex flex-col">
              <div className="w-full flex justify-between">
                <div className="break-all">{chatRoom.roomId}</div>
                <div className="flex items-center gap-5">
                  <div className=" text-sm text-gray-400">
                    {dayjs(chatRoom.latestMessage.timestamp).format("YY.MM.DD")}
                  </div>
                  <button
                    data-chat_room_id={chatRoom.roomId}
                    className="flex transition-all text-gray-500 hover:text-rose-400 active:text-rose-500"
                    onClick={onClickDelete}
                  >
                    <FaXmark className="inline-block" />
                  </button>
                </div>
              </div>
              <div className="text-gray-400">
                {chatRoom.latestMessage.content}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
);
