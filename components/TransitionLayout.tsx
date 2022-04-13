import { TransitionContext } from "./TransitionProvider";
import { useState, useContext, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../shared/utils";

type TransitionLayoutPropTypes = {
  children: React.ReactNode;
};

export const TransitionLayout: React.FC<TransitionLayoutPropTypes> = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline } = useContext(TransitionContext);
  const el = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(timeline.labels.length).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  return <div ref={el}>{displayChildren}</div>;
};
