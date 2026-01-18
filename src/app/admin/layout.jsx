import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./componets/AppSidebar";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
