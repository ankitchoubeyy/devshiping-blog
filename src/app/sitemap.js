export default async function sitemap() {
  const baseUrl = "https://devshiping.com";

  // Static pages
  const staticPages = [
    "",
    "about",
    "categories",
    "contact",
    "privacy-policy",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
  }));

  // Fetch dynamic blog posts from WordPress backend
  let postUrls = [];
  try {
    const res = await fetch(
      "https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/posts?_fields=slug,modified",
      { next: { revalidate: 3600 } } // cache for 1h
    );
    const posts = await res.json();

    postUrls = posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.modified,
    }));
  } catch (error) {
    console.error("Failed to fetch posts for sitemap:", error);
  }

  // Return both static + dynamic URLs
  return [...staticUrls, ...postUrls];
}
