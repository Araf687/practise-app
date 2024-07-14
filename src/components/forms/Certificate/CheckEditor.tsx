import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import PromotionPreview from "./PromotionPreview";
import ReactDOMServer from "react-dom/server";
interface CheckEditorProps {
  data: React.ReactNode;
}
const CheckEditor: React.FC<CheckEditorProps> = ({data}) => {
  const editor = useRef(null);
  const initialContent = ReactDOMServer.renderToString(data);

  const [content, setContent] = useState<string>(`${initialContent}`);
  const placeholder = "Start typing...";

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/
      placeholder: placeholder,
    }),
    [placeholder]
  );

  return (
    <div className="container mt-4">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent: string) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent: string) => {}}
      />
    </div>
  );
};

export default CheckEditor;
