import { PropsWithChildren, memo } from "react";

export const ChatBackground = memo(({ children }: PropsWithChildren) => {
  return (
    <div
      className="flex justify-center sm:p-10 bg-neutral-200"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      {children}
    </div>
  );
});
