import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import styled from "styled-components";

type StyleFooterProps = {
    $theme: Theme;
};

const StyledFooter = styled.footer<StyleFooterProps>`
    font-size: var(--fs-s);
    color: ${props =>
        props.$theme === "light" ? "var(--clr-lt-dark-grayish-blue)" : "var(--clr-dt-very-dark-grayish-blue)"};
    text-align: center;
    margin: var(--size-1000) 0;
    font-weight: var(--fw-semibold);
`;

function Footer() {
    const { theme } = useContext(ThemeContext);

    return <StyledFooter $theme={theme}>Drag and drop to reorder list</StyledFooter>;
}

export default Footer;
