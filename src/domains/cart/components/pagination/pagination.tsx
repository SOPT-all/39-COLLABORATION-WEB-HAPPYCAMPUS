import { IcChevronLeft, IcChevronRight } from '@shared/assets/icons';

import * as styles from './pagination.css';

const Pagination = () => {
  return (
    <nav aria-label="페이지" className={styles.pagination}>
      <button
        type="button"
        aria-label="이전 페이지"
        disabled
        className={styles.arrowButton}
      >
        <IcChevronLeft width={18} height={18} aria-hidden />
      </button>

      <span aria-current="page" className={styles.currentPage}>
        1
      </span>

      <button
        type="button"
        aria-label="다음 페이지"
        disabled
        className={styles.arrowButton}
      >
        <IcChevronRight width={18} height={18} aria-hidden />
      </button>
    </nav>
  );
};

export default Pagination;
