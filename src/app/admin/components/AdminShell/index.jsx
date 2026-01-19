"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../AppSidebar";

export default function AdminShell({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full min-h-screen">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
