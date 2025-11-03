import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </>
  )
}

export default App
