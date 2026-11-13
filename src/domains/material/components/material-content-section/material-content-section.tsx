import type { MaterialDetail } from '@domains/material/types/material';

import ContentSection from './content-section';

import * as styles from './material-content-section.css';

interface MaterialContentSectionProps {
  material: MaterialDetail;
}

const MaterialContentSection = ({ material }: MaterialContentSectionProps) => {
  const { description, tableOfContents, summary, bodySections, tags } =
    material;

  return (
    <div className={styles.contentContainer}>
      <ContentSection title="소개">
        <p className={styles.description}>{description}</p>
      </ContentSection>

      <ContentSection title="목차">
        <ol className={styles.tocBox}>
          {tableOfContents.map((item, index) => (
            <li key={item}>
              {index + 1}. {item}
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection title="본문내용">
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
      </ContentSection>

      <ContentSection title="태그">
        <ul className={styles.tagList}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              # {tag}
            </li>
          ))}
        </ul>
      </ContentSection>
    </div>
  );
};

export default MaterialContentSection;
