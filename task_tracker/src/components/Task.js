import { FaTimes } from "react-icons/fa";
const Task = (props) => {
  return (
    <div className="task">
      <h3 key={props.key}>
        {props.task.text} <FaTimes style={{color:'red', cursor:'pointer'}} />
      </h3>
      <p>{props.task.date}</p>
    </div>
  );
};
export default Task;
