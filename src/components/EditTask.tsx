import React, { useState } from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
}

interface EditTaskProps {
    task: Task;
    onSave: (updatedTask: Task) => void;
    onCancel: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onSave, onCancel }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

  // Function to handle save
    const handleSave = () => {
    const updatedTask: Task = {
      ...task,    // Spread operator to copy the existing task
      title,      // Replace with the new title
      description // Replace with the new description
    };
    onSave(updatedTask);
    };

  // Function to handle key press
    const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission behavior
    handleSave();
        }
    };

    return (
    <div className="edit-task">
        <h2>Edit Task</h2>
        <div>
        <label htmlFor="task-title">Title:</label>
        <input
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}  
        />
        </div>
        <div>
        <label htmlFor="task-desc">Description:</label>
        <textarea
            id="task-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}  
        />
        </div>
        <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
    </div>
    );
};

export default EditTask;