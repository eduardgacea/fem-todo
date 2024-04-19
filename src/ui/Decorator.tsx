import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Status } from "../types/todosTypes";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import styled from "styled-components";

type DecoratorProps = {
    status?: Status;
    onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

type StyledDecoratorProps = {
    $theme: Theme;
    $status: Status | undefined;
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-basis: var(--size-1200);
`;

const StyledDecorator = styled.span<StyledDecoratorProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: ${props => {
        const status = props.$status;
        switch (props.$theme) {
            case "light":
                return status === "active" || !status ? "1px solid var(--clr-lt-very-light-grayish-blue)" : "none";
            case "dark":
                return status === "active" || !status ? "1px solid var(--clr-dt-very-dark-grayish-blue)" : "none";
        }
    }};
    background-image: ${props => (props.$status === "completed" ? "var(--grad-check-background)" : "none")};
    cursor: pointer;
`;

function Decorator({ status, onClick }: DecoratorProps) {
    const { theme } = useContext(ThemeContext);

    return (
        <Container>
            <StyledDecorator $theme={theme} $status={status} onClick={onClick}>
                {status === "completed" && <img src="icon-check.svg" />}
            </StyledDecorator>
        </Container>
    );
}

export default Decorator;
