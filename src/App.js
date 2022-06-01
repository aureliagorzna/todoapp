import { useState, useRef, useEffect } from 'react'
import Header from "./components/Header"
import Button from './components/Button'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTask] = useState([])
  const input = useRef()

  const LOCAL_STORAGE_KEY = "todoApp.tasks"

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTask(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])
 
  const addTask = () => {
    if (input.current.value === "") return
    setTask([...tasks, {id: Math.floor(Math.random() * 10000), text: input.current.value, complete: false}])
    input.current.value = null
  }

  const toggle = id => {
    const copyTasks = [...tasks]
    const updateTask = copyTasks.find(task => task.id === id)
    updateTask.complete = !updateTask.complete
    setTask(copyTasks)
  }

  const count = () => {
    let c = 0
    tasks.forEach(task => {
      if (!task.complete) c++
    })
    if (c === 0) return "no"
    return c
  }

  const clear = () => {
    const clearTasks = tasks.filter(task => !task.complete)
    setTask(clearTasks)
  }

  return (
    <div className="App">
      <div className="header">
        <Header text="Todo App" />
        <input ref={input} placeholder="Add new task" />
        <Button func={addTask} text="Add" />
      </div>
      <Tasks tasks={tasks} toggle={toggle} />
      <p>You have {count()} tasks left</p>
      <Button func={clear} classN="clear" text="Clear completed" />
    </div>
  )
}

export default App
