import { useSelector } from "react-redux"
import SearchBar from "../components/SearchBar"
import ResultGrid from "../components/ResultGrid"

const Home = () => {
    const { query } = useSelector((store) => store.search)

  return (
    <div>
      <SearchBar />  

  {query != '' ? <div> <Tab /> <ResultGrid /> </div> : ''}
 
    </div>
  )
}

export default Home
