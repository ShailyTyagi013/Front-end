import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './component/Todolist'
import TodoItem from './component/TodoItem'
import Dibba from './component/Dibba'


function App() {

  const todoItems = [{
    Name: "Go to Office",
    Date: "7/01/24"
  },

  {
    Name: "Come back home",
    Date: "7/01/24"
  },
  {
    Name: "eat dinner",
    Date: "7/01/24"
  },
  {
    Name: "Go to bed",
    Date: "7/01/24"
  }

  ];

  return (
    <>
      <Dibba>
      <center className='todolist'>TODO LIST</center>
      <div className='main'>
        <Todolist></Todolist>
        <TodoItem todoItems={todoItems}></TodoItem>
      </div>

      </Dibba>

    </>
  )
}

export default App
