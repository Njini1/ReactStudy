import { useState } from "react";
import CommonRegionSelect, {
  type Option,
} from "../../components/common/select";
// import CommonRegionSelect, { type Option } from "../components/CommonRegionSelect";

const SIDO_OPTIONS: Option[] = [
  { label: "인천광역시", value: "incheon" },
  { label: "서울특별시", value: "seoul" },
  { label: "경기도", value: "gyeonggi" },
];

const SIGUNGU_OPTIONS: Record<string, Option[]> = {
  incheon: [
    { label: "중구", value: "jung" },
    { label: "서구", value: "seo" },
    { label: "연수구", value: "yeonsu" },
  ],
  seoul: [{ label: "강남구", value: "gangnam" }],
  gyeonggi: [{ label: "성남시", value: "seongnam" }],
};

export default function LocationPage() {
  const [sido, setSido] = useState("incheon");
  const [sigungu, setSigungu] = useState("jung");

  const sigunguOptions = SIGUNGU_OPTIONS[sido] ?? [];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      {/* 카드 상단 등등... */}

      <CommonRegionSelect
        sidoOptions={SIDO_OPTIONS}
        sigunguOptions={sigunguOptions}
        sidoValue={sido}
        sigunguValue={sigungu}
        onChangeSido={(v) => {
          setSido(v);
          // 시도 변경 시 시군구 기본값 리셋 (공부 단계에서 가장 깔끔)
          const first = (SIGUNGU_OPTIONS[v] ?? [])[0]?.value ?? "";
          setSigungu(first);
        }}
        onChangeSigungu={setSigungu}
      />

      {/* 아래 MapView / TargetSelect ... */}
    </div>
  );
}
