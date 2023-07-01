import { PropsWithChildren, memo } from "react";

interface IChatMainProps extends PropsWithChildren {
  className?: string;
}

export const ChatMain = memo(({ children, className }: IChatMainProps) => {
  return <main className={`flex flex-col ${className}`}>{children}</main>;
});
