"use client";

import { useMemo, useState } from "react";

type DecorativeOrbProps = {
  size?: number;
};

export default function DecorativeOrb({ size = 220 }: DecorativeOrbProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const style = useMemo(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    }),
    [size, tilt.x, tilt.y],
  );

  return (
    <div className="pointer-events-auto [perspective:900px]">
      <div
        className="relative rounded-full border border-[color:var(--panel-border)] bg-gradient-to-br from-[#1f3d63] via-[#1c568b] to-[#12314f] shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform duration-150 ease-out"
        style={style}
        onMouseMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width;
          const py = (event.clientY - bounds.top) / bounds.height;
          setTilt({ x: (0.5 - py) * 10, y: (px - 0.5) * 10 });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        aria-hidden
      >
        <div className="absolute inset-[18%] rounded-full border border-sky-200/25" />
        <div className="absolute inset-[34%] rounded-full border border-cyan-100/20" />
        <div className="absolute bottom-[12%] left-[12%] h-[24%] w-[24%] rounded-full bg-white/20 blur-md" />
      </div>
    </div>
  );
}
