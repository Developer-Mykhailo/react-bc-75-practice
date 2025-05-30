import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch {
      return defaultValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }, [key, defaultValue]);
  return [value, setValue];
};
