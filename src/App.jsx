import { Outlet } from "react-router-dom"
import Navbar from "./assets/Components/Navbar/Navbar"


function App() {

  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  )
}

export default App
