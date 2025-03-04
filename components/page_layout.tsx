import React from "react";

const PageLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className="" }) => {
  return <div className={`w-full h-full inline-block z-0 px-8 md:px-32 ${className}`}>{children}</div>;
};

export default PageLayout;
