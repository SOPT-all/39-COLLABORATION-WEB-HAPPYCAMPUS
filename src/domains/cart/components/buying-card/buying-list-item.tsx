import { IcCloseSmall, IcFiletypePdf } from '@shared/assets/icons';

import * as styles from './buying-list-item.css';

interface BuyingListItemProps {
  title: string;
  onRemove: () => void;
}

const BuyingListItem = ({ title, onRemove }: BuyingListItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.titleContainer}>
        <img src={IcFiletypePdf} alt="" className={styles.fileIcon} />
        <p className={styles.title}>{title}</p>
      </div>
      <button
        type="button"
        className={styles.removeButton}
        aria-label={`${title} 구매 목록에서 빼기`}
        onClick={onRemove}
      >
        <IcCloseSmall aria-hidden />
      </button>
    </li>
  );
};

export default BuyingListItem;
