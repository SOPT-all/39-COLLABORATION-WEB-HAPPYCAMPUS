import Tag from '@domains/material/components/tag/tag';
import type { MaterialDetail } from '@domains/material/types/material';
import { parseTags } from '@domains/material/utils/parse-tags';

import ContentSection from './content-section';

import * as styles from './material-content-section.css';

interface MaterialContentSectionProps {
  material: Pick<
    MaterialDetail,
    'description' | 'tableOfContents' | 'content' | 'tag'
  >;
}

const MaterialContentSection = ({ material }: MaterialContentSectionProps) => {
  const { description, tableOfContents, content, tag } = material;

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
          {parseTags(tag).map((label) => (
            <li key={label} className={styles.tagItem}>
              <Tag label={label} />
            </li>
          ))}
        </ul>
      </ContentSection>
    </div>
  );
};

export default MaterialContentSection;
