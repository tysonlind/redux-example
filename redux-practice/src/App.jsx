import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const tasks = useSelector(state => state.first.tasks);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Redux Practice</h1>
        <h3>add a task</h3>
        <form>
          <input type="text" placeholder="enter a task..." onChange={(e) => {setTask(e.target.value)}}/>
          <button type="submit" onSubmit={dispatch(addTask(task))}></button>
        </form>
        <p> Here is your list of tasks:</p>
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <p>task: {task.task} priority: {task.priority} </p><button onClick={dispatch(removeTask(task.task))}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
