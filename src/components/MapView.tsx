import { useEffect, useRef } from "react";
import styles from "./MapView.module.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

export default function MapView() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!elRef.current) return;
    if (mapRef.current) return; // StrictMode에서도 중복 생성 방지

    const map = new Map({
      target: elRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([126.4505, 37.4602]), // 인천공항 근처(대략)
        zoom: 13,
      }),
    });

    mapRef.current = map;

    return () => {
      map.setTarget(undefined);
      mapRef.current = null;
    };
  }, []);

  return (
    <div className={styles.mapWrap}>
      <div ref={elRef} className={styles.map} />
    </div>
  );
}
