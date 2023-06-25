import { PropsWithChildren } from "react";

export const ChatBox = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden sm:rounded-xl shadow-2xl">
      {children}
    </div>
  );
};
