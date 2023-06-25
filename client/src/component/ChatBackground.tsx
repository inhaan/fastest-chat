import { PropsWithChildren } from "react";

export const ChatBackground = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center sm:p-10 bg-neutral-200 min-h-screen">
      {children}
    </div>
  );
};
