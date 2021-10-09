import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async() => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json()
      setTours(data);
      setLoading(false);
    }catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  return (
    <main>
      {loading ? <Loading /> : <Tours tours={ tours } />}
    </main>
  )
}

export default App
