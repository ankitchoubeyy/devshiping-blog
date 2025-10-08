

import PostContent from "@/components/PostContent";
import SocialShare from "@/components/SocialShare";
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
  const { slug } = await params;
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

  // Construct the full URL for sharing

  const postTitle = post.title.rendered.replace(/<[^>]*>/g, ""); // Strip HTML tags

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 overflow-x-hidden">
      {/* Featured Image */}
      {image && (
        <Image
          src={image}
          alt={post.title.rendered}
          width={768}  // matches container max-width
          height={320} // adjust height to match your design
          className="object-cover rounded-2xl mb-8"
          priority
        />
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

      {/* Social Share */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <SocialShare />
      </div>

      {/* Post Content */}
      <div>
        <PostContent content={post.content.rendered} />
      </div>

      {/* Bottom Social Share */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <SocialShare />
      </div>
    </article>
  );
}