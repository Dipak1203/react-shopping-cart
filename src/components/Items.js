import {useContext} from 'react'
import { cartContext } from './Cart';
const Items = ({ id, img, price, description, title, quantity }) => {
  // console.log(items)

  const {removeItem,incrementItem} = useContext(cartContext);
  return (
    <>
      <div className="items-info" key={id}>
        <div className="product-img">
          <img src={img} alt="user" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fa-solid fa-minus minus"></i>
          <input type="text" placeholder={quantity} />
          <i className="fa-solid fa-plus add" onClick={() => incrementItem(id)}></i>
        </div>
        <div className="price">
          <h3>Rs.{price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
