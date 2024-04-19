import { createContext } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { MOBILE_BREAKPOINT } from "../config/config";
import { Device } from "../types/deviceTypes";

const DeviceContext = createContext<{ device: Device }>({
    device: undefined,
});

function DeviceContextProvider({ children }: { children: React.ReactNode }) {
    const width = useScreenWidth();
    const device: Device = width >= MOBILE_BREAKPOINT ? "desktop" : "mobile";

    return <DeviceContext.Provider value={{ device }}>{children}</DeviceContext.Provider>;
}

export { DeviceContext, DeviceContextProvider };
