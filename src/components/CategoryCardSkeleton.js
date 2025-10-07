"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-30 md:w-56 bg-primary rounded-2xl p-5 shadow-md">
      {/* Icon */}
      <div className="flex justify-center mb-3">
        <Skeleton className="h-10 w-10 rounded-xl bg-white/50" />
      </div>

      {/* Category name */}
      <div className="flex justify-center mb-2">
        <Skeleton className="h-5 w-24 bg-white/50" />
      </div>

      {/* Post count */}
      <div className="flex justify-center gap-2">
        <Skeleton className="h-4 w-4 bg-white/50" />
        <Skeleton className="h-4 w-16 bg-white/50" />
      </div>
    </div>
  );
}
