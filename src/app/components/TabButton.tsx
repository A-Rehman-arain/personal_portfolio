import React from "react";

// Interface for the props
interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  className: string;  // Ensure className is accepted here
  children: string;
}

const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, className, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`${className} ${active ? "bg-[#2F4156]" : "hover:bg-[#4C6B78]"} px-6 py-2 rounded-lg transition duration-300`} // Apply background color for active tab
    >
      {children}
    </button>
  );
};

export default TabButton;
