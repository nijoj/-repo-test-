import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>app works!</p>
      <Header></Header>
      <Footer></Footer>
      <SideNav></SideNav>
    </>
  )
}

export default App
