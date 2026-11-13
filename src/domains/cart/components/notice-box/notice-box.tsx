import * as styles from './notice-box.css';

const NOTICES = [
  '구매하고자 하는 자료를 선택하신 후 선택자료 결제 버튼을 클릭해주세요.',
  '장바구니에 보관된 자료는 판매자 요청에 의해 판매중지/가격변동이 발생할 수 있습니다.',
  '최근 6개월간의 담긴 자료가 보이며, 최대 100개까지 담을 수 있습니다.(2019년 1월 이후)',
];

const NoticeBox = () => {
  return (
    <section className={styles.noticeContainer}>
      <h2 className={styles.title}>꼭 확인해주세요.</h2>
      <ol className={styles.noticeList}>
        {NOTICES.map((notice, index) => (
          <li key={notice}>
            {index + 1}. {notice}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default NoticeBox;
