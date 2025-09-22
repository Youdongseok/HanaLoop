// components/PostList.tsx
import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { fetchPostsWithAxios } from "@/lib/apiClient";

type Props = { companyId: string };

export default function PostList({ companyId }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostsWithAxios()
      .then((data) => setPosts(data.filter((p) => p.resourceUid === companyId)))
      .finally(() => setLoading(false));
  }, [companyId]);

  if (loading) return <p>게시물 로딩 중...</p>;
  if (posts.length === 0) return <p>게시물이 없습니다.</p>;

  return (
    <ul className="space-y-2">
      {posts.map((p) => (
        <li key={p.id} className="p-2 border rounded">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-600">{p.dateTime}</p>
          <p>{p.content}</p>
        </li>
      ))}
    </ul>
  );
}
