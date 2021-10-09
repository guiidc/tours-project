import React, { useContext, useEffect, useCallback } from 'react'
import Context from './context/Context'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const { loading, setLoading, setTours, tours } = useContext(Context);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    }catch (err){
      console.log(err);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(!tours.length) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={ fetchTours } className="btn">reload tours</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {loading ? <Loading /> : <Tours />}
    </main>
  )
}

export default App
