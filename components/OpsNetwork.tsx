"use client";

import { useEffect, useState } from "react";

type Hub = {
  name: string;
  tz: string;
  x: number;
  y: number;
  delay: number;
};

const HUBS: Hub[] = [
  { name: "London", tz: "Europe/London", x: 210, y: 90, delay: 0 },
  { name: "New York", tz: "America/New_York", x: 640, y: 130, delay: 0.6 },
  { name: "Manila", tz: "Asia/Manila", x: 610, y: 340, delay: 1.2 },
  { name: "Sydney", tz: "Australia/Sydney", x: 260, y: 350, delay: 1.8 },
];

const ORIGIN = { x: 420, y: 235 };

function useClock(tz: string) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: tz,
          }).format(new Date())
        );
      } catch {
        setTime("--:--");
      }
    };
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, [tz]);

  return time;
}

function HubLabel({ hub }: { hub: Hub }) {
  const time = useClock(hub.tz);
  return (
    <g transform={`translate(${hub.x}, ${hub.y})`}>
      <circle r="16" fill="#0D2436" stroke="#22D3EE" strokeOpacity="0.5" />
      <circle r="4" fill="#22D3EE" className="animate-ping-slow" />
      <circle r="4" fill="#22D3EE" />
      <text
        y="34"
        textAnchor="middle"
        className="fill-offwhite/90 font-mono"
        fontSize="12"
        fontWeight={500}
      >
        {hub.name}
      </text>
      <text
        y="50"
        textAnchor="middle"
        className="fill-cyan font-mono"
        fontSize="11"
      >
        {time}
      </text>
    </g>
  );
}

export default function OpsNetwork() {
  return (
    <svg
      viewBox="0 0 860 470"
      className="w-full h-full"
      role="img"
      aria-label="Live network map showing Tropical Consulting Ltd's operational reach across London, New York, Manila and Sydney, connected to headquarters in Mauritius"
    >
      <defs>
        <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* faint concentric orbit rings around Mauritius */}
      {[70, 130, 190].map((r) => (
        <circle
          key={r}
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          r={r}
          fill="none"
          stroke="#1a3f8f"
          strokeOpacity="0.35"
          strokeDasharray="2 6"
        />
      ))}

      <circle
        cx={ORIGIN.x}
        cy={ORIGIN.y}
        r="120"
        fill="url(#originGlow)"
      />

      {/* connection arcs */}
      {HUBS.map((hub) => {
        const midX = (ORIGIN.x + hub.x) / 2;
        const midY = (ORIGIN.y + hub.y) / 2 - 40;
        const d = `M ${ORIGIN.x} ${ORIGIN.y} Q ${midX} ${midY} ${hub.x} ${hub.y}`;
        return (
          <path
            key={hub.name}
            d={d}
            fill="none"
            stroke="#5B8DEF"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="animate-pulse-line"
            style={{ animationDelay: `${hub.delay}s` }}
          />
        );
      })}

      {/* origin node: Mauritius */}
      <g transform={`translate(${ORIGIN.x}, ${ORIGIN.y})`}>
        <circle r="10" fill="#22D3EE" className="animate-ping-slow" />
        <circle r="8" fill="#22D3EE" />
        <circle r="22" fill="none" stroke="#22D3EE" strokeOpacity="0.5" />
        <text
          y="42"
          textAnchor="middle"
          className="fill-offwhite font-mono"
          fontSize="13"
          fontWeight={600}
        >
          MAURITIUS · HQ
        </text>
      </g>

      {HUBS.map((hub) => (
        <HubLabel key={hub.name} hub={hub} />
      ))}
    </svg>
  );
}
