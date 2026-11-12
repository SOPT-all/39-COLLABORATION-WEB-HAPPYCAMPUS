import type { MaterialDetail } from '@domains/material/types/material';

import * as styles from './product-content-section.css';

interface ProductContentSectionProps {
  material: MaterialDetail;
}

const ProductContentSection = ({ material }: ProductContentSectionProps) => {
  const { description, tableOfContents, summary, bodySections, tags } =
    material;

  return (
    <div className={styles.contentContainer}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>소개</h2>
        <p className={styles.description}>{description}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>목차</h2>
        <div className={styles.sectionBody}>
          <ol className={styles.tocBox}>
            {tableOfContents.map((item, index) => (
              <li key={item}>
                {index + 1}. {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>본문내용</h2>
        <div className={styles.bodyContainer}>
          <p className={styles.bodySummary}>{summary}</p>
          {bodySections.map(({ title, content }, index) => (
            <div key={title}>
              <p className={styles.bodySectionTitle}>
                [{index + 1}. {title}]
              </p>
              <p className={styles.bodySectionContent}>{content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>태그</h2>
        <ul className={styles.tagList}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              # {tag}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductContentSection;
