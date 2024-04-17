import { TodosContext } from "../contexts/TodosContextProvider";
import { useContext, useState } from "react";

import TodoItem from "./TodoItem";

import styled from "styled-components";

const StyledTodoList = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
`;

function TodoList() {
    const { todos, filter, reorderTodos } = useContext(TodosContext);

    const [target, setTarget] = useState<number>();
    const [dragged, setDragged] = useState<number>();

    const filteredTodos = todos.filter(todo => {
        if (filter === "all") return todo;
        return todo.status === filter;
    });

    const onDragStart = (i: number) => setDragged(i);
    const onDragEnter = (i: number) => setTarget(i);
    const onDrop = () => reorderTodos(target, dragged);

    return (
        <StyledTodoList as="ol">
            {filteredTodos.map((todo, i) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    i={i}
                    onDragStart={onDragStart}
                    onDragEnter={onDragEnter}
                    onDrop={onDrop}
                />
            ))}
        </StyledTodoList>
    );
}

export default TodoList;
