import { useState, useEffect, useRef } from "react";

const easeOutCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
};

const DURATION = 2000;

const useCountUp = (maximumNum: number, duration = DURATION) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef(0);

  let startTime: number;

  const animate = (time: DOMHighResTimeStamp) => {
    if (startTime === undefined) {
      startTime = time;
    }

    const elapsedTime = time - startTime;
    const progress = easeOutCirc(elapsedTime / duration);

    if (elapsedTime <= duration) {
      setCount(() => {
        return progress * maximumNum;
      });
    } else {
      return;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return Math.round(count);
};

export default useCountUp;
