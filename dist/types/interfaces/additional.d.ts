interface HeaderUi {
    days: string[];
    hasAside?: boolean;
}
interface SideHours {
    hours: string[];
}
interface InterfaceUi {
    header?: HeaderUi;
    sideHours?: SideHours;
}
export type { SideHours, InterfaceUi, HeaderUi };
