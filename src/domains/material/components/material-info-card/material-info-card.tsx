import { type ReactNode, useId } from 'react';

import * as styles from './material-info-card.css';

interface MaterialInfo {
  price: number;
  pageCount: number;
  fileType: string;
  savedYear: number;
}

interface MaterialInfoCardProps {
  info: MaterialInfo;
  actions: ReactNode;
}

const MaterialInfoCard = ({ info, actions }: MaterialInfoCardProps) => {
  const titleId = useId();
  const { price, pageCount, fileType, savedYear } = info;

  const rows = [
    { label: '분량', value: `${pageCount}페이지` },
    { label: '파일 형식', value: fileType },
    { label: '저작 시기', value: String(savedYear) },
  ];

  return (
    <aside aria-labelledby={titleId} className={styles.card}>
      <div className={styles.info}>
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            자료 정보
          </h2>
          <p className={styles.price}>{price.toLocaleString('ko-KR')}원</p>
        </div>

        <hr className={styles.divider} />

        <dl className={styles.infoList}>
          {rows.map(({ label, value }) => (
            <div key={label} className={styles.infoRow}>
              <dt className={styles.infoLabel}>{label}</dt>
              <dd className={styles.infoValue}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {actions}
    </aside>
  );
};

export default MaterialInfoCard;
