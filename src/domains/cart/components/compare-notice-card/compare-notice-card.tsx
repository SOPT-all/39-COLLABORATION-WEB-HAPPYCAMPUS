import { IcChevronRight, IcFile } from '@shared/assets/icons';

import * as styles from './compare-notice-card.css';

interface CompareNoticeCardProps {
  onLinkClick?: () => void;
}

const CompareNoticeCard = ({ onLinkClick }: CompareNoticeCardProps) => (
  <div className={styles.card}>
    <IcFile aria-hidden className={styles.folderIcon} />
    <div className={styles.content}>
      <p className={styles.description}>
        폴더별로 모아 자료를 비교할 수 있어요
      </p>
      <button type="button" className={styles.link} onClick={onLinkClick}>
        장바구니에서 비교하기
        <IcChevronRight aria-hidden className={styles.chevronIcon} />
      </button>
    </div>
  </div>
);

export default CompareNoticeCard;
