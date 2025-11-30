"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import { BarChart3, TrendingUp, MessageSquare, Clock, Target, DollarSign, HelpCircle } from "lucide-react";

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
  ];

  const kpiItems = [
    { name: "Conversión", icon: TrendingUp },
    { name: "Revenue", icon: DollarSign },
    { name: "Regateo", icon: Target },
    { name: "Preguntas", icon: MessageSquare },
    { name: "Categorías", icon: HelpCircle },
    { name: "Horas Pico", icon: Clock },
  ];

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-gray-950/80 backdrop-blur-xl border-white/10 text-white h-screen transition-all duration-300 ease-in-out z-50 border-r 
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
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          {(isExpanded || isHovered || isMobileOpen) && (
            <span className="text-2xl font-bold text-white">Negocia</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-1">
        <nav className="mb-6">
          {/* Main Menu */}
          <div className="mb-6">
            {(isExpanded || isHovered || isMobileOpen) && (
              <h2 className="mb-4 text-xs uppercase text-gray-500 font-medium">
                Principal
              </h2>
            )}
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
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

          {/* KPIs Section */}
          {(isExpanded || isHovered || isMobileOpen) && (
            <div>
              <h2 className="mb-4 text-xs uppercase text-gray-500 font-medium">
                KPIs del Agente
              </h2>
              <ul className="flex flex-col gap-1">
                {kpiItems.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-center gap-3 px-4 py-2 text-gray-500 text-sm">
                      <item.icon size={16} />
                      <span>{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Widget at bottom */}
        {(isExpanded || isHovered || isMobileOpen) && (
          <div className="mt-auto mb-6 mx-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Agente Activo</span>
            </div>
            <p className="text-gray-500 text-xs">
              Última sincronización hace 2 min
            </p>
            <Link
              href="/"
              className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm hover:bg-white/10 transition-all"
            >
              Ir a Landing
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AppSidebar;
