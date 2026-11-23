import AddToCart from '@domains/cart/components/add-to-cart/add-to-cart';
import MaterialContentSection from '@domains/material/components/material-content-section/material-content-section';
import MaterialHeading from '@domains/material/components/material-heading/material-heading';
import MaterialInfoCard from '@domains/material/components/material-info-card/material-info-card';
import Preview from '@domains/material/components/preview/preview';
import { useMaterialDetailQuery } from '@domains/material/hooks/use-material-detail-query';
import { parseTags } from '@domains/material/utils/parse-tags';

import * as styles from './material-detail.css';

const POST_ID = 1;

function MaterialDetailPage() {
  const { data: material } = useMaterialDetailQuery(POST_ID);

  if (!material) return null;

  return (
    <div className={styles.materialDetailContainer}>
      <MaterialHeading
        title={material.title}
        description={material.description}
      />
      <div className={styles.bodyContainer}>
        <div className={styles.contentContainer}>
          <Preview images={material.imageUrls} />
          <MaterialContentSection
            material={material}
            tags={parseTags(material.tag)}
          />
        </div>
        <MaterialInfoCard
          info={material}
          actions={
            <AddToCart
              postId={material.postId}
              category={material.category}
              cartItemId={material.cartItemId}
            />
          }
        />
      </div>
    </div>
  );
}

export default MaterialDetailPage;
