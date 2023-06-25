import { useParams } from "react-router-dom";
import { ChatBackground } from "../component/ChatBackground";
import { ChatBox } from "../component/ChatBox";
import { ChatContainer } from "../component/ChatContainer";
import { ChatFooter } from "../component/ChatFooter";
import { ChatHeader } from "../component/ChatHeader";
import { useWindowSize } from "../hook/useWindowSize";
import { ChatEditor } from "../component/ChatEditor";
import { ChatMain } from "../component/ChatMain";
import { useChatStore } from "../hook/useChatStore";
import { ChatMessages } from "../component/ChatMessages";
import { ChatMembers } from "../component/ChatMembers";

export const Chat = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { isSmall } = useWindowSize();
  const { messages, members, dispatch } = useChatStore();

  return (
    <ChatBackground>
      <ChatContainer>
        <ChatBox>
          <ChatHeader title={roomId ?? ""} memberCount={members.length} />
          <div className="flex bg-slate-100 h-full">
            <ChatMain>
              <section className="flex-1">
                <ChatMessages messages={messages} />
              </section>
              <section className="bg-white">
                <ChatEditor />
              </section>
            </ChatMain>
            <aside className="w-full sm:w-72 bg-slate-500 transition-all">
              <ChatMembers members={members} />
            </aside>
          </div>
        </ChatBox>
        {!isSmall && <ChatFooter />}
      </ChatContainer>
    </ChatBackground>
  );
};
