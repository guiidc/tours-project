import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="upperline"></div>
      </div>
      <div>
        { tours.map((tour, index) => (
          <Tour key={tour.id} {...tour} index={ index }/>
        ))}
      </div>
    </section>
  );
};

export default Tours;
