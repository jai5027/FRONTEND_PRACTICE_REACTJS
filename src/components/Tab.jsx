import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tab = () => {
  const tabs = ["Photos", "Videos"]
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)
  
  return (
    <div className='flex justify-center gap-5 p-6'>
      {tabs.map((ele, index) => {
        return <button
        className={`${activeTab === ele ? "bg-blue-700" : "bg-gray-500"} transition py-2 px-4 rounded-lg`}
         key={index}
        onClick={() => dispatch(setActiveTab(ele))}
>
        {ele}
        </button>
      })}
    </div>
  )
}

export default Tab
