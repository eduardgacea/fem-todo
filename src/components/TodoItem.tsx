import { ThemeContext } from "../contexts/ThemeContextProvider";
import { TodosContext } from "../contexts/TodosContextProvider";
import { Status, Todo } from "../types/todosTypes";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import Decorator from "../ui/Decorator";

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../config/config";
import { DeviceContext } from "../contexts/DeviceContextProvider";

type TodoItemProps = {
    todo: Todo;
    i: number;
    onDragStart: (i: number) => void;
    onDragEnter: (i: number) => void;
    onDrop: () => void;
};

type MainContainerProps = {
    $theme: Theme;
};

type DescriptionProps = {
    $status: Status;
    $theme: Theme;
};

const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    align-items: center;
    padding: var(--size-600) 0;
    border-bottom: 1px solid var(--clr-lt-very-light-grayish-blue);
    border-bottom: 1px solid
        ${props =>
            props.$theme === "light"
                ? "var(--clr-lt-very-light-grayish-blue)"
                : "var(--clr-dt-very-dark-grayish-blue)"};
`;

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: var(--size-700);
    flex: 1;

    & > img:hover {
        cursor: pointer;
    }
`;

const Description = styled.p<DescriptionProps>`
    font-size: var(--fs-s);
    font-weight: var(--fw-semibold);
    text-decoration: ${props => (props.$status === "active" ? "none" : "line-through")};
    color: ${props => {
        switch (props.$theme) {
            case "light":
                return props.$status === "active"
                    ? "var(--clr-lt-very-dark-grayish-blue)"
                    : "var(--clr-lt-light-grayish-blue)";
            case "dark":
                return props.$status === "active"
                    ? "var(--clr-dt-light-grayish-blue)"
                    : "var(--clr-dt-very-dark-grayish-blue)";
        }
    }};

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
        font-size: var(--fs--l);
    }
`;

const DeleteIcon = styled.div`
    margin-left: var(--size-400);
`;

function TodoItem({ todo, i, onDragStart, onDragEnter, onDrop }: TodoItemProps) {
    const { theme } = useContext(ThemeContext);
    const { device } = useContext(DeviceContext);
    const { id, description, status } = todo;
    const { removeTodo, toggleState } = useContext(TodosContext);

    const handleDragStart = () => onDragStart(i);
    const handleDragEnter = () => onDragEnter(i);
    const handleDrop = () => onDrop();

    return (
        <MainContainer
            as="li"
            $theme={theme}
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDrop}
        >
            <Decorator status={status} onClick={() => toggleState(id)} />
            <DescriptionContainer>
                <Description $status={status} $theme={theme}>
                    {description}
                </Description>
                {device === "mobile" && (
                    <DeleteIcon>
                        <img src="icon-cross.svg" onClick={() => removeTodo(id)} />
                    </DeleteIcon>
                )}
            </DescriptionContainer>
        </MainContainer>
    );
}

export default TodoItem;
