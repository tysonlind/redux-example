import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './firstSlice.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const [priority, setPriority] = useState('low');
  const [taskBgColor, setTaskBgColor] = useState('rgba(0,255,0,0)');

  const tasks = useSelector(state => state.first.tasks);
  const dispatch = useDispatch();

  const getBackgroundColor = (priority) =>{
    switch (priority) {
      case 'low':
        return 'rgba(0,255,0,0.1)';
        break;
      case 'medium':
        return 'rgba(255,255,0,0.1)';
        break;
      case 'high':
        return 'rgba(255,0,0,0.1)';
        break;
      default:
        return 'rgba(0,255,0,0.1)';
    }
  };

  useEffect(() => {
    switch (priority) {
      case 'low':
        setTaskBgColor('rgba(0,255,0,0.1)');
        break;
      case 'medium':
        setTaskBgColor('rgba(255,255,0,0.1)');
        break;
      case 'high':
        setTaskBgColor('rgba(255,0,0,0.1)');
        break;
      default:
        setTaskBgColor('rgba(0,255,0,0.1)');
    }
  
  },[priority])

  return (
    <>
      <div>
        <h1>Redux Practice</h1>
        <h3>add a task</h3>
        <form onSubmit={(e) => {
          e.preventDefault();

          if (task === '') {
            setError('Invalid Input: please enter a task');
            return;
          } else {
            setError('');
            dispatch(addTask({task: task, priority: priority}));
            setTask('');
            taskInput.textContent = '';
          }
         
        }}>
          <label htmlFor="taskInput"><strong>Task: </strong></label>
          <input type="text" id={"taskInput"} value={task} placeholder="enter a task..." style={{padding: 10, margin: '0px 10px'}} onChange={(e) => {setTask(e.target.value)}}/>
          <label htmlFor="priorityInput"><strong>Priority: </strong></label>
          <select type="text" id={"priorityInput"} value={priority} style={{padding: 10, margin: '0px 10px'}} onChange={(e) => {setPriority(e.target.value)}}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" >Add a Task</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <p> Here is your list of tasks:</p>
        <ul style={{display:'flex', alignItems: 'start', flexDirection: 'column'}}>
          {tasks.map((task, index) => {
            return (
              <li key={index} style={{'list-style': 'none', padding: 10}}>
                <div style={{backgroundColor:getBackgroundColor(task.priority), padding: '0px 12px', borderRadius: 12}}>
                  <span>task: {task.task} priority: {task.priority} </span>
                  <button onClick={() => { dispatch(removeTask(task.task)) }} style={{position: 'relative', left: '12px'}}>Remove</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
