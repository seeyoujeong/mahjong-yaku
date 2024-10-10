import { PostList } from "@/app/components";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Posts() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <PostList />
      </Suspense>
    </div>
  );
}
