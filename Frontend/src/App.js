import React from 'react';
import Welcome from './pages/welcome/welcome';
// import Reg from './pages/reg';
import { useState } from 'react';
import Header from './pages/wel_header';
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { history } from './utils/history';
import { AuthComponent } from '@/components/AuthComponent'


import HomePlan from './pages/my/plan/homePlan';
import  './App.css'
import MyPage from './pages/my/my-page';
import My from './pages/my';
import MyProfile from './pages/my/my-profile';

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
        <Route path='/my' element={
          <AuthComponent>
            <My/>
          </AuthComponent>

        }>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='plan' element={<HomePlan />}></Route>
        </Route>

        <Route path='/dev' element={
          <MyPage/>

        }>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='plan' element={<HomePlan />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  )

}

export default App;
