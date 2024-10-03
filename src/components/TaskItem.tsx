interface Task {
    id: number;
    text: string;
    completed: boolean;

}

interface TaskItemProps {
    task: Task;
    toggleTask: (id:number) => void;
    deleteTask: (id:number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
    return (
        <li>
            {task.text}
            <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;