"use client";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "Students" },
    { icon: BookOpen, label: "Programmes" },
    { icon: CreditCard, label: "Payments" },
    { icon: Settings, label: "Settings" },
  ];

  return (
<aside className="
hidden lg:flex
w-64
bg-slate-900
text-white
min-h-screen
fixed
left-0
top-0
flex-col
">      <div className="p-6 border-b border-slate-800">
        <h1 className="font-bold text-xl">GOUNI</h1>
        <p className="text-slate-400 text-sm">
          Admissions Dashboard
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}