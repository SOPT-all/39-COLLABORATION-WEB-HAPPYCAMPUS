import AddToCart from '@domains/cart/components/add-to-cart/add-to-cart';
import MaterialContentSection from '@domains/material/components/material-content-section/material-content-section';
import MaterialHeading from '@domains/material/components/material-heading/material-heading';
import MaterialInfoCard from '@domains/material/components/material-info-card/material-info-card';
import Preview from '@domains/material/components/preview/preview';
import { MATERIAL_DETAIL_MOCK } from '@domains/material/constants/material-detail-mock';

import * as styles from './material-detail.css';

function MaterialDetailPage() {
  const mock = MATERIAL_DETAIL_MOCK;

  return (
    <div className={styles.materialDetailContainer}>
      <MaterialHeading title={mock.title} description={mock.description} />
      <div className={styles.bodyContainer}>
        <div className={styles.contentContainer}>
          <Preview images={mock.imageUrls} />
          <MaterialContentSection material={mock} />
        </div>
        <MaterialInfoCard
          info={mock}
          actions={<AddToCart category={mock.category} />}
        />
      </div>
    </div>
  );
}

export default MaterialDetailPage;
