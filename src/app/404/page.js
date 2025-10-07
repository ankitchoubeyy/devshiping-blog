import NotFoundClient from "@/components/NotFoundClient";
import { Suspense } from "react";
export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundClient />
    </Suspense>
  );
}