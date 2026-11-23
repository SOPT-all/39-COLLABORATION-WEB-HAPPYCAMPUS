import { IcChevronLeft, IcChevronRight } from '@shared/assets/icons';

import * as styles from './pagination-button.css';

interface PaginationButtonProps {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}

const PaginationButton = ({
  direction,
  disabled,
  onClick,
}: PaginationButtonProps) => {
  const isPrev = direction === 'prev';

  return (
    <button
      type="button"
      className={styles.paginationButton}
      disabled={disabled}
      aria-label={isPrev ? '이전 페이지' : '다음 페이지'}
      onClick={onClick}
    >
      {isPrev ? <IcChevronLeft aria-hidden /> : <IcChevronRight aria-hidden />}
    </button>
  );
};

export default PaginationButton;
