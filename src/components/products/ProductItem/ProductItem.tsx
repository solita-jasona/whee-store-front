import React, { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import classes from './ProductItem.module.scss';

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
const ProductItem: React.FC<ProductItemProps> = (props) => {
  const CartCtx = useContext(CartContext)

  const addToCartHandler = () => {
    CartCtx.addItem(
      props.id,
      props.name,
      1,
      props.price,
      props.image
    );
  }

  return (
    <li className={classes.productContainer}>
      <div className={classes.productLeft}>
        <div className={classes.imageContainer}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.infoContainer}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={classes.productRight}>
        <div className={classes.price}>{props.price} €</div>
        <button onClick={addToCartHandler}>ADD TO CART</button>
      </div>
    </li>
  )
}

export default ProductItem;