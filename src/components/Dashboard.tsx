// components/Dashboard.tsx
import { useState } from "react";
import { Company } from "@/lib/types";
import CompanyCard from "./CompanyCard";
import PostList from "./PostList";

type Props = { companies: Company[] };

export default function Dashboard({ companies }: Props) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          onSelect={() => setSelectedCompany(company)}
        />
      ))}

      {selectedCompany && (
        <div className="col-span-1 md:col-span-2 mt-4">
          <h2 className="text-xl font-bold mb-2">
            {selectedCompany.name} 게시물
          </h2>
          <PostList companyId={selectedCompany.id} />
        </div>
      )}
    </div>
  );
}
