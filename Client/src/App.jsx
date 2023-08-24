import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Body/Home/Home'
import Schedule from './Components/Schedule/Schedule'
import AdminDashboard from './Components/Admin/Admin_Dashboard/Admindashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar/>
      {/* <Schedule/> */}
      <Home/>
      <Footer/>



     </Router>
     
    </>
  )
}

export default App
