import { useState, useRef, useCallback, useEffect, memo, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChatBackground } from "../component/ChatBackground";
import { ChatBox } from "../component/ChatBox";
import { ChatContainer } from "../component/ChatContainer";
import { ChatFooter } from "../component/ChatFooter";
import { ChatHeader } from "../component/ChatHeader";
import { useWindowSize } from "../hook/useWindowSize";
import { ChatEditor } from "../component/ChatEditor";
import { ChatMain } from "../component/ChatMain";
import { useChatStore } from "../hook/useChatStore";
import { ChatMessages, IChatMessagesRef } from "../component/ChatMessages";
import { ChatMembers } from "../component/ChatMembers";
import { useChatConnection } from "../hook/useChatConnect";
import { onWebSocketMessage } from "../webSocket/messageHandler";
import { useCssVar } from "../hook/useCssVar";
import { createMessage } from "../store/chatReducer";
import { checkNicknameAsync } from "../api/checkNickname";

const Chat = memo(() => {
  useCssVar();
  const { roomId } = useParams<{ roomId: string }>();
  const { isSmall } = useWindowSize();
  const navigate = useNavigate();
  const chatMessageRef = useRef<IChatMessagesRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenMembers, setIsOpenMembers] = useState(isSmall ? false : true);
  const { messages, members, myNickname, dispatch } = useChatStore(roomId);
  const { sendMessage, leave, registMessageHandler } = useChatConnection(
    roomId,
    myNickname
  );
  registMessageHandler((message) => {
    onWebSocketMessage(message, dispatch);
  });

  const chatMainStyle = useMemo(() => {
    return isOpenMembers ? "flex-1" : "flex-1";
  }, [isOpenMembers]);

  const membersStyle = useMemo(() => {
    return isOpenMembers ? "w-full sm:w-72" : "w-0";
  }, [isOpenMembers]);

  const toggleOpenMembers = useCallback(() => {
    setIsOpenMembers((prev) => !prev);
  }, []);

  const onSendMessage = useCallback(
    (content: string) => {
      if (!myNickname) {
        return;
      }
      sendMessage(content);

      const message = createMessage({
        content,
        nickname: myNickname,
      });
      dispatch({
        type: "CHAT_ADD_MESSAGE",
        payload: message,
      });
    },
    [sendMessage, dispatch, myNickname]
  );

  const onLeave = useCallback(() => {
    leave();
    navigate("/");
  }, [leave, navigate]);

  // 사용자에게 닉네임 입력 받기
  useEffect(() => {
    if (myNickname || !roomId) {
      return;
    }
    const nickname = prompt("닉네임을 입력해 주세요");
    if (!nickname) {
      alert("닉네임은 필수 입력입니다");
      navigate("/");
      return;
    }

    checkNicknameAsync(roomId, nickname).then((available) => {
      if (!available) {
        alert("이미 사용중인 닉네임입니다");
        navigate("/");
      } else {
        dispatch({ type: "CHAT_SET_MY_NICKNAME", payload: nickname });
      }
    });
  }, []);

  // 메세지가 추가될 때마다 스크롤을 맨 아래로 이동
  useEffect(() => {
    chatMessageRef.current?.scrollToBottom();
    containerRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  return (
    <ChatBackground>
      <ChatContainer>
        <ChatBox>
          <ChatHeader
            title={roomId ?? ""}
            memberCount={members.length}
            isOpenMembers={isOpenMembers}
            toggleOpenMembers={toggleOpenMembers}
            onLeave={onLeave}
          />
          <div
            ref={containerRef}
            className="relative flex-1 flex bg-slate-100 h-1"
          >
            <ChatMain className={chatMainStyle}>
              <section className="flex-1 h-1">
                <ChatMessages
                  ref={chatMessageRef}
                  messages={messages}
                  myNickname={myNickname}
                />
              </section>
              <section className="bg-white">
                <ChatEditor
                  disabled={!myNickname ? true : false}
                  onSend={onSendMessage}
                />
              </section>
            </ChatMain>
            <aside
              className={`${membersStyle} absolute right-0 sm:relative h-full bg-slate-500 transition-all overflow-auto`}
            >
              <ChatMembers members={members} myNickname={myNickname} />
            </aside>
          </div>
        </ChatBox>
        {!isSmall && <ChatFooter />}
      </ChatContainer>
    </ChatBackground>
  );
});

export default Chat;
