import styles from "./RegionSelect.module.css";

export default function RegionSelect() {
  return (
    <div className={styles.row} aria-label="지역 선택">
      <div className={styles.rowLabel}>
        <span className={styles.icon} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="11"
              r="2.6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
        <span className={styles.rowText}>지역 선택</span>
      </div>

      <div className={styles.rowBody}>
        <select className={styles.select} defaultValue="인천광역시">
          <option>특·광역시도 선택</option>
          <option>인천광역시</option>
          <option>서울특별시</option>
          <option>경기도</option>
        </select>

        <select className={styles.select} defaultValue="중구">
          <option>시군구 선택</option>
          <option>중구</option>
          <option>서구</option>
          <option>연수구</option>
        </select>
      </div>
    </div>
  );
}
