import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [Tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTask = () => {
    if (!inputValue.trim()) return; // Prevent empty Tasks
    const newTask: Task = {
      id: Math.random(),
      text: inputValue,
      completed: false,
    };
    setTasks([...Tasks, newTask]);
    setInputValue("");
  };

  // Toggle the completion status of a to do
  const toggleTask = (id: number) => {
    setTasks(
      Tasks.map((Task) =>
        Task.id === id ? { ...Task, completed: !Task.completed } : Task
      )
    );
  };

  // Delete a to do
  const deleteTask = (id: number) => {
    setTasks(Tasks.filter((Task) => Task.id !== id));
  };

  // Handle key down in the input field 
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  }
  return (
    <div>
      <h1>Task List App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new Task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Displaying the Tasks */}
      <ul>
        {Tasks.map((Task) => (
          <li key={Task.id}>
            {Task.text}
            <button onClick={() => toggleTask(Task.id)}>
              {Task.completed ? "Undo" : "Complete"}
            </button>
            {/* Here's the key part */}
            <button onClick={() => deleteTask(Task.id)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;