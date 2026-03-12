import React, { type PropsWithChildren } from "react";
import { useThemeContext } from "../theme/themeContext";
import { HeadingType } from "../enums/heading.interface";

interface HeadingProps {
  type: HeadingType;
}

const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  children,
  type = HeadingType.h1,
}) => {
  const { isDarkMode } = useThemeContext();
  const renderHeading = () => {
    switch (type) {
      case HeadingType.h1:
        return (
          <h1
            className={`mb-4 text-center text-3xl sm:text-4xl font-bold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
          >
            {children}
          </h1>
        );

      case HeadingType.h2:
        return (
          <h2
            className={`mb-4 pt-4 text-center text-xl sm:text-2xl font-bold leading-tight ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
          >
            {children}
          </h2>
        );
    }
  };
  return renderHeading();
};

export default Heading;
