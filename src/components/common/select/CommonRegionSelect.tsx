import type { CommonRegionSelectProps } from "./CommonRegionSelect.types";

export default function CommonRegionSelect({
  sidoOptions,
  sigunguOptions,
  sidoValue,
  sigunguValue,
  onChangeSido,
  onChangeSigungu,
  className,
  disabled,
}: CommonRegionSelectProps) {
  return (
    <div
      className={["flex items-center gap-4", className ?? ""].join(" ")}
      aria-label="지역 선택"
    >
      {/* 타이틀 */}
      <div className="min-w-[96px] text-sm font-semibold text-slate-800">
        지역 선택
      </div>

      {/* Selects */}
      <div className="flex items-center gap-3">
        <select
          className="h-9 w-[180px] rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:opacity-50"
          value={sidoValue}
          onChange={(e) => onChangeSido(e.target.value)}
          disabled={disabled}
          aria-label="특·광역시도"
        >
          {sidoOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <select
          className="h-9 w-[180px] rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:opacity-50"
          value={sigunguValue}
          onChange={(e) => onChangeSigungu(e.target.value)}
          disabled={disabled}
          aria-label="시·군·구"
        >
          {sigunguOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
