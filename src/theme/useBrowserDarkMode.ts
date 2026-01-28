import { useState, useEffect } from "react";

const useBrowserDarkMode = () => {
  // Initial state is based on the current system preference
  const [isBrowserDarkMode, setIsBrowserDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Handler function to update state on change
    const handleChange = (event: MediaQueryListEvent) => {
      setIsBrowserDarkMode(event.matches);
    };

    // Add event listener
    // Note: addEventListener is preferred over addListener for modern browsers
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function to remove the listener
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return { isBrowserDarkMode };
};

export default useBrowserDarkMode;
