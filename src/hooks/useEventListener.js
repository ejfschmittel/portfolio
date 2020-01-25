import {useRef, useEffect} from "react"

const useEventListener = (element, type, callback, callbackDependencies = []) => {
    const savedCallback = useRef();
  
      useEffect(() => {
        element.addEventListener(type, callback);
        return () => {
            element.removeEventListener(type, callback);
        };
      }, [])
    
      // Remember the latest callback.
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
    
      useEffect(() => {
        if (callbackDependencies !== null && callbackDependencies.length !== 0) {
            element.addEventListener(type, callback);
          return () => {
            element.removeEventListener(type, callback);
          };
        }
      }, callbackDependencies);
      
  }

  export default useEventListener;