import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar"

function App() {


  return (
    <>
<Navbar />
 <main className="pt-16">
        <Outlet />
      </main>
    </>
  )
}

export default App
