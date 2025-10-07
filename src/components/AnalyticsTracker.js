"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (window.gtag) {
      window.gtag("config", "G-L7Q7EMK00H", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
