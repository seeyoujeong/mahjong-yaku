import { Post } from "@/app/types";

export default async function PostList() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await data.json()) as Post[];

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
