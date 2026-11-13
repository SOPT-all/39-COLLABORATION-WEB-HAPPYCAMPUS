import CompareNoticeCard from '@domains/cart/components/compare-notice-card/compare-notice-card';
import { IcCart } from '@shared/assets/icons';
import Button from '@shared/ui/button/button';

import * as styles from './cart-entry.css';

interface CartEntryProps {
  disabled?: boolean;
}

const CartEntry = ({ disabled }: CartEntryProps) => (
  <div className={styles.container}>
    <Button icon={<IcCart aria-hidden />} disabled={disabled}>
      장바구니 담기
    </Button>
    <CompareNoticeCard />
  </div>
);

export default CartEntry;
