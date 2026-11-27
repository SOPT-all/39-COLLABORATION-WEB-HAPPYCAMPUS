import { useState } from 'react';

import { IcExpand, IcPreviewEmpty } from '@shared/assets/icons';
import { getOptimizedImageUrl } from '@shared/utils/get-optimized-image-url';

import PaginationButton from './pagination-button';

import * as styles from './preview.css';

interface PreviewProps {
  images: string[];
}

const Preview = ({ images }: PreviewProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const hasImage = images.length > 0;
  const totalPage = Math.max(images.length, 1);

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
        {hasImage ? (
          <img
            className={styles.pageImage}
            src={getOptimizedImageUrl(images[currentPage - 1], 'preview')}
            alt={`미리보기 ${currentPage}페이지`}
          />
        ) : (
          <div className={styles.emptyPage}>
            <img src={IcPreviewEmpty} alt="" className={styles.emptyIcon} />
            <p className={styles.emptyText}>미리보기 이미지가 없습니다.</p>
          </div>
        )}
        <div className={styles.pagination}>
          <PaginationButton
            direction="prev"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          />
          <p className={styles.pageCount}>
            <span className={styles.currentPage}>{currentPage}</span>
            <span>/</span>
            <span>{totalPage}</span>
          </p>
          <PaginationButton
            direction="next"
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </section>
  );
};

export default Preview;
