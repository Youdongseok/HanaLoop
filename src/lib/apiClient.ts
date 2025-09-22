import axios from "axios";
import { Company, Post } from "./types";

const apiClient = axios.create({ baseURL: "/" });

export const fetchCompaniesWithAxios = async (): Promise<Company[]> => {
  console.log("[fetchCompaniesWithAxios] 호출 시작"); // 콘솔 추가
  try {
    const { data } = await apiClient.get<Company[]>("/api/companies");
    console.log("[fetchCompaniesWithAxios] 응답 데이터:", data); // 응답 확인
    return data;
  } catch (err) {
    console.error("[fetchCompaniesWithAxios] 에러 발생:", err); // 에러 확인
    throw err;
  }
};

export const fetchPostsWithAxios = async (): Promise<Post[]> => {
  console.log("[fetchPostsWithAxios] 호출 시작"); // 콘솔 추가
  try {
    const { data } = await apiClient.get<Post[]>("/api/posts");
    console.log("[fetchPostsWithAxios] 응답 데이터:", data); // 응답 확인
    return data;
  } catch (err) {
    console.error("[fetchPostsWithAxios] 에러 발생:", err); // 에러 확인
    throw err;
  }
};
