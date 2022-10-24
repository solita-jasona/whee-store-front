class CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;

  constructor(id: number, name: string, quantity: number, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
  }
}

export default CartItem;