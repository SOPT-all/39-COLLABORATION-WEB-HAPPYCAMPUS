import MaterialHeading from '@domains/material/components/material-heading/material-heading';
import ProductContentSection from '@domains/material/components/product-content-section/product-content-section';
import { MATERIAL_DETAIL_MOCK } from '@domains/material/constants/material-detail';

import * as styles from './material-detail.css';

const MaterialDetailPage = () => {
  return (
    <main className={styles.page}>
      <MaterialHeading
        title={MATERIAL_DETAIL_MOCK.title}
        description={MATERIAL_DETAIL_MOCK.description}
      />
      <div className={styles.columns}>
        <ProductContentSection material={MATERIAL_DETAIL_MOCK} />
        <aside />
      </div>
    </main>
  );
};

export default MaterialDetailPage;
