import { ThemeContext } from "../contexts/ThemeContextProvider";
import { TodosContext } from "../contexts/TodosContextProvider";
import { Filter } from "../types/todosTypes";
import { capitalize } from "../utils/utils";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import styled from "styled-components";

type StyledFilterItemProps = {
    $theme: Theme;
    $isActive: boolean;
};

const StyledFilterItem = styled.div<StyledFilterItemProps>`
    font-size: var(--fs-s);
    font-weight: var(--fw-bold);
    color: ${props => {
        if (props.$isActive) return "var(--clr-bright-blue)";
        return props.$theme === "light" ? "var(--clr-lt-dark-grayish-blue)" : "var(--clr-dt-dark-grayish-blue)";
    }};
    cursor: pointer;

    &:hover {
        color: var(--clr-bright-blue);
    }
`;

function FilterItem({ filter }: { filter: Filter }) {
    const { theme } = useContext(ThemeContext);
    const { filter: activeFilter, setFilter } = useContext(TodosContext);

    return (
        <StyledFilterItem
            $theme={theme}
            $isActive={activeFilter === filter ? true : false}
            onClick={() => setFilter(filter)}
        >
            {capitalize(filter)}
        </StyledFilterItem>
    );
}

export default FilterItem;
