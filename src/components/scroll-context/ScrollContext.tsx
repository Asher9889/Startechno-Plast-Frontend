import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext<any>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (!formRef.current) return;
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    //Highlight effect trigger
    formRef.current.classList.add("border-red-500", "border-[1px]");

    setTimeout(() => {
      formRef.current?.classList.remove("border-red-500", "border-[1px]");
    }, 5000);
  };

  return (
    <ScrollContext.Provider value={{ formRef, scrollToForm }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
