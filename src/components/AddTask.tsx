interface AddTaskProps {
    inputValue: string;  // The current value of the input
    setInputValue: (value: string) => void;  // Function to update the input value
    addTask: () => void;  // Function to handle adding the task
}

const AddTask: React.FC<AddTaskProps> = ({ inputValue, setInputValue, addTask }) => {
    // Handle pressing the Enter key to submit the task
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();  // Add the task when Enter is pressed
        }
    };
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            {/*adds task when button is clicked*/}
        </div>
    );
};

export default AddTask;