"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function NotFoundContent() {
  const params = useSearchParams();
  const message = params.get("message");
  
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      {message && <p className="mt-2 text-gray-500">{message}</p>}
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
