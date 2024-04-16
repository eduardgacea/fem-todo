import { TodosContext } from "../contexts/TodosContextProvider";
import { useContext } from "react";

import Filters from "./Filters";

function Menu() {
    const { todos, clearCompleted } = useContext(TodosContext);

    const activeItemsCount = todos.reduce((count, todo) => (todo.status === "active" ? ++count : count), 0);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{activeItemsCount} items left</div>
            <Filters />
            <div onClick={clearCompleted}>Clear Completed</div>
        </div>
    );
}

export default Menu;
