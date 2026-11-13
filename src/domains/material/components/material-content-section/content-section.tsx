import type { ReactNode } from 'react';

import * as styles from './content-section.css';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </section>
  );
};

export default ContentSection;
