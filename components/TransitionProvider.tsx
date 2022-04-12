import React, { useState, createContext, useCallback } from "react";
import gsap from "gsap";

type TransitionContextType = {
  timeline: gsap.core.Timeline;
};

const TransitionContext = createContext<TransitionContextType>({} as TransitionContextType);

type TransitionProviderPropsType = {
  children: React.ReactNode;
};

const TransitionProvider: React.FC<TransitionProviderPropsType> = ({ children }) => {
  const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }));

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        //@ts-ignore
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
