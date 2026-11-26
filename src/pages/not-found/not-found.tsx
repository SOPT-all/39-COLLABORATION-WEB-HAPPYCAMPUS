import { useNavigate } from 'react-router';

import { GraphicError } from '@shared/assets/icons';
import { ROUTE_PATH } from '@shared/constants/path';
import Button from '@shared/ui/button/button';

import * as styles from './not-found.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.messageContainer}>
        <GraphicError aria-hidden className={styles.icon} />
        <h2 className={styles.title}>페이지를 찾을 수 없습니다</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => void navigate(ROUTE_PATH.MATERIAL_DETAIL)}>
          홈으로 이동
        </Button>
        <Button
          variant="outlined"
          onClick={() => void navigate(ROUTE_PATH.CART)}
        >
          장바구니로 이동
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
