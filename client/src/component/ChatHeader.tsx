import { memo, useCallback, useMemo } from "react";
import { BiExit } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import imgChat from "../img/chat.svg";
import { Badge } from "./Badge";

interface IChatHeaderProps {
  title: string;
  memberCount: number;
  isOpenMembers: boolean;
  toggleOpenMembers: () => void;
  onLeave: () => void;
}

export const ChatHeader = memo(
  ({
    title,
    memberCount,
    isOpenMembers,
    toggleOpenMembers,
    onLeave,
  }: IChatHeaderProps) => {
    const membersStyle = useMemo(() => {
      return isOpenMembers
        ? "bg-sky-400 hover:bg-sky-500 active:bg-sky-600"
        : "bg-slate-200 hover:bg-slate-300 active:bg-slate-400";
    }, [isOpenMembers]);

    const onClickLeave = useCallback(() => {
      if (window.confirm("채팅방을 나가시겠습니까?")) {
        onLeave();
      }
    }, [onLeave]);

    return (
      <header className="relative flex justify-between p-5 bg-neutral-50 shadow-sm">
        <div className="flex items-center gap-4">
          <img src={imgChat} alt="chat" className="w-9 h-9" />
          <h1 className="font-bold text-lg sm:text-xl break-all">{title}</h1>
        </div>

        <div className="flex gap-3 items-center">
          <button
            title="참가자"
            className={`relative p-2.5 rounded-full opacity-80  transition-all ${membersStyle}`}
            onClick={toggleOpenMembers}
          >
            <BsPeopleFill className="text-xl text-slate-600" />
            <Badge>{memberCount}</Badge>
          </button>

          <button
            title="나가기"
            className="p-2.5 rounded-full bg-slate-200 opacity-80 hover:bg-slate-300 active:bg-slate-400 transition-all"
            onClick={onClickLeave}
          >
            <BiExit className="text-xl text-slate-600" />
          </button>
        </div>
      </header>
    );
  }
);
