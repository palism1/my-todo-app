interface TaskCounterProps {
    tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {
    const totalTasks = tasks.length 
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </div>
    );
};

export default TaskCounter;