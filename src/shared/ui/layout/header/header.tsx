import type { ComponentType, SVGProps } from 'react';
import { Link } from 'react-router';

import {
  IcCharge,
  IcMy,
  IcSearch,
  IcShopping,
  IcTooltipTail,
  LogoEasyai,
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

interface NavMenuItem {
  menu:
    'home' | 'easyai' | 'topic' | 'partners' | 'expert' | 'fortune' | 'event';
  label: string;
  logo?: string;
  badge?: {
    menu: 'expert' | 'fortune';
    label: string;
  };
}

const NAV_MENU_ITEMS: NavMenuItem[] = [
  { menu: 'home', label: '홈' },
  { menu: 'easyai', label: 'EasyAI', logo: LogoEasyai },
  { menu: 'topic', label: '토픽광장' },
  { menu: 'partners', label: '파트너스' },
  {
    menu: 'expert',
    label: '전문가 요청',
    badge: { menu: 'expert', label: '1:1 맞춤자료' },
  },
  {
    menu: 'fortune',
    label: '운세/로또',
    badge: { menu: 'fortune', label: '재미로 보는' },
  },
  { menu: 'event', label: '이벤트' },
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

      <nav aria-label="주요 메뉴" className={styles.navContainer}>
        <div className={styles.navInner}>
          <span aria-hidden className={styles.hamburger}>
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </span>

          <ul className={styles.navMenuList}>
            {NAV_MENU_ITEMS.map(({ menu, label, logo, badge }) => (
              <li key={menu} className={styles.navMenuItem({ menu })}>
                {logo ? (
                  <img src={logo} alt={label} width={51} height={19} />
                ) : (
                  label
                )}
                {badge && (
                  <span className={styles.navBadge({ menu: badge.menu })}>
                    {badge.label}
                    <IcTooltipTail
                      aria-hidden
                      className={styles.navBadgeTail}
                    />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
