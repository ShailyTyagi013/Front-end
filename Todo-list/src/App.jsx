import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './component/Todolist'
import TodoItems from './component/TodoItems'


function App() {

  return (
    <>
    <center className='todolist'>TODO LIST</center>
    <div className='main'>
    <Todolist></Todolist>
    <TodoItems></TodoItems>
    <TodoItems></TodoItems>

    </div>
    
    
          </>
  )
}

export default App
