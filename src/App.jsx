import { useState } from 'react'

import HomePage from './Home/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <HomePage/>
    </>
  )
}

export default App
