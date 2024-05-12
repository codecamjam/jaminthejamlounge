import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";
import { toggleDarkMode } from "@/utils";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const doc = useRef(null);

  useEffect(() => {
    if (document && !doc?.current) {
      doc.current = document.documentElement;
      if (localStorage) {
        const storedDarkMode = localStorage.getItem("TFT_DARK_MODE");
        if (Boolean(storedDarkMode)) {
          setDarkMode(() => {
            const mode = Boolean(JSON.parse(storedDarkMode));
            toggleDarkMode(doc, mode);
            return mode;
          });
        }
      }
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      expanded,
      setExpanded,
      darkMode,
      setDarkMode,
      doc,
    }),
    [expanded, setExpanded, darkMode, setDarkMode, doc]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
