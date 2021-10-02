import React from 'react';

const ReviewItem = (props) => {
  const { name, price, quantity, key, img } = props.product;
  const { handelRemove } = props;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div><h4 className="product-name">{name}</h4>
        <p>Price: $ {price}</p>
        <p>Quantity:{quantity}</p>
        <button onClick={() => handelRemove(key)} className="btn-regular">Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;