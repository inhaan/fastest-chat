import { PropsWithChildren } from "react";

export const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center absolute items-center top-0 right-0 p-1 min-w-[1.25rem] h-5 text-xs text-white bg-red-500 rounded-full translate-x-1 -translate-y-1">
      {children}
    </div>
  );
};
