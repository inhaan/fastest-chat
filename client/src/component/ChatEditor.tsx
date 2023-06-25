import TextareaAutosize from "react-textarea-autosize";

export const ChatEditor = () => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("Enter");
    }
  };

  return (
    <TextareaAutosize
      className="w-full resize-none outline-none p-5 transition-all"
      minRows={3}
      maxRows={10}
      autoFocus
      placeholder="대화를 입력하세요"
      onKeyDown={onKeyDown}
    />
  );
};
