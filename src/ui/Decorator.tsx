import { Status } from "../types/todosTypes";

import styled from "styled-components";

type DecoratorProps = {
    status?: Status;
    onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

type StyledDecoratorProps = {
    $status: Status | undefined;
};

const StyledDecorator = styled.span<StyledDecoratorProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: ${props => {
        if (!props.$status || props.$status === "active") return "1px solid var(--clr-lt-very-light-grayish-blue)";
        return "none";
    }};
    background-image: ${props => (props.$status === "completed" ? "var(--grad-check-background)" : "none")};
    cursor: pointer;
`;

function Decorator({ status, onClick }: DecoratorProps) {
    return (
        <StyledDecorator $status={status} onClick={onClick}>
            {status === "completed" && <img src="icon-check.svg" />}
        </StyledDecorator>
    );
}

export default Decorator;
