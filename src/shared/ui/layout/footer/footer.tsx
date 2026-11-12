import { IcArrowUpRight } from '@shared/assets/icons';

import * as styles from './footer.css';

const MENUS = [
  '회사소개',
  '제휴광고문의',
  '이용약관',
  '개인정보처리방침',
  '이메일무단 수집거부',
  '링크시 전제조건',
  '책임한계 및 법적고지',
];

const COMPANY_INFOS = [
  '대표이사 : 김정태',
  '개인정보보호 책임자 : 김정태',
  '주소 : 서울특별시 구로구 디지털로33길 12 우림 e-biz센터 2차 211호',
  '사업자등록번호 : 204-81-48925 ((주) 에이전트소프트 해피캠퍼스 사업부)',
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.menuList}>
        {MENUS.map((menu) => (
          <li key={menu} className={styles.menuItem}>
            {menu}
          </li>
        ))}
      </ul>

      <div className={styles.infoContainer}>
        <p className={styles.logo}>HAPPYCAMPUS</p>

        <section className={styles.companySection}>
          <h2 className={styles.sectionTitle}>(주)에이전트소프트</h2>
          <ul className={styles.companyList}>
            {COMPANY_INFOS.map((info) => (
              <li key={info} className={styles.companyItem}>
                {info}
              </li>
            ))}
            <li className={styles.companyItem}>
              통신판매업 신고 : 2004-01560
              <span className={styles.underline}>사업자 정보 확인</span>
            </li>
            <li className={styles.companyItem}>
              호스팅 서비스사업자 : (주) 에이전트소프트 해피캠퍼스사업부
            </li>
          </ul>
        </section>

        <section className={styles.csSection}>
          <h2 className={styles.sectionTitle}>고객센터</h2>
          <div className={styles.csContainer}>
            <div className={styles.contactContainer}>
              <p>전화번호 : 02) 890-3333</p>
              <p>E-mail : hd@happycampus.com</p>
            </div>
            <div className={styles.buttonContainer}>
              <span className={styles.csButton}>1:1 문의하기</span>
              <span className={styles.csButton}>고객센터</span>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.noticeContainer}>
        <div className={styles.noticeTextContainer}>
          <p>
            (주) 에이전트소프트는 판매중개자 이며 판매의 거래당사자가 아닙니다.
            입점판매자가 등록한 상품정보 및 거래에 대해 (주) 에이전트소프트는
            일체 책임을 지지 않습니다.
          </p>
          <p>
            해피캠퍼스 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI
            등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법,
            콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다.
            <span className={styles.guideLink}>
              안내보기
              <IcArrowUpRight width={14} height={14} aria-hidden />
            </span>
          </p>
        </div>
        <p>Copyright © AGENTSOFT Co., LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
