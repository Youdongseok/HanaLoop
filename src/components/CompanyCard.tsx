// components/CompanyCard.tsx
import { Company } from "@/lib/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  company: Company;
  onSelect: () => void;
};

export default function CompanyCard({ company, onSelect }: Props) {
  const chartData = company.emissions.map((e) => ({
    month: e.yearMonth,
    emissions: e.emissions,
  }));

  return (
    <div
      className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
      onClick={onSelect}
    >
      <h3 className="font-bold mb-2">{company.name}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="emissions" stroke="#22c55e" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
