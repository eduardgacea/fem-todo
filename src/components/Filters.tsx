import { TodosContext } from "../contexts/TodosContextProvider";
import { FILTER_OPTIONS } from "../config/config";
import { useContext } from "react";

function Filters() {
    const { setFilter } = useContext(TodosContext);

    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            {FILTER_OPTIONS.map(filter => (
                <div key={filter} style={{ cursor: "pointer" }} onClick={() => setFilter(filter)}>
                    {filter}
                </div>
            ))}
        </div>
    );
}

export default Filters;
