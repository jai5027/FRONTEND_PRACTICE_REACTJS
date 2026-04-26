import SearchBar from "./components/SearchBar.jsx"
import Tab from "./components/Tab.jsx"
import ResultGrid from "./components/ResultGrid.jsx"
import Navbar from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import Home from "./pages/Home.jsx"
import useCreate from "../src/zustand.js"

function App() {
const state = useCreate()

const BtnClick = () => {
  state.increment()
}

  return (
    <div>
      <h1 className="bg-amber-500">{state.count}</h1>
      <button className="bg-amber-500" onClick={BtnClick}>INCREMENT</button>
      <Navbar />
 <div className='text-center h-full pb-10 text-sm font-semibold text-white bg-gray-950'>
  <Outlet />
  </div>
    </div>
  )
}

export default App
