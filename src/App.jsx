import { useState } from 'react'
import './App.css'
import Contact from './components/conatct/Contact'
import Login from './components/login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                            <Route path='contact' element={<Contact/>} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </BrowserRouter>
    </>
  )
}

export default App
