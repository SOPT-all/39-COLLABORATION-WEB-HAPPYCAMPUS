import Checkbox from '@shared/ui/checkbox/checkbox';
import { formatPrice } from '@shared/utils/format-price';
import { getOptimizedImageUrl } from '@shared/utils/get-optimized-image-url';

import * as styles from './cart-list-row.css';

interface CartListRowProps {
  title: string;
  coverImageUrl: string | null;
  description: string;
  price: number;
  savedDate: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onDelete: () => void;
}

const CartListRow = ({
  title,
  coverImageUrl,
  description,
  price,
  savedDate,
  checked,
  onCheckedChange,
  onDelete,
}: CartListRowProps) => {
  return (
    <tr className={styles.cartListRow}>
      <td className={styles.checkCell}>
        <Checkbox
          checked={checked}
          onChange={onCheckedChange}
          ariaLabel={`${title} 구매 목록에 담기`}
        />
      </td>
      <td className={styles.infoCell}>
        <div className={styles.infoContainer}>
          {coverImageUrl ? (
            <img
              src={getOptimizedImageUrl(coverImageUrl, 'thumbnail')}
              alt=""
              className={styles.thumbnail}
              loading="lazy"
            />
          ) : (
            <div className={styles.thumbnailPlaceholder} aria-hidden>
              <span className={styles.thumbnailPlaceholderTitle}>{title}</span>
            </div>
          )}
          <div className={styles.textContainer}>
            <p className={styles.title} title={title}>
              {title}
            </p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </td>
      <td className={styles.priceCell}>{formatPrice(price)}원</td>
      <td className={styles.savedDateCell}>{savedDate}</td>
      <td className={styles.deleteCell}>
        <button
          type="button"
          onClick={onDelete}
          aria-label={`${title} 장바구니에서 삭제`}
          className={styles.deleteButton}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default CartListRow;
