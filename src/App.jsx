import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState("")

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      setMyData(response.data)
    })
    .catch((error) => {
      setIsError(error.message);
    })
    
  }, [])


  return (
    <>  
      <h1 className="text-4xl text-center font-bold my-10">My Blogs</h1>

      {isError !== "" && <h1 className="text-2xl text-center font-bold my-10 text-red">{isError}</h1>}
    
      <div className="grid grid-cols-3 gap-4 m-auto my-10 w-3/4">
        
        {myData.slice(0,24).map((post) => {
          const{id, title, body} = post;
          return (
            <div className="card col-span-1 p-5 border-2 rounded-lg border-gray-600" key={id}>
              <h2 className="text-2xl mb-4 uppercase font-bold">{title.slice(0,20)}</h2>
              <p className="text-gray-500">{body}</p>
            </div>
          )
        })}
      
      </div>
    </>
  )
}

export default App
