import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [value, setValue] = useState(false);

  const handleChange = useCallback((event) => setValue(event.matches), []);

  useEffect(() => {
    const result = matchMedia(query);
    result.addEventListener("change", handleChange);

    setValue(result.matches);

    return () => result.removeEventListener("change", handleChange);
  }, [query, handleChange]);

  return value;
};
