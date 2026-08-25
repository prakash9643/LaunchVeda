"use client";

import { IMAGE_FALLBACK } from "./blogData";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
}

export default function BlogImage({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
}: BlogImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = IMAGE_FALLBACK;
      }}
      className={className}
    />
  );
}
