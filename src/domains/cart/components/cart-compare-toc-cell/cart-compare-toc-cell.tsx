import { useId, useState } from 'react';

import { IcChevronDown, IcChevronUp } from '@shared/assets/icons';

import * as styles from './cart-compare-toc-cell.css';

interface CartCompareTocCellProps {
  toc: string[];
}

const CartCompareTocCell = ({ toc }: CartCompareTocCellProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={listId}
      >
        {isOpen ? '목차 접기' : '목차 보기'}
        {isOpen ? (
          <IcChevronUp aria-hidden className={styles.icon} />
        ) : (
          <IcChevronDown aria-hidden className={styles.icon} />
        )}
      </button>

      {isOpen && (
        <ol id={listId} className={styles.list}>
          {toc.map((item, index) => (
            <li key={`${index}-${item}`}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CartCompareTocCell;
