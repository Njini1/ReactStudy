import styles from './LocationPage.module.css';
import MapView from '../components/MapView';

const targetChips = [
  '상수 관로(WTL_SA001_LS)',
  '상수 심도(WTL_SA900_PS)',
  '상수 맨홀(WTL_SA001_PS)',
  '소방 시설(WTL_SA001_LS)',
  '유지량(WTL_SA900_PS)',
  '취수정(WTL_SA900_PS)',
  '상수 관로(WTL_SA001_LS)',
  '상수 심도(WTL_SA900_PS)',
  '상수 맨홀(WTL_SA001_PS)',
]

export default function LocationPage() {
  return (
    <div className={styles.page}>
      {/* <div className={styles.mapWrap}> */}
      <section className={styles.card} aria-label="지도">
        <div className={styles.cardTitle}>
          <span className={styles.titleBar} aria-hidden="true" />
          <h3>지하시설물 분류 정보</h3>
        </div>
        <div style={{ height: "420px" }}>
          <MapView />
        </div>
      </section>

      {/* ✅ 지도 아래: 분류 정보 카드 */}
      <section className={styles.card} aria-label="지하시설물 분류 정보">
        <div className={styles.cardTitle}>
          <span className={styles.titleBar} aria-hidden="true" />
          <h3>지하시설물 분류 정보</h3>
        </div>

        {/* 지역 선택 row */}
        <div className={styles.row}>
          <div className={styles.rowLabel}>
            <span className={styles.icon} aria-hidden="true">
              {/* pin */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="11" r="2.6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <span className={styles.rowText}>지역 선택</span>
          </div>

          <div className={styles.rowSelectBody}>
            <select className={styles.select} defaultValue="인천광역시">
              <option>특·광역시도 선택</option>
              <option>인천광역시</option>
              <option>서울특별시</option>
              <option>경기도</option>
            </select>

            <select className={styles.select} defaultValue="중구">
              <option>시도 선택</option>
              <option>중구</option>
              <option>서구</option>
              <option>연수구</option>
            </select>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 검사 대상 분류 row */}
        <div className={styles.row}>
          <div className={styles.rowLabel}>
            <span className={styles.icon} aria-hidden="true">
              {/* grid icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className={styles.rowText}>검사 대상 분류</span>
          </div>

          <div className={styles.rowBody}>
            <div className={styles.chips}>
              {targetChips.map((t, idx) => (
                <button key={idx} type="button" className={styles.chip}>
                  {t}
                </button>
              ))}
            </div>

            <div className={styles.actions}>
              <button className={styles.primaryBtn} type="button">
                <span className={styles.check} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                품질 검수
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
