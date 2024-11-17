import SideNavBar from './Components/SideBar'
import Home from './Components/Home'
import "../src/CSS/App.css"
import { Route,Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Programing from './Components/Rooms/Programing'
import Math from './Components/Rooms/Math'
import Education from './Components/Rooms/Education'

function App() {

  return (
    <>
      <Router>

        <SideNavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/math" element={<Math />} />
          <Route path="/programing" element={<Programing />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
