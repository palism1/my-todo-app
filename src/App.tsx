import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = () => {
    if (!inputValue.trim()) return; // Prevent empty todos
    const newTodo: Todo = {
      id: Math.random(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Toggle the completion status of a to do
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a to do
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* Displaying the Todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            {/* Here's the key part */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;