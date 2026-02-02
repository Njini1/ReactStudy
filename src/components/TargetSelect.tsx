import styles from "./TargetSelect.module.css";

export type TargetLayers = {
  pipe: boolean;
  depth: boolean;
  manhole: boolean;
  valve: boolean;
};

type Props = {
  value: TargetLayers;
  onChange: (v: TargetLayers) => void;
};

function toggle(v: TargetLayers, key: keyof TargetLayers): TargetLayers {
  return { ...v, [key]: !v[key] };
}

export default function TargetSelect({ value, onChange }: Props) {
  return (
    <section className={styles.block} aria-label="검사 대상 분류">
      <h3 className={styles.title}>검사 대상 분류</h3>

      <div className={styles.grid}>
        <div
          className={`${styles.card} ${value.pipe ? styles.cardOn : ""}`}
          onClick={() => onChange(toggle(value, "pipe"))}
          role="button"
          tabIndex={0}
        >
          <span className={styles.name}>상수 관로</span>
          <span className={styles.badge}>{value.pipe ? "ON" : "OFF"}</span>
        </div>

        <div
          className={`${styles.card} ${value.depth ? styles.cardOn : ""}`}
          onClick={() => onChange(toggle(value, "depth"))}
          role="button"
          tabIndex={0}
        >
          <span className={styles.name}>상수 심도</span>
          <span className={styles.badge}>{value.depth ? "ON" : "OFF"}</span>
        </div>

        <div
          className={`${styles.card} ${value.manhole ? styles.cardOn : ""}`}
          onClick={() => onChange(toggle(value, "manhole"))}
          role="button"
          tabIndex={0}
        >
          <span className={styles.name}>상수 맨홀</span>
          <span className={styles.badge}>{value.manhole ? "ON" : "OFF"}</span>
        </div>

        <div
          className={`${styles.card} ${value.valve ? styles.cardOn : ""}`}
          onClick={() => onChange(toggle(value, "valve"))}
          role="button"
          tabIndex={0}
        >
          <span className={styles.name}>상수 밸브</span>
          <span className={styles.badge}>{value.valve ? "ON" : "OFF"}</span>
        </div>
      </div>
    </section>
  );
}
