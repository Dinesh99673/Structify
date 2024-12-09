import { useEffect, useRef, useState } from "react";
import { Box, HStack, Button, useMediaQuery } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../Services/constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [isOutputView, setIsOutputView] = useState(false); // Tracks current view
  const [isMobile] = useMediaQuery("(max-width: 768px)"); // Detects mobile screens

  const onMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(()=>{
    setValue(CODE_SNIPPETS[language]);
  },[])

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleRunCode = () => {
    setIsOutputView(true); // Switch to output view
  };

  const handleBackToEditor = () => {
    setIsOutputView(false); // Switch back to editor view
  };

  return (
    <Box>
      {isMobile ? (
        isOutputView ? (
          <Box>
            {/* Output view on mobile */}
            <Output editorRef={editorRef} language={language} value={value} isMobile={isMobile} handleBackToEditor={handleBackToEditor} isOutputView={isOutputView}/>
          </Box>
        ) : (
          <Box>
            {/* Editor view on mobile */}
            <LanguageSelector language={language} onSelect={onSelect} handleRunCode={handleRunCode} isMobile={isMobile}/>
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language=="gcc"?'c':language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />

          </Box>
        )
      ) : (
        <HStack spacing={4}>
          {/* Desktop layout: Editor and Output side by side */}
          <Box w="50%">
            <LanguageSelector language={language=="gcc"?'c':language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },}}
                height="80vh"
                theme="vs-dark"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                onMount={onMount}
                value={value}
                onChange={(value) => setValue(value)}
              />
            </Box>
          <Output editorRef={editorRef} language={language} value={value} isOutputView={isOutputView}/>
        </HStack>
      )}
    </Box>
  );
};

export default CodeEditor;
