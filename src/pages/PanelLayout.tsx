import { Sidebar } from "./Sidebar";
import { PanelContent } from "./Panelcontent";
import { useState } from "react";

export function PanelLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar
                sidebarCollapsed={sidebarCollapsed} />
            <PanelContent
                sidebarCollapsed={sidebarCollapsed}
                setSidebarCollapsed={setSidebarCollapsed} />
        </div>
    );
}