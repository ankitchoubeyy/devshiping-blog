import PostContent from "@/components/PostContent";
import Image from "next/image";

async function getPost(slug) {
  const res = await fetch(
    `https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } } // caches for 1 min
  );
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export default async function SinglePostPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Post not found
        </h2>
      </div>
    );
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const author = post._embedded?.author?.[0];
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 overflow-x-hidden">
      {/* Featured Image */}
      {image && (
        <div className="relative w-full h-80 mb-8">
          <Image
            src={image}
            alt={post.title.rendered}
            fill
            className="object-cover rounded-2xl"
            sizes="100vw"
          />
        </div>
      )}

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Author + Date */}
      <div className="flex items-center gap-3 mb-8 text-gray-600">
        {author && (
          <>
            <Image
              src={author.avatar_urls["48"]}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sm">
              By <span className="font-medium">{author.name}</span> · {date}
            </p>
          </>
        )}
      </div>

      {/* Post Content */}
      <div>
        <PostContent content={post.content.rendered} />
      </div>
      
    </article>
  );
}
