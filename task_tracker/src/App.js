import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [buttonText, setButtonText] = useState("Add");
  const [tasks, setTasks] = useState([]);

  const showForm = () => {
    setShowAddTask(!showAddTask);
    //  if(!showAddTask) {
    //   setButtonText(text);
    // }
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete");
  };
  // const changeButton = () => {
  //   if(!showAddTask) {
  //     setButtonText("Cancel");
  //   }
  // }
  const addTask = (task) => {
    //(tasks.concat(task));
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" onShow={showForm} buttonText={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
