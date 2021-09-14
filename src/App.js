import React, { useEffect, useState } from 'react'
import Card from './component/Card'
import axios from 'axios'

function App() {
  const [apiData, setApiData] = useState()


  useEffect(() => {
    try {
      const apiCall = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(`data`, data)
        setApiData(data)
      }

      apiCall()
    } catch (error) {
      console.error(error)
    }


  }, [])



  return (

    <div className="App">
      {apiData?.map((item) => {
        return (
          <Card key={item.id} title={item.title} body={item.body} >
            <div>Test</div>
          </Card>
        )

      })}

    </div>

  );
}

export default App;
