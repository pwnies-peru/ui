"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import { BarChart3 } from "lucide-react";

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
  ];

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white border-gray-200 text-black h-screen transition-all duration-300 ease-in-out z-50 border-r shadow-sm
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          {(isExpanded || isHovered || isMobileOpen) && (
            <span className="text-2xl font-playfair font-bold text-black">
              NegocIA<span className="text-[#B85C5C]">!</span>
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-1">
        <nav className="mb-6">
          {/* Main Menu */}
          <div className="mb-6">
            {(isExpanded || isHovered || isMobileOpen) && (
              <h2 className="mb-4 text-xs uppercase text-gray-500 font-inter font-medium tracking-wide">
                NAVEGACIÓN
              </h2>
            )}
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-inter ${
                      isActive(item.path)
                        ? "bg-[#E8DD6C] text-black font-medium shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    } ${!isExpanded && !isHovered ? "lg:justify-center lg:px-3" : ""}`}
                  >
                    <item.icon size={22} />
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="font-medium">{item.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </div>
    </aside>
  );
};

export default AppSidebar;
