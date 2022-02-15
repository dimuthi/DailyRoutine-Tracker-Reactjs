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
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
