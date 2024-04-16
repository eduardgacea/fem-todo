import { STATUS_OPTIONS, FILTER_OPTIONS } from "../config/config";

type StatusOptions = typeof STATUS_OPTIONS;
type FilterOptions = typeof FILTER_OPTIONS;
type ReorderIndices = { target: number | undefined; dragged: number | undefined };

export type Status = StatusOptions[number];
export type Filter = FilterOptions[number];
export type Id = number;

export type Todo = {
    id: Id;
    description: string;
    status: Status;
};

export type TodosContextState = {
    todos: Todo[];
    filter: Filter;
    addTodo: (todo: Todo) => void;
    removeTodo: (id: Id) => void;
    toggleState: (id: Id) => void;
    setFilter: (filter: Filter) => void;
    clearCompleted: () => void;
    reorderTodos: (target: number | undefined, dragged: number | undefined) => void;
};

export type TodosContextAction =
    | { type: "loadTodos"; payload: Todo[] }
    | { type: "addTodo"; payload: Todo }
    | { type: "removeTodo"; payload: Id }
    | { type: "toggleState"; payload: Id }
    | { type: "setFilter"; payload: Filter }
    | { type: "clearCompleted" }
    | { type: "reorderTodos"; payload: ReorderIndices };
