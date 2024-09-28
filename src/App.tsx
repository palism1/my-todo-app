import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTask = () => {
    if (!inputValue.trim()) return; // Prevent empty Tasks
    const newTask: Task = {
      id: Math.random(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  // Toggle the completion status of a to do
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a to do
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            {/* Here's the key part */}
            <button onClick={() => deleteTask(task.id)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;