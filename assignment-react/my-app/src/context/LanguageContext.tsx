"use client";
interface languageType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  Toggler: () => void;
}

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
const LanguageSwitcherContext = createContext<languageType | undefined>(
  undefined
);

export const LanguageSwitcherProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState("eng");
  const Toggler = () => setLanguage((prev) => (prev === "eng" ? "sp" : "eng"));

  return (
    <LanguageSwitcherContext.Provider
      value={{ language, setLanguage, Toggler }}
    >
      {children}
    </LanguageSwitcherContext.Provider>
  );
};

export const useLanguage = (): languageType => {
  const context = useContext(LanguageSwitcherContext);
  if (!context) {
    throw new Error("error");
  } else return context;
};
