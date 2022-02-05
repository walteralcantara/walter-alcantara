import { createContext, ReactNode, useContext, useState } from "react";

type DirectionData = { 
  direction: "left" | "right" | undefined;
  eventType?: "slide" | "fade" | undefined;
}

type VariantsData = {
  enter: (props: DirectionData) => any;
  center: any;
  exit: (props: DirectionData) => any;
}

type NavigationContextData = {
  variants: VariantsData;
  direction: DirectionData;
  setDirection: any; 
};

export const NavigationContext = createContext({} as NavigationContextData);

type NavigationContextProviderProps = {
  children: ReactNode;
};

const variants = {
  enter: ({ direction, eventType}: DirectionData) => {
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

  exit: ({ direction, eventType }: DirectionData) => {
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

export const NavigationContextProvider = ({ children }: NavigationContextProviderProps) => {
  const [direction, setDirection] = useState({ direction: undefined, eventType: undefined });

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
