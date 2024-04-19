import Filters from "./Filters";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--clr-white);
    margin-top: var(--size-600);
    padding: var(--size-500) var(--size-700);
    box-shadow: var(--shadow-transparent-black);
`;

function FiltersComponent() {
    return (
        <Container>
            <Filters />
        </Container>
    );
}

export default FiltersComponent;
