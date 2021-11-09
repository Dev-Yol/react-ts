import React, { useState, useLayoutEffect, useEffect } from "react";
import usePrevious from "utils/hooks/usePrevious";
import calculateBoundingBoxes from "utils/helpers/calculateBoundingBoxes";

const Animator = ({ children }: { children: any }) => {
  const [boundingBox, setBoundingBox] = useState<any>({});
  const [prevBoundingBox, setPrevBoundingBox] = useState<any>({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
    //debugger

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, child => {
        //debugger
        const domNode = child?.ref?.current;
        const firstBox = prevBoundingBox[child.key];
        const lastBox = boundingBox[child.key];
        const changeInX = firstBox?.left - lastBox?.left;

        if (changeInX) {
          requestAnimationFrame(() => {
            // Before the DOM paints, invert child to old position
            domNode.style.transform = `translateX(${changeInX}px)`;
            domNode.style.transition = "transform 0s";

            requestAnimationFrame(() => {
              // After the previous frame, remove
              // the transistion to play the animation
              domNode.style.transform = "";
              domNode.style.transition = "transform 300ms";
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

export default Animator;
