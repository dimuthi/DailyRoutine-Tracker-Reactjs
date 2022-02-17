import {useState} from 'react';

const AddTask = (props) => {
    const[task, setTask] = useState('');
    const[day, setDay] = useState('');
    const[reminder, setReminder] = useState(false);

const onSubmit = (e) => {
    e.preventDefault();
    if(!task){
        alert("Enter a task");
        return;
    }
    props.onAdd({task,day,reminder});
    setTask('');
    setDay('');
    setReminder(false);
}
    return(
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>
                Task
            </label>
            <input type="text" placeholder="Enter Task Name" value={task} onChange={(e)=> setTask(e.target.value)}/>
         
            </div>
             <div className="form-control">
            <label>
               Date & Time
            </label>
            <input type="text" placeholder="Enter Date and Time" value={day} onChange={(e)=> setDay(e.target.value)}/>
             </div>
             <div className="form-control" className="form-control-check">
            <label>
               Reminder
            </label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.value)}/>
            </div>
            <div>
<input type="submit" value="save task" className="btn btn-block" />
            </div>
        </form>
    );
};

export default AddTask;