import {
  IcCloseSmall,
  IcFiletypeDocx,
  IcFiletypeHwp,
  IcFiletypePdf,
  IcFiletypePpt,
} from '@shared/assets/icons';

import * as styles from './buying-list-item.css';

const FILE_TYPE_ICON: Record<string, string> = {
  pdf: IcFiletypePdf,
  hwp: IcFiletypeHwp,
  ppt: IcFiletypePpt,
  pptx: IcFiletypePpt,
  docx: IcFiletypeDocx,
};

interface BuyingListItemProps {
  title: string;
  fileType: string;
  onRemove: () => void;
}

const BuyingListItem = ({ title, fileType, onRemove }: BuyingListItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.titleContainer}>
        <img
          src={FILE_TYPE_ICON[fileType] ?? IcFiletypePdf}
          alt=""
          className={styles.fileIcon}
        />
        <p className={styles.title} title={title}>
          {title}
        </p>
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
