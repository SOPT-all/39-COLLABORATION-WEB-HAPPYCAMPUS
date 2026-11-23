import CompareNoticeCard from '@domains/cart/components/compare-notice-card/compare-notice-card';
import { IcCart } from '@shared/assets/icons';
import Button from '@shared/ui/button/button';

import * as styles from './cart-entry.css';

interface CartEntryProps {
  disabled?: boolean;
  isModalOpen?: boolean;
  onAddToCartClick?: () => void;
  onLinkClick?: () => void;
}

const CartEntry = ({
  disabled,
  isModalOpen,
  onAddToCartClick,
  onLinkClick,
}: CartEntryProps) => (
  <div className={styles.container}>
    <Button
      icon={<IcCart aria-hidden />}
      disabled={disabled}
      onClick={onAddToCartClick}
      aria-haspopup="dialog"
      aria-expanded={isModalOpen}
    >
      장바구니 담기
    </Button>
    <CompareNoticeCard onLinkClick={onLinkClick} />
  </div>
);

export default CartEntry;
