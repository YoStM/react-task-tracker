import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // const name = 'Brad';
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Apointment',
      day: 'feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // ADD TASK
  const addTask = (task) => {
    console.log(task)
  }

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }



  return (
    <div className="container">
      {/* <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h3>1 + 1 = {1 + 1}</h3> */}
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
        ('No Task to show')}
    </div>
  );
}

export default App;
