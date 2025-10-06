"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Card, CardContent } from "@/components/ui/card";

import PostSkeleton from "@/components/PostSkeleton";
import { FaArrowRight } from "react-icons/fa";
import CategoryNav from "@/components/CategoryNav";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/posts?_embed");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* Hero Slider */}
      <div className="mb-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="rounded-2xl overflow-hidden"
        >
          {posts.slice(0, 5).map((post) => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return (
              <SwiperSlide key={post.id}>
                <Card className="relative w-full h-80 overflow-hidden">
                  {image && (
                    <Image
                      src={image}
                      alt={post.title.rendered}
                      fill
                      className="object-cover brightness-75"
                    />
                  )}
                  <CardContent className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h2
                      className="text-2xl font-semibold mb-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <Link
                      href={`/posts/${post.slug}`}
                      className="bg-secondary flex w-fit gap-3 items-center text-white py-2 px-4 rounded  hover:text-white hover:bg-secondary/80 font-medium"
                    >
                      Read More <FaArrowRight/>
                    </Link>
                  </CardContent>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-8 border-l-4 border-secondary pl-2">Latest Posts</h2>

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

        <h2 className="text-2xl sm:text-3xl font-bold mt-8 border-l-4 border-secondary pl-2">Categories</h2>
      <CategoryNav />
    </div>
  );
}
