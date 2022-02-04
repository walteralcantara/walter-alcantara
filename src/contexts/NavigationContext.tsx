import { createContext, useContext, useState } from "react";

type NavigationContextData = {};

export const NavigationContext = createContext({} as any);

type NavigationContextProviderProps = {};

const variants = {
  enter: ({ direction, eventType }: { direction: "right" | "left", eventType: string }) => {

    if (eventType === "slide") {
      return {
        x: direction === "right" ? 1000 : -1000,
        opacity: 0,
      };
    }

    if (eventType === "fade") {
      return {
        y: -1000,
        opacity: 0,
      };
    }
    return;
  },

  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },

  exit: ({ direction, eventType }: { direction: "right" | "left", eventType: string }) => {

    if (eventType === "slide") {
      return {
        zIndex: 0,
        x: direction === "left" ? 1000 : -1000,
        opacity: 0,
      };
    }

    if (eventType === "fade") {
      return {
        y: 1000,
        opacity: 0,
      };
    }
    return;
  },
};

export const NavigationContextProvider = ({ children }: any) => {
  const [direction, setDirection] = useState<{ eventType: string | undefined, direction?: string}>({ eventType: undefined });

  return (
    <NavigationContext.Provider
      value={{
        variants,
        direction,
        setDirection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
