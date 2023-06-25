import { PropsWithChildren } from "react";

export const ChatMain = ({ children }: PropsWithChildren) => {
  return <main className="flex-1 flex flex-col">{children}</main>;
};
