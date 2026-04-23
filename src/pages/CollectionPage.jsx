import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"


const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  return (
    <div className="px-20 ">
      <div className="flex justify-between mb-10">
      <h1 className="text-xl font-bold tracking-wide">YOUR COLLECTION</h1>
      <button className="bg-red-500 px-2 py-2 rounded">Clear All</button>
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
