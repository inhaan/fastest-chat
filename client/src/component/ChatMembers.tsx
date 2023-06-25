import { IMember } from "../type/chatType";

interface IChatMembersProps {
  members: IMember[];
}

export const ChatMembers = ({ members }: IChatMembersProps) => {
  return (
    <ul>
      {members.map((member) => {
        return (
          <li key={member.nickname}>
            <div>{member.nickname}</div>
          </li>
        );
      })}
    </ul>
  );
};
