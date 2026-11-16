import { BADGE_LABEL, type BadgeType } from '@domains/cart/constants/badge';

import * as styles from './badge.css';

interface BadgeProps {
  type: BadgeType;
}

const Badge = ({ type }: BadgeProps) => (
  <span className={styles.badge}>{BADGE_LABEL[type]}</span>
);

export default Badge;
