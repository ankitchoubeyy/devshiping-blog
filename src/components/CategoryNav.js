"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://whitesmoke-wildcat-383702.hostingersite.com/wp-json/wp/v2/categories");
        const data = await res.json();
        const visible = data.filter((cat) => cat.count > 0);
        setCategories(visible);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 my-8">
      
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/category/${cat.slug}`}
          className="py-2 md:py-4 flex flex-col items-center w-20 bg-secondary shadow-md rounded-full overflow-hidden hover:shadow-lg transition"
        >
          <p className="text-center font-medium text-white">{cat.name}</p>
        </Link>
      ))}
    </div>
  );
}
