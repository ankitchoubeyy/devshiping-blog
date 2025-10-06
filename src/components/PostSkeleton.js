import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeleton() {
  return (
    <div className="bg-gray-200 shadow-md rounded-2xl overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-48 relative">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Excerpt */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        {/* Author */}
        <div className="flex items-center gap-3 mt-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        {/* Read More */}
        <Skeleton className="h-4 w-1/4 mt-4" />
      </div>
    </div>
  );
}
