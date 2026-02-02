import styles from "./RegionSelect.module.css";

export type RegionValue = {
  sido: string;
  sigungu: string;
};

type Props = {
  value: RegionValue;
  onChange: (v: RegionValue) => void;
};

export default function RegionSelect({ value, onChange }: Props) {
  return (
    <section className={styles.block} aria-label="지역 선택">
      <h3 className={styles.title}>지역 선택</h3>

      <div className={styles.grid}>
        <div>
          <div className={styles.label}>특·광역시도</div>
          <select
            className={styles.select}
            value={value.sido}
            onChange={(e) => onChange({ ...value, sido: e.target.value })}
          >
            <option>인천광역시</option>
            <option>서울특별시</option>
            <option>경기도</option>
          </select>
        </div>

        <div>
          <div className={styles.label}>시·군·구</div>
          <select
            className={styles.select}
            value={value.sigungu}
            onChange={(e) => onChange({ ...value, sigungu: e.target.value })}
          >
            <option>중구</option>
            <option>서구</option>
            <option>연수구</option>
          </select>
        </div>
      </div>
    </section>
  );
}
