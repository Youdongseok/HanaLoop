// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";
import { fetchCompaniesWithAxios } from "@/lib/apiClient";
import { Company } from "@/lib/types";

export default function DashboardPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCompaniesWithAxios()
      .then(setCompanies)
      .catch(() => setError("기업 데이터를 불러오는 중 오류 발생"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">데이터 불러오는 중...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  return (
    <div className="flex">
      
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <Dashboard companies={companies} />
      </main>
    </div>
  );
}
