import React, { useContext } from 'react';
import Context from './context/Context';
import Tour from './Tour';

const Tours = () => {
  const { tours } = useContext(Context);

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="upperline"></div>
      </div>
      <div>
        { tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
