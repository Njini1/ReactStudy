import { useMemo, useState } from "react";
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

  const summary = useMemo(() => {
    const on = Object.entries(layers)
      .filter(([, v]) => v)
      .map(([k]) => {
        if (k === "pipe") return "관로";
        if (k === "depth") return "심도";
        if (k === "manhole") return "맨홀";
        if (k === "valve") return "밸브";
        return k;
      });
    return `${region.sido} ${region.sigungu} · ${on.join(", ") || "선택 없음"}`;
  }, [region, layers]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <div className={styles.logo} aria-hidden="true" />
            <div className={styles.titleWrap}>
              <h1 className={styles.h1}>인천공항 지하시설물 데이터 품질확인</h1>
              <p className={styles.p}>데이터 위치보기 · {summary}</p>
            </div>
          </div>

          <button className={styles.btnHeader} type="button">
            도움말
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {/* 지도 */}
          <section className={styles.card} aria-label="지도">
            <div className={styles.cardHeader}>
              <h2>위치 보기</h2>
              <span
                className="mono"
                style={{ fontSize: 12, fontWeight: 900, color: "var(--muted)" }}
              >
                OpenLayers
              </span>
            </div>
            <div style={{ height: "520px" }}>
              <MapView />
            </div>
          </section>

          {/* 우측 패널 */}
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
        </div>
      </main>
    </div>
  );
}
