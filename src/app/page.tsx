'use client'
import { useState } from "react"; // Importing useState hook to manage component state

// Define the structure of a Task object using TypeScript interface
interface Task {
  id: number; // Unique identifier for each task
  title: string; // The text content of the task
  completed: boolean; // Boolean flag to mark if the task is completed or not
}

export default function Home() {
  // useState is a React Hook that lets you add state to functional components
  // State to hold the list of tasks (array of Task objects)
  const [tasks, setTasks] = useState<Task[]>([]);
  // State to manage the user input for a new task (string value)
  const [newTask, setNewTask] = useState("");

  // Function to add a new task to the list
  const addTask = () => {
    if (!newTask.trim()) return; // Prevent adding empty tasks using trim() to remove spaces
    // Create a new task object with a unique ID using Date.now()
    const task: Task = { id: Date.now(), title: newTask, completed: false };
    // Update the state with the new task while keeping existing tasks using spread operator [...tasks]
    setTasks([...tasks, task]);
    // Clear the input field after adding the task
    setNewTask("");
  };

  // Function to toggle the completed state of a task
  const toggleTask = (id: number) => {
    // Using map() to update the state: If task ID matches, toggle completed status
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Function to delete a task from the list
  const deleteTask = (id: number) => {
    // Using filter() to remove the task with the given ID
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg my-10">
      {/** Title of the task manager */}
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      
      {/** Input field and add button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text" // Input field for user to type a task
          value={newTask} // Controlled component: value is managed by state
          onChange={(e) => setNewTask(e.target.value)} // Update state when input changes
          placeholder="Enter a task..." // Placeholder text inside input
          className="flex-1 p-2 rounded bg-gray-700 text-white"
        />
        <button onClick={addTask} className="bg-blue-500 px-4 py-2 rounded cursor-pointer">Add</button> 
        {/** Button to add a task when clicked, triggering addTask() */}
      </div>
      
      {/** List of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border-b border-gray-600">
            {/** Task title - Click to toggle completion */}
            <span 
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`} 
              onClick={() => toggleTask(task.id)}
            >
              {task.title}
            </span>
            {/** Delete button to remove task */}
            <button onClick={() => deleteTask(task.id)} className="text-red-400 cursor-pointer">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
