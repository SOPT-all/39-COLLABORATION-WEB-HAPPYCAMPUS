import { useState } from 'react';

import { IcChevronLeft, IcChevronRight, IcExpand } from '@shared/assets/icons';

import * as styles from './preview.css';

interface PreviewProps {
  images: string[];
}

const Preview = ({ images }: PreviewProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = images.length;

  return (
    <section className={styles.previewContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>문서 미리보기</h2>
        <span className={styles.zoom}>
          <IcExpand aria-hidden />
          확대 보기
        </span>
      </div>

      <div className={styles.viewer}>
        <img
          className={styles.pageImage}
          src={images[currentPage - 1]}
          alt={`미리보기 ${currentPage}페이지`}
        />
        <div className={styles.pagination}>
          <button
            type="button"
            className={styles.pageButton}
            disabled={currentPage === 1}
            aria-label="이전 페이지"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <IcChevronLeft width={18} height={18} aria-hidden />
          </button>
          <p className={styles.pageCount}>
            <span className={styles.currentPage}>{currentPage}</span> /{' '}
            {totalPage}
          </p>
          <button
            type="button"
            className={styles.pageButton}
            disabled={currentPage === totalPage}
            aria-label="다음 페이지"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IcChevronRight width={18} height={18} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Preview;
