interface TaskFilterProps {
    filter: string;
    setFilter: (filter:string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> =({ filter, setFilter}) => {
    return (
        <div>
            <button onClick={() => setFilter("all")} disabled={filter === "all"}>
                All
            </button>
            <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
                Completed
            </button>
            <button onClick={() => setFilter("incomplete")} disabled={filter === "incomplete"}>
                In Progress 
            </button>
        </div>
    );
};

export default TaskFilter;