import { PropsWithChildren } from "react";

export const ChatContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col w-full max-w-5xl">{children}</div>;
};
