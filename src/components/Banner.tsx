import { ThemeContext } from "../contexts/ThemeContextProvider";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { MOBILE_BREAKPOINT } from "../config/config";
import { useContext } from "react";

import styled from "styled-components";

type BannerProps = {
    $platform: string;
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
    const width = useScreenWidth();
    const platform = width > MOBILE_BREAKPOINT ? "desktop" : ("mobile" as string);

    const { theme } = useContext(ThemeContext);

    return <StyledBanner $platform={platform} $theme={theme} role="banner"></StyledBanner>;
}

export default Banner;
