import { PropsWithChildren, memo } from "react";

export const ChatContainer = memo(({ children }: PropsWithChildren) => {
  return <div className="flex flex-col w-full max-w-5xl">{children}</div>;
});
