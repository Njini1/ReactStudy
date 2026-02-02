import { useState } from "react";
import styles from "./LocationPage.module.css";
import MapView from "../components/MapView";
import RegionSelect, { type RegionValue } from "../components/RegionSelect";
import TargetSelect, { type TargetLayers } from "../components/TargetSelect";

export default function LocationPage() {
  const [region, setRegion] = useState<RegionValue>({
    sido: "인천광역시",
    sigungu: "중구",
  });

  const [layers, setLayers] = useState<TargetLayers>({
    pipe: true,
    depth: false,
    manhole: true,
    valve: false,
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.card} aria-label="지도">
          <div className={styles.cardHeader}>
            <h2>데이터 위치 보기</h2>
          </div>
          <div style={{ height: "520px" }}>
            <MapView />
          </div>
        </section>

        <aside className={styles.card} aria-label="분류 정보">
          <div className={styles.cardHeader}>
            <h2>지하시설물 분류 정보</h2>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.stack}>
              <RegionSelect value={region} onChange={setRegion} />
              <TargetSelect value={layers} onChange={setLayers} />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
