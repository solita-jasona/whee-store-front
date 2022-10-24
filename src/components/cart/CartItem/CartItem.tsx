import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import classes from './CartItem.module.scss';

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const CartCtx = useContext(CartContext);
  const addItemHandler = () => {
    CartCtx.addItem(props.id, props.name, 1, props.price, props.image);
  }
  const removeItemHandler = () => {
    CartCtx.removeItem(props.id);
  }

  const removeProductHandler = () => {
    CartCtx.removeProduct(props.id, props.name, props.quantity, props.price, props.image)
  }

  return <li>
    <div className={classes.itemContainer}>
      <div className={classes.itemLeft}>
        <div className={classes.imageContainer}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.infoContainer}>
          <h3>{props.name}</h3>
          <div className={classes.price}>{props.price} €</div>
        </div>
        <div className={classes.quantityContainer}>
          Quantity: {props.quantity}
        </div>
      </div>
      <div className={classes.itemRight}>
        <button onClick={addItemHandler}>+</button>
        <button onClick={removeItemHandler}>-</button>
        <button className={classes.removeButton} onClick={removeProductHandler}>Remove</button>
      </div>
    </div>
    <div className={classes.line} />
  </li>
}

export default CartItem;