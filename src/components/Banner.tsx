import { DeviceContext } from "../contexts/DeviceContextProvider";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Device } from "../types/deviceTypes";
import { useContext } from "react";

import styled from "styled-components";

type BannerProps = {
    $platform: Device;
    $theme: string;
};

const StyledBanner = styled.div<BannerProps>`
    position: fixed;
    width: 100%;
    height: 375px;
    z-index: -1;
    background-image: url(bg-${props => props.$platform}-${props => props.$theme}.jpg);
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: cover;

    & img {
        width: 100%;
    }
`;

function Banner() {
    const { device } = useContext(DeviceContext);
    const { theme } = useContext(ThemeContext);

    return <StyledBanner $platform={device} $theme={theme} role="banner"></StyledBanner>;
}

export default Banner;
