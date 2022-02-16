import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appoinment",
      date: "Feb 5th at 2.30pm",
      reminder: true,
    },
    { id: 2, text: "Cooking", date: "Feb 5th at 2.30pm", reminder: true },
    { id: 3, text: "Reading", date: "Feb 10th at 2.30pm", reminder: false },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete");
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
     {tasks.length >0 ? <Tasks tasks={tasks} deleteTask={deleteTask} /> : <p>No tasks to show</p>} 
     
    </div>
  );
}

export default App;
