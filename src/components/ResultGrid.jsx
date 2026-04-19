import { useDispatch, useSelector } from 'react-redux'
import { fetchPhoto, fetchVideos } from '../api/mediaApi.js'
import { setQuery, setResults, setError, setLoading} from '../redux/features/searchSlice.js'
import { useEffect } from 'react'

const ResultGrid = () => {

    const {query, activeTab, results, loading, error} = useSelector((store) => store.search)
    
    useEffect(() => {
        if(!query) return 

      const getData = async () => { 
        let data
        if(activeTab == 'Photos'){
            let response = await fetchPhoto(query)
            data = response.results
        }

        if(activeTab == 'Videos'){
            let response = await fetchVideos(query)
            data = response.videos
        }
    console.log(data)

    }
    getData()
    }, [activeTab, query])

  return (
    <div>
      
    </div>
  )
}

export default ResultGrid
