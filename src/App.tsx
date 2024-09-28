import { useState } from "react";

interface Todo{
  id: number;
  text: string; 
  completed: boolean
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('')

  const addTodo = () => {
    const newTodo: Todo = {
      id: Math.random(),
      text: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
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
    </div>
  );
};

export default App;