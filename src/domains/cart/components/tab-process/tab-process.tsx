import { IcCartHuge, IcChevronRight } from '@shared/assets/icons';

import * as styles from './tab-process.css';

const STEPS = ['장바구니', '충전/결제', '충전/결제 완료'];

const TabProcess = () => {
  return (
    <div className={styles.processContainer}>
      <div className={styles.processContent}>
        <div className={styles.titleContainer}>
          <IcCartHuge className={styles.cartIcon} aria-hidden />
          <h2 className={styles.title}>장바구니</h2>
        </div>

        <ol className={styles.stepList}>
          {STEPS.map((step, index) => (
            <li
              key={step}
              className={styles.stepItem}
              aria-current={index === 0 ? 'step' : undefined}
            >
              {index > 0 && (
                <IcChevronRight className={styles.chevronIcon} aria-hidden />
              )}
              <span className={styles.step({ current: index === 0 })}>
                <span>0{index + 1}</span>
                <span>{step}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TabProcess;
