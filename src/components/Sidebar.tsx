import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
        <Link href="/" className="text-lg font-bold mb-4">
          Carbon Dashboard
        </Link>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block text-gray-700 hover:text-green-600">
          Dashboard
        </Link>
        <Link href="/test" className="block text-gray-700 hover:text-green-600">
          Test
        </Link>
      </nav>
    </aside>
  );
}
<h2 className="text-lg font-bold mb-4">Carbon Dashboard</h2>