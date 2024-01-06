import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebNavigation from './component/WebNavigation'
import WebText from './component/WebText'
import SideContent from './component/SideContent'
import Empty from './component/Empty'


function App() {
  

  return (
    <>
      <center>
        <h1 className='heading'>Easy Notes</h1>  
      </center>
      
        <WebNavigation></WebNavigation>
        
        <div className='content-main-box'>
          <SideContent></SideContent>
        <WebText></WebText>
        <Empty></Empty>
        </div>
        
        
    </>
  )
}

export default App
