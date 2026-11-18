import Tag from '@domains/material/components/tag/tag';
import type { MaterialDetail } from '@domains/material/types/material';

import ContentSection from './content-section';

import * as styles from './material-content-section.css';

interface MaterialContentSectionProps {
  material: Pick<MaterialDetail, 'description' | 'tableOfContents' | 'content'>;
  tags: string[];
}

const MaterialContentSection = ({
  material,
  tags,
}: MaterialContentSectionProps) => {
  const { description, tableOfContents, content } = material;

  return (
    <div className={styles.contentContainer}>
      <ContentSection title="소개">
        <p className={styles.description}>{description}</p>
      </ContentSection>

      <ContentSection title="목차">
        <ol className={styles.tocBox}>
          {tableOfContents.split('\n').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection title="본문내용">
        <p className={styles.content}>{content}</p>
      </ContentSection>

      <ContentSection title="태그">
        <ul className={styles.tagList}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tagItem}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>
      </ContentSection>
    </div>
  );
};

export default MaterialContentSection;
