// import logo from './logo.svg';
import Welcome from './pages/welcome';
// import Reg from './pages/reg';
import { useState } from 'react';
import './App.css';
import Header from './pages/wel_header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';

function App() {
  const [showlog, setLog] = useState('hide')
  const [showreg, setReg] = useState('hide')
  const showLog = () => {
    setLog('show')
    console.log('show login box')
    console.log()
  }
  const showReg = () => {
    setReg('show')
    console.log('show reg box')
    console.log()
  }

  return (

    <Router>

      <Header
        onLog={() => showLog()}
        onReg={() => showReg()}
      />
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        {/* <Route path='/register' element={<Reg />}></Route> */}
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  )

}

export default App;
