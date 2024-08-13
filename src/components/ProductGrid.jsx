import React from 'react';

function ProductGrid({ title, items }) {
  return (
    <div className="productsGrid">
      <div className="headline">
        <h2>{title}</h2>
      </div>
      <div className="handpickA">
        {items.map((item, index) => (
          <div className="handpickGrid" key={index}>
            <img className="gamePhoto" src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className="amazonGadgetLast">
        <a className="seeAnchor" href="#">See more</a>
      </div>
    </div>
  );
}

export default ProductGrid;
