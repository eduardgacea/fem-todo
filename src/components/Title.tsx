import { ThemeContext } from "../contexts/ThemeContextProvider";
import { useContext } from "react";

import styled from "styled-components";

const StyledBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 {
        font-size: var(--size-900);
        font-weight: var(--fw-bold);
        letter-spacing: var(--size-300);
        color: var(--clr-lt-very-light-gray);
    }
`;

function Title() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <StyledBanner>
            <h1>TODO</h1>
            <img src={`icon-${theme === "light" ? "moon" : "sun"}.svg`} onClick={toggleTheme} />
        </StyledBanner>
    );
}

export default Title;
