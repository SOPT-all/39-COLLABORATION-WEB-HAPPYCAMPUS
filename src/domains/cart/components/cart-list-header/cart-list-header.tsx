import Checkbox from '@shared/ui/checkbox/checkbox';

import * as styles from './cart-list-header.css';

interface CartListHeaderProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const CartListHeader = ({ checked, onCheckedChange }: CartListHeaderProps) => {
  return (
    <tr className={styles.cartListHeader}>
      <th scope="col" className={styles.checkCell}>
        <Checkbox
          checked={checked}
          onChange={onCheckedChange}
          ariaLabel="전체 선택"
        />
      </th>
      <th scope="col" className={styles.titleCell}>
        제목
      </th>
      <th scope="col" className={styles.priceCell}>
        가격
      </th>
      <th scope="col" className={styles.savedDateCell}>
        저작 시기
      </th>
      <th scope="col" className={styles.deleteCell}>
        <span className={styles.visuallyHidden}>삭제</span>
      </th>
    </tr>
  );
};

export default CartListHeader;
