import styles from "./LocationPage.module.css";
import MapView from "../components/MapView";
import RegionSelect from "../components/RegionSelect";
import TargetSelect from "../components/TargetSelect";

const targetChips = [
  "상수 관로(WTL_SA001_LS)",
  "상수 심도(WTL_SA900_PS)",
  "상수 맨홀(WTL_SA001_PS)",
  "소방 시설(WTL_SA001_LS)",
  "유지량(WTL_SA900_PS)",
  "취수정(WTL_SA900_PS)",
  "상수 관로(WTL_SA001_LS)",
  "상수 심도(WTL_SA900_PS)",
  "상수 맨홀(WTL_SA001_PS)",
];

export default function LocationPage() {
  return (
    <div className={styles.page}>
      {/* 지도 카드 */}
      <section className={styles.card} aria-label="지도">
        <div className={styles.cardTitle}>
          <span className={styles.titleBar} aria-hidden="true" />
          <h3>데이터 위치보기</h3>
        </div>

        <div className={styles.mapBox}>
          <MapView />
        </div>
      </section>

      {/* 분류 정보 카드 */}
      <section className={styles.card} aria-label="지하시설물 분류 정보">
        <div className={styles.cardTitle}>
          <span className={styles.titleBar} aria-hidden="true" />
          <h3>지하시설물 분류 정보</h3>
        </div>

        <RegionSelect />
        <div className={styles.divider} />
        <TargetSelect chips={targetChips} />
      </section>
    </div>
  );
}
