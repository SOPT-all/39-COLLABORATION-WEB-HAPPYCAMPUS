import {
  CART_EMPTY_MESSAGE,
  type CartEmptyType,
} from '@domains/cart/constants/cart-empty';

import * as styles from './cart-empty.css';

interface CartEmptyProps {
  type: CartEmptyType;
}

const CartEmpty = ({ type }: CartEmptyProps) => (
  <div className={styles.container}>
    <p className={styles.message}>{CART_EMPTY_MESSAGE[type]}</p>
  </div>
);

export default CartEmpty;
