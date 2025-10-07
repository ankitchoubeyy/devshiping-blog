import { useEffect, useState } from "react";
import { ChevronRight, Folder, TrendingUp } from "lucide-react";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import Link from "next/link";

export default function CategoryNav() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/categories");
        const data = await res.json();
        const visible = data.filter((cat) => cat.count > 0);
        setCategories(visible);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-2">
        {[...Array(5)].map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="pt-7 pb-10">
      <div className="max-w-7xl mx-auto pl-3">
        {/* Categories */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div
            className="flex gap-4 py-4 md:px-6 overflow-x-auto scrollbar-hide"
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex-shrink-0 w-40 md:w-52 bg-primary rounded-2xl p-5 shadow-lg hover:shadow-2xl transform cursor-pointer transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <div className="bg-white backdrop-blur-sm p-3 rounded-xl transition-all">
                    <Folder className="w-8 h-8 text-secondary" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-center font-bold text-white text-lg mb-2 group-hover:scale-105 transition-transform">
                  {cat.name}
                </h3>

                {/* Post Count */}
                <div className="flex items-center justify-center gap-1 text-white/90 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">
                    {cat.count} {cat.count === 1 ? "post" : "posts"}
                  </span>
                </div>

                {/* Arrow Indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}