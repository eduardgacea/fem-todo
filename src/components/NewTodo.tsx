import { ThemeContext } from "../contexts/ThemeContextProvider";
import { TodosContext } from "../contexts/TodosContextProvider";
import { useContext, useState } from "react";
import { Theme } from "../types/themeTypes";
import { Todo } from "../types/todosTypes";

import Decorator from "../ui/Decorator";

import styled from "styled-components";

type ContainerProps = {
    $theme: Theme;
};

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    margin-top: var(--size-1000);
    margin-bottom: var(--size-700);

    /* main container and input selector */
    &,
    & > form > input[type="text"] {
        background-color: ${props =>
            props.$theme === "light" ? "var(--clr-white)" : "var(--clr-dt-very-dark-desaturated-blue)"};
        border-radius: var(--size-200);
    }

    /* form selector */
    & > form {
        flex: 1;
    }

    /* input selector */
    & > form > input[type="text"] {
        width: 100%;
        font-family: var(--ff-primary);
        font-size: var(--fs-l);
        padding: var(--size-600) 0;
        border: none;
        outline: none;
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-very-dark-blue)" : "var(--clr-white)")};
    }

    & > form > input[type="text"]::placeholder {
        color: ${props =>
            props.$theme === "light" ? "var(--clr-lt-dark-grayish-blue)" : "var(--clr-dt-dark-grayish-blue)"};
    }
`;

function NewTodo() {
    const { theme } = useContext(ThemeContext);
    const [description, setDescription] = useState("");

    const { addTodo } = useContext(TodosContext);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!description.trim()) return; // TODO: better handling of invalid inputs
        const newTodo: Todo = {
            id: Date.now(),
            description,
            status: "active",
        };
        addTodo(newTodo);
        setDescription("");
    }

    return (
        <Container $theme={theme}>
            <Decorator />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Create a new todo..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </form>
        </Container>
    );
}

export default NewTodo;
