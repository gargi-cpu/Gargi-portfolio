"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectScreenshotProps = {
  src: string;
  alt: string;
};

export default function ProjectScreenshot({ src, alt }: ProjectScreenshotProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-44 items-center justify-center rounded-xl border border-dashed border-[color:var(--panel-border)] bg-[color:var(--panel-soft)] px-4 text-center text-xs text-[color:var(--text-soft)]">
        Add screenshot at <span className="ml-1 font-semibold text-[color:var(--text-muted)]">{src}</span>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-soft)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
