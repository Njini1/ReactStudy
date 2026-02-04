export type Option = {
  label: string;
  value: string;
};

export type CommonRegionSelectProps = {
  sidoOptions: Option[];
  sigunguOptions: Option[];

  sidoValue: string;
  sigunguValue: string;

  onChangeSido: (value: string) => void;
  onChangeSigungu: (value: string) => void;

  className?: string;
  disabled?: boolean;
};
