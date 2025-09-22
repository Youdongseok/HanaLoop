import { Company, Post } from "./types";

// 시드 데이터 (샘플 데이터)
let _companies: Company[] = [
  {
    id: "c1",
    name: "Acme Corp",
    country: "US",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 120 },
      { yearMonth: "2024-02", source: "diesel", emissions: 110 },
      { yearMonth: "2024-03", source: "lpg", emissions: 95 },
    ],
  },
  {
    id: "c2",
    name: "Globex",
    country: "DE",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 80 },
      { yearMonth: "2024-02", source: "diesel", emissions: 105 },
      { yearMonth: "2024-03", source: "lpg", emissions: 120 },
    ],
  },
];

let _posts: Post[] = [
  {
    id: "p1",
    title: "지속 가능성 보고서",
    resourceUid: "c1",
    dateTime: "2024-02",
    content: "분기별 CO2 업데이트",
  },
];

// 유틸 (지연, 실패 시뮬레이션)
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const jitter = () => 200 + Math.random() * 600;
const maybeFail = () => Math.random() < 0.15;

// API 함수
export async function fetchCompanies() {
  await delay(jitter());
  return _companies;
}

export async function fetchPosts() {
  await delay(jitter());
  return _posts;
}

export async function createOrUpdatePost(p: Omit<Post, "id"> & { id?: string }) {
  await delay(jitter());
  if (maybeFail()) throw new Error("저장 실패");

  if (p.id) {
    _posts = _posts.map((x) => (x.id === p.id ? (p as Post) : x));
    return p as Post;
  }

  const created = { ...p, id: crypto.randomUUID() };
  _posts = [..._posts, created];
  return created;
}
