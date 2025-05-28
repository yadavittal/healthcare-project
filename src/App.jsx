import { useState } from 'react'
import './App.css'
import  Sidebar  from './components/Sidebar/Sidebar.jsx'
import Header from './components/Header/Header.jsx'
import DashboardContent from './components/DashboardContent/DashboardContent.jsx'

function App() {

  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='main-container'>
            <Header/>
            <DashboardContent/>
      </div>
    </div>
  )
}

export default App
