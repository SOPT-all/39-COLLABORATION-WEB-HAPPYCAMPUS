import { useState } from 'react';

import { IcExpand } from '@shared/assets/icons';

import PaginationButton from './pagination-button';

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
        <h3 className={styles.title}>문서 미리보기</h3>
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
          <PaginationButton
            direction="prev"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <p className={styles.pageCount}>
            <span className={styles.currentPage}>{currentPage}</span>
            <span>/</span>
            <span>{totalPage}</span>
          </p>
          <PaginationButton
            direction="next"
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </div>
      </div>
    </section>
  );
};

export default Preview;
