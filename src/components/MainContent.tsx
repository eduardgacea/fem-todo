import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import TodoList from "./TodoList";
import Menu from "./Menu";

import styled from "styled-components";

type ContainerProps = {
    $theme: Theme;
};

const Container = styled.div<ContainerProps>`
    background-color: ${props => (props.$theme === "light" ? "var(--clr-white)" : "var(--clr-dt-very-dark-blue)")};
    box-shadow: 0 0 12px 3px var(--shadow-transparent-black);
    padding: var(--size-400) 0;
    border-radius: var(--size-200);
`;

function MainContent() {
    const { theme } = useContext(ThemeContext);

    return (
        <Container $theme={theme}>
            <TodoList />
            <Menu />
        </Container>
    );
}

export default MainContent;
