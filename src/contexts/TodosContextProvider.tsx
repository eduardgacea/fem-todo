import { TodosContextState, TodosContextAction, Todo, Id, Filter } from "../types/todosTypes";
import { createContext, useCallback, useEffect, useReducer } from "react";

import initialTodos from "../data/todos.json";

const initialState: TodosContextState = {
    todos: [],
    filter: "all",
    addTodo: () => {},
    removeTodo: () => {},
    toggleState: () => {},
    setFilter: () => {},
    clearCompleted: () => {},
    reorderTodos: () => {},
};

const TodosContext = createContext<TodosContextState>(initialState);

function reducer(prevState: TodosContextState, action: TodosContextAction): TodosContextState {
    switch (action.type) {
        case "loadTodos":
            return { ...prevState, todos: [...action.payload] };
        case "addTodo":
            return { ...prevState, todos: [...prevState.todos, action.payload] };
        case "removeTodo":
            return { ...prevState, todos: prevState.todos.filter(todo => todo.id !== action.payload) };
        case "toggleState":
            return {
                ...prevState,
                todos: prevState.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, status: todo.status === "active" ? "completed" : "active" };
                    }
                    return todo;
                }),
            };
        case "setFilter":
            return { ...prevState, filter: action.payload };
        case "clearCompleted":
            return { ...prevState, todos: prevState.todos.filter(todo => todo.status !== "completed") };
        case "reorderTodos": {
            const { target, dragged } = action.payload;
            // if the dragged element is dropped over a non-droppable element or over itself, do nothing
            if (target === undefined || dragged === undefined || target === dragged) return prevState;
            // else, return a new reordered list
            return {
                ...prevState,
                todos: prevState.todos.map((todo, i, prevTodos) => {
                    if (i === target) return prevTodos[dragged];
                    if (dragged > target) {
                        if (i < target || i > dragged) return todo;
                        else return prevTodos[i - 1];
                    } else {
                        if (i < dragged || i > target) return todo;
                        else return prevTodos[i + 1];
                    }
                }),
            };
        }
        default:
            return prevState;
    }
}

function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [{ todos, filter }, dispatch] = useReducer(reducer, initialState);

    const loadTodos = useCallback(() => dispatch({ type: "loadTodos", payload: initialTodos.todos as Todo[] }), []);

    const addTodo = (todo: Todo) => dispatch({ type: "addTodo", payload: todo });
    const removeTodo = (id: Id) => dispatch({ type: "removeTodo", payload: id });
    const toggleState = (id: Id) => dispatch({ type: "toggleState", payload: id });
    const setFilter = (filter: Filter) => dispatch({ type: "setFilter", payload: filter });
    const clearCompleted = () => dispatch({ type: "clearCompleted" });
    const reorderTodos = (target: number | undefined, dragged: number | undefined) => {
        dispatch({ type: "reorderTodos", payload: { target, dragged } });
    };

    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    return (
        <TodosContext.Provider
            value={{ todos, filter, addTodo, removeTodo, toggleState, setFilter, clearCompleted, reorderTodos }}
        >
            {children}
        </TodosContext.Provider>
    );
}

export { TodosContext, TodosContextProvider };
