import { IcCloseSmall, IcFiletypePdf } from '@shared/assets/icons';

import * as styles from './buying-list-item.css';

interface BuyingListItemProps {
  title: string;
}

const BuyingListItem = ({ title }: BuyingListItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.titleContainer}>
        <img src={IcFiletypePdf} alt="" className={styles.fileIcon} />
        <p className={styles.title}>{title}</p>
      </div>
      <IcCloseSmall className={styles.closeIcon} aria-hidden />
    </li>
  );
};

export default BuyingListItem;
