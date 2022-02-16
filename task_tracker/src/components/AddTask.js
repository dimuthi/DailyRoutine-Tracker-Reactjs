const AddTask = () => {
    return(
        <form className="add-form">
        <div className="form-control">
            <label>
                Task
            </label>
            <input type="text" placeholder="Enter Task Name"/>
         
            </div>
             <div className="form-control">
            <label>
               Date & Time
            </label>
            <input type="text" placeholder="Enter Date and Time"/>
             </div>
             <div className="form-control" className="form-control-check">
            <label>
               Reminder
            </label>
            <input type="checkbox" />
            </div>
            <div>
<input type="submit" value="save task" className="btn btn-block" />
            </div>
        </form>
    );
};

export default AddTask;