import { useState, useEffect } from "react";

export interface UseMountedReturnType {
  isMounted: boolean;
}

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
