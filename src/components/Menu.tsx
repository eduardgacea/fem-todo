import { ThemeContext } from "../contexts/ThemeContextProvider";
import { TodosContext } from "../contexts/TodosContextProvider";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import Filters from "./Filters";

import styled from "styled-components";

type StyledMenuProps = {
    $theme: Theme;
};

const StyledMenu = styled.div<StyledMenuProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--size-400) var(--size-700);

    & > p,
    & > button {
        font-family: inherit;
        border: none;
        background-color: transparent;
        font-size: var(--fs-s);
        color: ${props =>
            props.$theme === "light" ? "var(--clr-lt-dark-grayish-blue)" : "var(--clr-dt-dark-grayish-blue)"};
    }

    & > button {
        cursor: pointer;
    }

    & > button:hover {
        color: var(--clr-bright-blue);
    }
`;

function Menu() {
    const { theme } = useContext(ThemeContext);
    const { todos, clearCompleted } = useContext(TodosContext);

    const activeItemsCount = todos.reduce((count, todo) => (todo.status === "active" ? ++count : count), 0);

    return (
        <StyledMenu $theme={theme}>
            <p>{activeItemsCount} items left</p>
            <Filters />
            <button onClick={clearCompleted}>Clear Completed</button>
        </StyledMenu>
    );
}

export default Menu;
