export type GhgEmission = {
  yearMonth: string; // ex: "2025-01"
  source: string;    // 가솔린, 디젤 등
  emissions: number; // CO2 톤수
};

export type Company = {
  id: string;
  name: string;
  country: string; // 국가 코드
  emissions: GhgEmission[];
};

export type Post = {
  id: string;
  title: string;
  resourceUid: string; // Company.id
  dateTime: string;    // ex: "2024-02"
  content: string;
};
