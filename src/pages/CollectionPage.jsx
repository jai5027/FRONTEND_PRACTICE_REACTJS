import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice.js"
import { useDispatch } from "react-redux"

const CollectionPage = () => {
  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection.items)

  const cleraAll = () => {
        dispatch(clearCollection())
  }

  return (
    <div className="min-h-screen bg-gray-950 overflow-auto px-10 py-6">
      <div className="flex justify-between pb-10">
      <h1 className="text-xl font-bold tracking-wide">YOUR COLLECTION</h1>
      <button onClick={cleraAll} className="bg-red-500 px-2 py-2 rounded">Clear All</button>
      </div>
    <div className='flex flex-wrap justify-center gap-5 w-full overflow-auto mx-auto'>
      {collection.map((items, index) => {
        return <div key={index}>
          <CollectionCard item={items} />
        </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPage
