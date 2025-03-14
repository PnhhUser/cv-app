import React from "react";

export const LogoComponent: React.FC<{
  logo: string;
  tooltipName?: string;
}> = ({ logo, tooltipName }) => {
  return (
    <div className="min-w-[50px] min-h-[50px] w-[60px] h-[60px] bg-gray-100 rounded-lg shadow p-3 relative group cursor-pointer">
      <img src={logo} alt="image" className="rounded size-full" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltipName}
      </span>
    </div>
  );
};
