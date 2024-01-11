import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextBox from './component/TextBox';
import ButtonBox from './component/ButtonBox';


function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (ButtonText) => console.log();
 

  return (
    <>
      <div className='main-box'>
   
   <TextBox displayValue = {calVal}></TextBox>
   <ButtonBox onButtonClick = {onButtonClick}></ButtonBox>
      </div>
    </>
  )
}

export default App
