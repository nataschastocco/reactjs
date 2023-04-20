import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container my-5">
      <h1 className="text-center">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;