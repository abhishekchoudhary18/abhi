import { createContext, useContext, useRef, useState } from "react";

const CursorContext = createContext({});

export const CursorProvider = ({ children }) => {
  const cursorDotref = useRef(null);
  const cursorCircleref = useRef(null);
  const cursorTextref = useRef(null);
  const [cursorText,setCursorText] = useState("hello")

  return (
    <CursorContext.Provider value={{ cursorDotref, cursorCircleref, cursorTextref,cursorText,setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
    return useContext(CursorContext);
  };
