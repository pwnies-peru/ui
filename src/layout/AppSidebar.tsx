"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import { BarChart3, Palette, MessageSquare, Settings, TrendingUp, Zap } from "lucide-react";

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isActiveSection = (path: string) => pathname.startsWith(path);

  const menuSections = [
    {
      title: "ANALYTICS",
      items: [
        { name: "Overview", path: "/dashboard", icon: BarChart3 },
        { name: "Rendimiento", path: "/dashboard/performance", icon: TrendingUp },
      ]
    },
    {
      title: "CONFIGURACIÓN",
      items: [
        { name: "Personalización", path: "/dashboard/customization", icon: Palette },
        { name: "Comportamiento", path: "/dashboard/behavior", icon: Zap },
        { name: "Mensajes", path: "/dashboard/messages", icon: MessageSquare },
      ]
    },
    {
      title: "SISTEMA",
      items: [
        { name: "Ajustes", path: "/dashboard/settings", icon: Settings },
      ]
    }
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
          {menuSections.map((section, sectionIndex) => (
            <div key={section.title} className={sectionIndex > 0 ? "mt-6" : ""}>
              {(isExpanded || isHovered || isMobileOpen) && (
                <h2 className="mb-3 text-xs uppercase text-gray-400 font-inter font-medium tracking-wide px-4">
                  {section.title}
                </h2>
              )}
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-inter text-sm ${
                        isActive(item.path)
                          ? "bg-[#E8DD6C] text-black font-medium shadow-sm"
                          : "text-gray-600 hover:bg-gray-100 hover:text-black"
                      } ${!isExpanded && !isHovered ? "lg:justify-center lg:px-3" : ""}`}
                    >
                      <item.icon size={20} />
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span>{item.name}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
