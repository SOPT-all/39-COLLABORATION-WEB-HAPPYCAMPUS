import type { ReactNode } from 'react';

import * as styles from './content-section.css';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </section>
  );
};

export default ContentSection;
