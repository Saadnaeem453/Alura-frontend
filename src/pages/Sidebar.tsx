import { NavLink, Link } from "react-router-dom";
import { ReactNode } from "react";
import { TbDashboard, TbPhoneCall, TbRobot, TbSettings, TbUser } from "react-icons/tb"

export interface SidebarProps {
    sidebarCollapsed: boolean
}

export interface SidebarItemProps {
    to: string,
    children: ReactNode,
    icon: ReactNode
}

export function SidebarItem({ to, children, icon }: SidebarItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `p-2 flex items-center gap-3 rounded-md ${isActive ? "text-white bg-primary" : ""}`}>
            {icon}
            {children}
        </NavLink>
    );
}

export function Sidebar({ sidebarCollapsed }: SidebarProps) {
    return (
        <div
            className={`w-64 p-5 h-full overflow-auto absolute bg-white ${sidebarCollapsed ? "" : "translate-x-[-100%]"} absolute md:translate-x-[0%] transition-transform md:relative md:block`}>
            <Link to="/" className="block mb-16 max-w-full">
                <img src="images/vanilla-voice-ai-horizontal.png" className="max-w-full" alt="Logo" />
            </Link>
            <div className="flex flex-col gap-1">
                <SidebarItem to="/user/dashboard" icon={<TbDashboard />}>
                    Dashboard
                </SidebarItem>
                <SidebarItem to="/files" icon={<TbUser />}>
                    Leads
                </SidebarItem>
                <SidebarItem to="/assistant" icon={<TbRobot />}>
                    Assistant
                </SidebarItem>
                <SidebarItem to="/call-logs" icon={<TbPhoneCall />}>
                    Call Logs
                </SidebarItem>
                <SidebarItem to="/settings" icon={<TbSettings />}>
                    Settings
                </SidebarItem>
            </div>
        </div>
    );
}