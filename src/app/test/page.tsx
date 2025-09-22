// app/test/page.tsx
import Test from "@/components/test"; // alias 설정 필요: tsconfig.json에서 "@" → "src"

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <Test />
    </div>
  );
}
