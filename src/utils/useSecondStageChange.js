const { useRef, useEffect } = require('react');

function useSecondStateChange(key) {
  const firstRender = useRef(false);

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
    }
  }, [key]);

  return firstRender.current;
}

export default useSecondStateChange;
