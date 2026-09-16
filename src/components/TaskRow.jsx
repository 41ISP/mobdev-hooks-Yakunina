 const TaskRow = ({title, storyPoints, setTasks, id, done}) => {
    
    const handleDone = (diff) => {
    setTasks(o => o.map(e => 
        e.id === id ?
        {...e, done: e.done = diff }:
            e
        ))
    }

    const handleDelete = () => {
            setTasks(o => o.filter(e => e.id !== id))
    }
    const handleStoryPoints = (diff) => {
        setTasks(o => o.map(e => 
            e.id === id ?
            {...e, storyPoints: e.storyPoints + diff} :
            e

        ))
    }
    return(
        <div className="task-row">
        <button onClick={() => handleDone(!done)} className={`task-check${done ? " checked" : ""}`}></button>
        <span className={`task-title${done ? " done" : ""}`}>
        {title}
        </span>
        <div className="estimate-stepper">
        <button onClick={() => handleStoryPoints(-1)} className="stepper-btn">−</button>
        <span className="stepper-value">{storyPoints}</span>
        <button onClick={() => handleStoryPoints(+1)}className="stepper-btn">+</button>
        </div>
        <button onClick={() => handleStoryPoints(+2)}className="quick-bump">+2</button>
        <button onClick={handleDelete} className="icon-danger">✕</button>
        </div>
    )
 }
 export default TaskRow
