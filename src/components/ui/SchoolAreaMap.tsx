"use client";

import { useState } from "react";
import { AREAS, type Area } from "@/lib/schools";

// A simplified, not-to-scale map of Phuket split into the five directory
// areas. The shapes only need to put each area in the right part of the
// island relative to the others; the landmarks do the real work of telling
// a parent which area they live in.
const REGIONS: {
  id: Area;
  short: string;
  points: string;
  label: [number, number];
  landmarks: string[];
}[] = [
  {
    id: "north",
    short: "North",
    points: "150,18 200,22 225,70 238,130 250,200 190,200 85,200 95,150 110,90 130,45",
    label: [168, 120],
    landmarks: ["Phuket International Airport", "Thalang town", "Heroines Monument", "Thanyapura", "Nai Yang and Mai Khao beaches"],
  },
  {
    id: "west",
    short: "West Coast",
    points: "85,200 190,200 190,290 80,290 66,250",
    label: [130, 250],
    landmarks: ["Laguna Phuket", "Bangtao Beach", "Boat Avenue", "Porto de Phuket", "Surin Beach"],
  },
  {
    id: "central",
    short: "Kathu",
    points: "80,290 190,290 190,400 110,400 86,360 70,320",
    label: [138, 350],
    landmarks: ["Kathu", "Patong Beach", "Jungceylon", "Kathu Waterfall"],
  },
  {
    id: "town",
    short: "Town",
    points: "190,200 250,200 262,250 272,300 268,350 255,400 190,400",
    label: [228, 300],
    landmarks: ["Phuket Old Town", "Central Phuket Festival", "Boat Lagoon", "Royal Phuket Marina", "Bangkok Hospital Phuket"],
  },
  {
    id: "south",
    short: "South",
    points: "110,400 255,400 245,440 230,480 205,520 170,540 140,530 120,495 100,450",
    label: [178, 465],
    landmarks: ["Chalong Circle", "Wat Chalong", "Big Buddha", "Rawai Beach", "Nai Harn Beach"],
  },
];

export default function SchoolAreaMap({
  selected,
  counts,
  onSelect,
}: {
  selected: "All" | Area;
  counts: Record<Area, number>;
  onSelect: (area: "All" | Area) => void;
}) {
  const [hover, setHover] = useState<Area | null>(null);
  const focus = hover ?? (selected === "All" ? null : selected);
  const info = focus ? AREAS.find((a) => a.id === focus) : null;
  const region = focus ? REGIONS.find((r) => r.id === focus) : null;

  return (
    <div className="grid gap-5 md:grid-cols-[3fr_2fr]">
      <div>
        <svg
          viewBox="0 0 340 560"
          className="mx-auto h-auto w-full max-w-sm select-none"
          role="group"
          aria-label="Map of Phuket divided into five school areas"
        >
          <rect x={0} y={0} width={340} height={560} rx={16} fill="#EAFBFC" />
          <text x={22} y={300} fontSize={12} fill="#2a8f9c" transform="rotate(-90 22 300)" pointerEvents="none">
            Andaman Sea
          </text>
          <text x={312} y={180} fontSize={12} fill="#2a8f9c" transform="rotate(90 312 180)" pointerEvents="none">
            Phang Nga Bay
          </text>
          {REGIONS.map((r) => {
            const isSelected = selected === r.id;
            const isHover = hover === r.id;
            return (
              <polygon
                key={r.id}
                points={r.points}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`${AREAS.find((a) => a.id === r.id)?.label}, ${counts[r.id]} schools`}
                onClick={() => onSelect(isSelected ? "All" : r.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(isSelected ? "All" : r.id);
                  }
                }}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(r.id)}
                onBlur={() => setHover(null)}
                className="cursor-pointer outline-none transition-colors"
                style={{
                  fill: isSelected ? "#0E7C86" : isHover ? "#FFF0EC" : "#F6EFE3",
                  stroke: isHover && !isSelected ? "#FF6B4A" : "#FFFFFF",
                  strokeWidth: 3,
                  strokeLinejoin: "round",
                }}
              />
            );
          })}
          {/* Airport marker, the one landmark everyone knows */}
          <g pointerEvents="none">
            <circle cx={150} cy={58} r={5} fill="#FFFFFF" stroke="#1B2A3A" strokeWidth={2} />
            <text x={160} y={62} fontSize={10} fontWeight={600} fill="#333333" stroke="#FFFFFF" strokeWidth={3} paintOrder="stroke">
              Airport
            </text>
          </g>
          {REGIONS.map((r) => {
            const isSelected = selected === r.id;
            return (
              <g key={r.id} pointerEvents="none" textAnchor="middle">
                <text
                  x={r.label[0]}
                  y={r.label[1]}
                  fontSize={14}
                  fontWeight={700}
                  fill={isSelected ? "#FFFFFF" : "#1B2A3A"}
                >
                  {r.short}
                </text>
                <text
                  x={r.label[0]}
                  y={r.label[1] + 16}
                  fontSize={11}
                  fill={isSelected ? "#FFFFFF" : "#555555"}
                >
                  {counts[r.id]} {counts[r.id] === 1 ? "school" : "schools"}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-1 text-center text-xs text-neutral-400">Simplified map, not to scale.</p>
      </div>

      <div className="rounded-xl border border-black/5 bg-neutral-50 p-5 text-sm">
        {info && region ? (
          <>
            <h3 className="font-heading text-lg font-bold text-purple-dark">{info.label}</h3>
            <p className="mt-1 text-neutral-600">{info.covers}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-neutral-500">
              Landmarks
            </p>
            <ul className="mt-1.5 space-y-1 text-neutral-700">
              {region.landmarks.map((l) => (
                <li key={l}>📍 {l}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-purple-dark">
              {counts[info.id]} {counts[info.id] === 1 ? "school" : "schools"}
            </p>
            {selected === info.id ? (
              <button
                type="button"
                onClick={() => onSelect("All")}
                className="mt-3 text-sm font-semibold text-teal hover:underline"
              >
                Show all areas
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onSelect(info.id)}
                className="mt-3 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Show schools here
              </button>
            )}
          </>
        ) : (
          <>
            <h3 className="font-heading text-lg font-bold text-purple-dark">Pick your part of the island</h3>
            <p className="mt-2 text-neutral-600">
              Tap an area on the map to see the schools there. Hover over or tap an area to see its
              landmarks, so you can tell which one you live in. School runs on Phuket are mostly by
              car or school bus, so being in the right part of the island matters.
            </p>
            <p className="mt-3 text-neutral-600">Tap the selected area again to clear it.</p>
          </>
        )}
      </div>
    </div>
  );
}
