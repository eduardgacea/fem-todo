import { ThemeContext } from "../contexts/ThemeContextProvider";
import { FILTER_OPTIONS } from "../config/config";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import FilterItem from "./FilterItem";

import styled from "styled-components";

type ContainerProps = {
    $theme: Theme;
};

const Container = styled.div<ContainerProps>`
    display: flex;
    gap: var(--size-400);
`;

function Filters() {
    const { theme } = useContext(ThemeContext);

    return (
        <Container $theme={theme}>
            {FILTER_OPTIONS.map(filter => (
                <FilterItem key={filter} filter={filter} />
            ))}
        </Container>
    );
}

export default Filters;
