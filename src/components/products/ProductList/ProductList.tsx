import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductList.module.scss';

import circle from '../../../images/circle.png';
import triangle from '../../../images/triangle.png';
import rectangle from '../../../images/rectangle.png';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "circle",
    price: 999,
    description: "Perfect choice when you don't need any corners.",
    image: circle
  },
  {
    id: 2,
    name: "rectangle",
    price: 899,
    description: "For once, it's a great idea to think inside the box.",
    image: rectangle
  },
  {
    id: 3,
    name: "triangle",
    price: 1009,
    description: "A true classic with three elegant corners",
    image: triangle
  },
]

const ProductList: React.FC = (props) => {
  return <ul className={classes.list}>
    {DUMMY_PRODUCTS.map((product) => {
      return <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    })}
  </ul>
}

export default ProductList;