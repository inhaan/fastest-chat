import { memo, useMemo } from "react";
import Gravatar from "react-gravatar";
import { IMember } from "../type/chatType";

interface IChatMembersProps {
  members: IMember[];
  myNickname: string | null;
}

export const ChatMembers = memo(
  ({ members, myNickname }: IChatMembersProps) => {
    const shortedMembers = useMemo(() => {
      return [
        ...members.filter((member) => member.nickname === myNickname),
        ...members.filter((member) => member.nickname !== myNickname),
      ];
    }, [members, myNickname]);

    return (
      <ul className="flex flex-col gap-3 py-6 px-3">
        {shortedMembers.map((member) => {
          return (
            <ChatMember
              key={member.nickname}
              member={member}
              isMe={member.nickname === myNickname}
            />
          );
        })}
      </ul>
    );
  }
);

interface IChatMemberProps {
  member: IMember;
  isMe: boolean;
}
const ChatMember = memo(({ member, isMe }: IChatMemberProps) => {
  const meStyle = useMemo(() => {
    return isMe ? "bg-slate-400 rounded-lg" : "";
  }, [isMe]);

  return (
    <li className={`flex p-3 gap-3 text-white ${meStyle}`}>
      <Gravatar
        email={member.nickname}
        size={40}
        default="mp"
        className="rounded-lg"
      />
      <div
        title={member.nickname}
        className="flex items-center whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {member.nickname}
      </div>
    </li>
  );
});
