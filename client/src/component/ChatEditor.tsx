import _ from "lodash";
import { useState, useMemo, useRef, memo, useCallback } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useWindowSize } from "../hook/useWindowSize";
import { useDevice } from "../hook/useDevice";

interface IChatEditorProps {
  disabled?: boolean;
  onSend: (content: string) => void;
}

export const ChatEditor = memo(({ disabled, onSend }: IChatEditorProps) => {
  const [content, setContent] = useState("");
  const { isSmall } = useWindowSize();
  const { isDesktop } = useDevice();
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const sendStyle = useMemo(() => {
    return content ? "text-rose-400" : "text-gray-400";
  }, [content]);

  const sendContent = useMemo(() => {
    return _.throttle((content: string) => {
      if (content) {
        onSend(content);
        setContent("");
      }
    }, 500);
  }, [onSend]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey && isDesktop) {
        e.preventDefault();
        sendContent(content);
      }
    },
    [content, isDesktop, sendContent]
  );

  const onClick = useCallback(() => {
    sendContent(content);
    editorRef.current?.focus();
  }, [content, sendContent]);

  return (
    <>
      <div className="relative">
        <TextareaAutosize
          ref={editorRef}
          className="w-full resize-none outline-none p-3 sm:p-5 transition-all"
          minRows={isSmall ? 1 : 2}
          maxRows={8}
          autoFocus
          placeholder="대화를 입력하세요"
          disabled={disabled}
          value={content}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="absolute bottom-0 right-0 p-5">
          <PiPaperPlaneRightFill
            className={`text-2xl transition-all cursor-pointer ${sendStyle}`}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
});
