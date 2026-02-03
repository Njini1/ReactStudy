import styles from "./TargetSelect.module.css";

type Props = {
  chips: string[];
};

export default function TargetSelect({ chips }: Props) {
  return (
    <div className={styles.row} aria-label="검사 대상 분류">
      <div className={styles.rowLabel}>
        <span className={styles.icon} aria-hidden="true">
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
          {chips.map((t, idx) => (
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
  );
}
