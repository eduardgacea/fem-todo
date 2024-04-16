import { ThemeContext } from "../contexts/ThemeContextProvider";
import { TodosContext } from "../contexts/TodosContextProvider";
import { Status, Todo } from "../types/todosTypes";
import { Theme } from "../types/themeTypes";
import { useContext } from "react";

import Decorator from "../ui/Decorator";

import styled from "styled-components";

type TodoItemProps = {
    todo: Todo;
    i: number;
    onDragStart: (i: number) => void;
    onDragEnter: (i: number) => void;
    onDrop: () => void;
};

type DescriptionProps = {
    $status: Status;
    $theme: Theme;
};

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > div {
        display: flex;
        justify-content: center;
        flex-basis: 52px;
    }
`;

const Description = styled.p<DescriptionProps>`
    text-decoration: ${props => (props.$status === "active" ? "none" : "line-through")};
    color: ${props => {
        switch (props.$theme) {
            case "light":
                return props.$status === "active" ? "green" : "red";
            case "dark":
                return props.$status === "active" ? "blue" : "white";
        }
    }};
`;

function TodoItem({ todo, i, onDragStart, onDragEnter, onDrop }: TodoItemProps) {
    const { theme } = useContext(ThemeContext);
    const { id, description, status } = todo;
    const { removeTodo, toggleState } = useContext(TodosContext);

    const handleDragStart = () => onDragStart(i);
    const handleDragEnter = () => onDragEnter(i);
    const handleDrop = () => onDrop();

    return (
        <Container draggable="true" onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragEnd={handleDrop}>
            <div>
                <Decorator onClick={() => toggleState(id)} />
            </div>
            <Description $status={status} $theme={theme}>
                {description}
            </Description>
            <img src="icon-cross.svg" onClick={() => removeTodo(id)} />
        </Container>
    );
}

export default TodoItem;
