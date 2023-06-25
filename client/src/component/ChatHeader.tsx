import { BiExit } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import imgChat from "../img/chat.svg";
import { Badge } from "./Badge";

interface IChatHeaderProps {
  title: string;
  memberCount: number;
}

export const ChatHeader = ({ title, memberCount }: IChatHeaderProps) => {
  return (
    <header className="relative flex justify-between p-5 bg-neutral-50">
      <div className="flex items-center gap-4">
        <img src={imgChat} alt="chat" className="w-9 h-9" />
        <h1 className="font-bold text-xl">{title}</h1>
      </div>

      <div className="flex gap-3 items-center">
        <button
          title="참가자"
          className="relative p-2.5 rounded-full bg-slate-200 opacity-80 hover:bg-slate-300 active:bg-slate-400 transition-all"
        >
          <BsPeopleFill className="text-xl text-slate-600" />
          <Badge>{memberCount}</Badge>
        </button>

        <button
          title="나가기"
          className="p-2.5 rounded-full bg-slate-200 opacity-80 hover:bg-slate-300 active:bg-slate-400 transition-all"
        >
          <BiExit className="text-xl text-slate-600" />
        </button>
      </div>
    </header>
  );
};
