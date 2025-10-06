import { useEffect, useState } from "react";
import { ChevronRight, Folder, TrendingUp } from "lucide-react";

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
      <div className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <span className="text-slate-600 font-medium">Loading categories...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-7 pb-10">
      <div className="max-w-7xl mx-auto pl-3">

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => window.location.href = `/category/${cat.slug}`}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className={`
                relative bg-primary
                rounded-2xl p-6 shadow-lg hover:shadow-2xl
                transform cursor-pointer transition-all duration-300
              `}>
                {/* Icon */}
                <div className="relative mb-3 flex justify-center">
                  <div className="bg-white backdrop-blur-sm p-3 rounded-xl transition-all">
                    <Folder className="w-8 h-8 text-secondary" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="relative text-center font-bold text-white text-lg mb-2 group-hover:scale-105 transition-transform">
                  {cat.name}
                </h3>

                {/* Post Count */}
                <div className="relative flex items-center justify-center gap-1 text-white/90 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">{cat.count} {cat.count === 1 ? 'post' : 'posts'}</span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/categories'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary cursor-pointer text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl"
          >
            View All Categories
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}