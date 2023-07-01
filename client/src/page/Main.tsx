import { memo, useCallback, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCssVar } from "../hook/useCssVar";
import { MainTitle } from "../component/MainTitle";
import { chatDB } from "../store/chatDB";
import { IChatRoom } from "../type/chatType";
import imgBg from "../img/pexels-alexander-kovalev-2847648.jpg";
import { MainChatRooms } from "../component/MainChatRooms";

const Main = memo(() => {
  useCssVar();
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState<IChatRoom[]>([]);

  const onGoChatRoom = useCallback(
    (chatRoomId: string) => {
      if (!chatRoomId) {
        alert("채팅방 이름을 입력해주세요.");
        return;
      }
      navigate(`/${chatRoomId}`);
    },
    [navigate]
  );

  const onDeleteChatRoom = useCallback((chatRoomId: string) => {
    chatDB.deleteChatRoom(chatRoomId).then(() => {
      chatDB.getAllChatRooms().then((chatRooms) => {
        setChatRooms(chatRooms);
      });
    });
  }, []);

  useLayoutEffect(() => {
    chatDB.getAllChatRooms().then((chatRooms) => {
      setChatRooms(chatRooms);
    });
  }, []);

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${imgBg})`,
        height: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <main>
        <section>
          <MainTitle goChatRoom={onGoChatRoom} />
        </section>
        <section className="flex justify-center">
          <MainChatRooms
            chatRooms={chatRooms}
            onGoChatRoom={onGoChatRoom}
            onDeleteChatRoom={onDeleteChatRoom}
          />
        </section>
      </main>
    </div>
  );
});

export default Main;
