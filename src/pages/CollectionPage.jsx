import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  return (
    <div className='flex flex-wrap justify-center gap-5 w-full overflow-auto mx-auto'>
      {collection.map((items, index) => {
        return <div key={index}>
          <CollectionCard item={items} />
        </div>
      })}
    </div>
  )
}

export default CollectionPage
