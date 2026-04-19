"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundRipple({
  className = "",
  children,
  isdark = true,
}) {
  const containerRef = useRef(null);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false });
  const [gridSize, setGridSize] = useState({ columns: 16, rows: 8 });

  useEffect(() => {
    const updateGridSize = () => {
      if (window.innerWidth < 640) {
        setGridSize({ columns: 8, rows: 10 });
        return;
      }

      if (window.innerWidth < 1024) {
        setGridSize({ columns: 12, rows: 9 });
        return;
      }

      setGridSize({ columns: 16, rows: 8 });
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);

    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  const cells = useMemo(
    () =>
      Array.from({ length: gridSize.columns * gridSize.rows }, (_, index) => ({
        col: index % gridSize.columns,
        row: Math.floor(index / gridSize.columns),
        id: index,
      })),
    [gridSize]
  );

  const updatePointerState = (clientX, clientY) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;

    const x = relativeX * 100;
    const y = relativeY * 100;

    const col = Math.max(
      0,
      Math.min(gridSize.columns - 1, Math.floor(relativeX * gridSize.columns))
    );

    const row = Math.max(
      0,
      Math.min(gridSize.rows - 1, Math.floor(relativeY * gridSize.rows))
    );

    setPointer({ x, y, active: true });
    setHoveredCell({ col, row });
  };

  const handlePointerMove = (event) => {
    updatePointerState(event.clientX, event.clientY);
  };

  const handlePointerLeave = () => {
    setHoveredCell(null);
    setPointer((current) => ({ ...current, active: false }));
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerLeave}
      className={cn(
        "relative overflow-hidden",
        isdark ? "bg-[#050816]" : "bg-white",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Base background */}
        <div
          className={cn(
            "absolute inset-0",
            isdark
              ? "bg-[linear-gradient(180deg,rgba(16,16,18,0.98),rgba(8,8,10,1))]"
              : "bg-white"
          )}
        />

        {/* Pointer glow */}
        <div
          className="absolute inset-0 opacity-90 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, ${
              isdark
                ? "rgba(255,255,255,0.12), rgba(111,111,111,0.06) 14%, rgba(0,0,0,0) 30%)"
                : "rgba(0,0,0,0.10), rgba(0,0,0,0.04) 14%, rgba(0,0,0,0) 30%)"
            }`,
            opacity: pointer.active ? 1 : 0.45,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize.columns}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${gridSize.rows}, minmax(0, 1fr))`,
          }}
        >
          {cells.map((cell) => {
            const isActive =
              hoveredCell &&
              cell.col === hoveredCell.col &&
              cell.row === hoveredCell.row;

            return (
              <div
                key={cell.id}
                className={cn(
                  "transition-colors duration-150",
                  isdark ? "border border-white/8" : "border border-black/20"
                )}
                style={{
                  backgroundColor: isActive
                    ? isdark
                      ? "rgba(255,255,255,0.14)"
                      : "rgba(0,0,0,0.08)"
                    : isdark
                    ? "rgba(255,255,255,0.012)"
                    : "rgba(0,0,0,0.02)",
                  boxShadow: isActive
                    ? isdark
                      ? "inset 0 0 24px rgba(214, 10, 10, 0.06)"
                      : "inset 0 0 24px rgba(0,0,0,0.08)"
                    : "none",
                }}
              />
            );
          })}
        </div>

        {/* Top overlay */}
        <div
          className={cn(
            "absolute inset-0",
            isdark
              ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_55%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]"
              : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent_55%),linear-gradient(90deg,rgba(0,0,0,0.06),transparent_18%,transparent_82%,rgba(0,0,0,0.06))]"
          )}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function BackgroundRippleEffectDemo() {
  return <BackgroundRipple className="min-h-screen w-full" isdark={true} />;
}