import { useEffect, useRef } from "react";

export default function useInterval(callback, delay, flag) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && flag !== false) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, flag]);
}
