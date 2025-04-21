import { useState } from "react";
import { TbAlignLeft, TbLogout, TbUser, TbX } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";

export interface PanelContentProps {
    sidebarCollapsed: boolean,
    setSidebarCollapsed: (
        x: boolean |
            ((x: boolean) => boolean)
    ) => void
}

export function PanelContent({ sidebarCollapsed, setSidebarCollapsed }: PanelContentProps) {
    const [droppedDown, setDroppedDown] = useState(false);
    const navigate = useNavigate()

    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="p-6 flex-grow bg-slate-100 overflow-auto">
            <div className="flex justify-between mb-10">
                <div>
                    <button
                        className={`cursor-pointer p-1 ${sidebarCollapsed ? "fixed left-72" : ""} left-0 transition-all md:hidden`}
                        onClick={() => setSidebarCollapsed(old => !old)}>
                        {sidebarCollapsed ? <TbX /> : <TbAlignLeft />}
                    </button>
                </div>
                <div>
                    <button
                        className="rounded-full p-2 ring-1 items-center text-center"
                        onClick={() => setDroppedDown(old => !old)}>
                        <TbUser />
                    </button>
                    <div className={`absolute w-32 bg-white shadow-sm rounded-md flex flex-col right-3 ${droppedDown ? '' : 'hidden'}`}>
                        <Link to="/profile" className="p-2 text-left flex gap-2 items-center">
                            <TbUser />
                            <div>Profile</div>
                        </Link>
                        <button className="p-2 text-left flex gap-2 items-center" onClick={logout}>
                            <TbLogout />
                            <div>Logout</div>
                        </button>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}