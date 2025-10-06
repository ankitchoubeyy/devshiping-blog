import Link from "next/link";
import Image from "next/image";

async function getCategoryBySlug(slug) {
  const res = await fetch(`https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/categories?slug=${slug}`, {
    next: { revalidate: 60 }, // cache for 1 minute
  });
  const categories = await res.json();
  return categories.length > 0 ? categories[0] : null;
}

async function getPostsByCategory(categoryId) {
  const res = await fetch(
    `https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`,
    { next: { revalidate: 60 } }
  );
  return await res.json();
}

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Category not found</h2>
      </div>
    );
  }

  const posts = await getPostsByCategory(category.id);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-xl md:text-2xl font-bold mb-8 pl-2 border-l-4 border-secondary  text-foreground">
        Category: <span className="text-secondary">{category.name}</span>
      </h1>

      {posts.length === 0 && (
        <p className="text-center text-gray-500">No posts available in this category.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const image =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
                const author = post._embedded?.author?.[0];
      
                return (
                  <div
                    key={post.id}
                    className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {image && (
                      <div className="relative w-full h-48">
                        <Image
                          src={image}
                          alt={post.title.rendered}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    )}
      
                    <div className="p-5">
                      <h2
                        className="text-xl font-semibold mb-2 hover:text-secondary transition"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
      
                      <div
                        className="text-gray-700 text-sm mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
      
                      {author && (
                        <div className="flex items-center gap-3 mt-4">
                          <Image
                            src={author.avatar_urls["48"]}
                            alt={author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <p className="text-sm text-gray-600">
                            By <span className="font-semibold">{author.name}</span>
                          </p>
                        </div>
                      )}
      
                      <Link
                        href={`/posts/${post.slug}`}
                        className="text-secondary font-medium mt-4 block"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
    </section>
  );
}
