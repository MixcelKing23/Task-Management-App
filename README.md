# Task Manager App

This is a simple Task Management application built using Next.js and React. The app allows users to add, complete, and delete tasks. It is styled with Tailwind CSS for a modern and responsive UI.

## Features

- **Add Tasks**: Users can input and add tasks to the list.
- **Mark Tasks as Completed**: Click on a task to toggle its completion status.
- **Delete Tasks**: Remove tasks from the list when they are no longer needed.
- **Responsive UI**: Styled with Tailwind CSS for a modern look and feel.

## Technologies Used

- **Next.js** - React framework for server-side rendering.
- **React Hooks (useState)** - For managing state within functional components.
- **Tailwind CSS** - For styling the components.
- **TypeScript**: Ensuring type safety.

## Installation & Setup

To get started, clone this repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/MixcelKing23/Task-Management-App.git

# Navigate to the project folder
cd Task-Management-App

# Install dependencies
npm install  # or yarn install

# Run the development server
npm run dev  # or yarn dev
```
### Open the App
Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Project Structure

```
📂Task-Management-App/
 ┣ 📂 app/
 ┃ ┣ 📜 page.tsx    # Main Task Manager component
 ┣ 📂 public/         # Static assets
 ┣ 📂 styles/         # Global styles
 ┣ 📜 README.md       # Project documentation
 ┣ 📜 package.json    # Project dependencies and scripts
 ┣ 📜 next.config.js  # Next.js configuration
 ┣ 📜 tailwind.config.js  # Tailwind CSS configuration
 ┣ 📜 tsconfig.json  # TypeScript configuration
```

## Usage

1. Enter a task in the input field.
2. Click the "Add" button to add the task to the list.
3. Click on a task to mark it as completed.
4. Click the "Delete" button to remove a task.

## Code Breakdown

### **Core JavaScript and React Concepts**

#### **1. `trim()`**
Removes whitespace from both ends of a string, ensuring that users cannot add empty tasks consisting only of spaces.

#### **2. Declaring `const` Variables**
`const` is used to define variables that **cannot be reassigned** after initialization. It is primarily used for functions and objects that should remain unchanged.

#### **3. `.map()`**
The `.map()` method iterates over an array and returns a **new modified array**. It is used in `toggleTask` to update the `completed` status of a task without modifying the original array.

#### **4. `.filter()`**
The `.filter()` method creates a **new array** containing only elements that meet a specific condition. In this code, it is used in `deleteTask` to remove a task from the list by filtering out the selected task.

#### **5. `onClick` Event**
The `onClick` event handler triggers a function when an element is clicked. It is used on buttons to **add, toggle, and delete** tasks.

#### **6. `<span>` Element**
The `<span>` element is an inline HTML element used to **display and manipulate text**. In this app, it is used to show the **task title** and toggle its completion status when clicked.

#### **7. `<button>` Element**
The `<button>` element creates interactive buttons. It is used for **adding and deleting** tasks.

#### **8. `<input>` Element**
The `<input>` element allows users to enter data. It serves as a **controlled input field**, where its value is managed using the `useState` hook.

### **Code Functions**

#### **1. The `addTask` Function**
- Ensures that the input is **not empty**.
- Creates a **new task object** with a unique `id`, the user’s input as `title`, and `completed: false`.
- Updates the **tasks state** with the new task.
- **Clears the input field** after adding the task.

#### **2. The `toggleTask` Function**
- Finds the task by its `id`.
- **Toggles** the `completed` property (`true` ⇄ `false`).
- Updates the `tasks` state with the modified list.

#### **3. The `deleteTask` Function**
- Filters out the task based on its `id`.
- Updates the state with the **remaining tasks**.

### **JSX Structure**

- A **title section** (`<h1>`).
- An **input field** and an **"Add Task"** button.
- A **list of tasks**, where each task has:
  - A clickable **task title** (to toggle completion).
  - A **"Delete"** button to remove the task.

### **Tailwind CSS Styling**

The UI is styled using **Tailwind CSS** with classes such as:
- **`bg-gray-800`** → Sets the background color.
- **`text-white`** → Ensures readable text.
- **`rounded-lg shadow-lg`** → Creates a clean, modern card-style design.

## Contributing

If you’d like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is open-source and available under the **MIT License**.

---
Developed with ❤️ by **Keyon Lewis**.
