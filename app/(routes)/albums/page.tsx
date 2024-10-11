import { AlbumList } from "@/app/components";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Albums",
};

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <AlbumList />
      </Suspense>
    </div>
  );
}
