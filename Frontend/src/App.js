// import logo from './logo.svg';
import Welcome from './pages/welcome/welcome';
// import Reg from './pages/reg';
import { useState } from 'react';
import Header from './pages/wel_header';
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { history } from './utils/history';
import { AuthComponent } from '@/components/AuthComponent'
import Home from './pages/home/home';
import HomeProfile from './pages/home/profile/homeProfile';
import HomePlan from './pages/home/plan/homePlan';
import  './App.scss'

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

    <HistoryRouter history={history}>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        {/* <Route path='/register' element={<Reg />}></Route> */}
        <Route path='/home' element={
          <AuthComponent>
            <Home />
          </AuthComponent>

        }>
          <Route path='/home/profile' element={<HomeProfile />}></Route>
          <Route path='/home/plan' element={<HomePlan />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  )

}

export default App;
