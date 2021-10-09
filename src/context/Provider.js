import React, { useState } from 'react';
import Context from './Context';

function Provider ({ children }) {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const contextValue = {
    loading,
    setLoading,
    tours,
    setTours,
  }

  return (
    <Context.Provider value ={ contextValue } >
      { children }
    </Context.Provider>
  )
}

export default Provider;
