import type { ComponentType, SVGProps } from 'react';
import { Link } from 'react-router';

import {
  IcCharge,
  IcMy,
  IcSearch,
  IcShopping,
  LogoHappycampus,
} from '@shared/assets/icons';

import * as styles from './header.css';

interface UserMenuItem {
  menu: 'charge' | 'cart' | 'my';
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  path?: string;
}

const USER_MENU_ITEMS: UserMenuItem[] = [
  { menu: 'charge', label: '충전하기', Icon: IcCharge },
  { menu: 'cart', label: '장바구니', Icon: IcShopping, path: '/cart' },
  { menu: 'my', label: '내계정', Icon: IcMy },
];

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.topContainer}>
        <h1>
          <img src={LogoHappycampus} alt="해피캠퍼스" width={163} height={22} />
        </h1>

        <div className={styles.searchBox}>
          <span className={styles.searchPlaceholder}>
            원하는 자료를 검색해 보세요.
          </span>
          <IcSearch aria-hidden />
        </div>

        <nav aria-label="사용자 메뉴">
          <ul className={styles.userMenuList}>
            {USER_MENU_ITEMS.map(({ menu, label, Icon, path }) => {
              const content = (
                <>
                  <Icon aria-hidden />
                  <span className={styles.userMenuLabel({ menu })}>
                    {label}
                  </span>
                </>
              );

              return (
                <li key={menu}>
                  {path ? (
                    <Link to={path} className={styles.userMenuItem({ menu })}>
                      {content}
                    </Link>
                  ) : (
                    <span className={styles.userMenuItem({ menu })}>
                      {content}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
