import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import TodoList from "./TodoList";
import Menu from "./Menu";

import styled from "styled-components";

type ContainerProps = {
    $theme: Theme;
};

const Container = styled.main<ContainerProps>`
    background-color: ${props =>
        props.$theme === "light" ? "var(--clr-white)" : "var(--clr-dt-very-dark-desaturated-blue)"};
    box-shadow: var(--shadow-transparent-black);
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
