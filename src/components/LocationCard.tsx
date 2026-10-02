"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Clock, Compass, Globe, ExternalLink, Radio } from "lucide-react";
import { DEVELOPER_INFO } from "@/data/portfolioData";

export default function LocationCard() {
  const [istTime, setIstTime] = useState<string>("");
  const [visitorTime, setVisitorTime] = useState<string>("");
  const [visitorTz, setVisitorTz] = useState<string>("");
  const [timeDiffText, setTimeDiffText] = useState<string>("");
  const [isWorkingHours, setIsWorkingHours] = useState<boolean>(true);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Format IST Time
      const istOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formattedIst = new Intl.DateTimeFormat("en-US", istOptions).format(now);
      setIstTime(formattedIst);

      // Check IST hour for working status (9 AM to 10 PM IST)
      const istHourStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      }).format(now);
      const istHour = parseInt(istHourStr, 10);
      setIsWorkingHours(istHour >= 9 && istHour < 22);

      // Visitor timezone & time
      try {
        const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setVisitorTz(localTz || "Your Local Time");

        const localTimeStr = new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setVisitorTime(localTimeStr);

        // Compute offset difference in minutes
        // IST is UTC+5.5 (+330 minutes)
        const localOffsetMinutes = -now.getTimezoneOffset(); // in minutes from UTC
        const istOffsetMinutes = 330; // +5:30
        const diffMinutes = localOffsetMinutes - istOffsetMinutes;
        const diffHours = diffMinutes / 60;

        if (Math.abs(diffHours) < 0.25) {
          setTimeDiffText("Same timezone as you");
        } else if (diffHours > 0) {
          const absH = Math.floor(diffHours);
          const absM = Math.round((diffHours - absH) * 60);
          const timeStr = absM > 0 ? `${absH}h ${absM}m` : `${absH}h`;
          setTimeDiffText(`You are ${timeStr} ahead of IST`);
        } else {
          const posHours = Math.abs(diffHours);
          const absH = Math.floor(posHours);
          const absM = Math.round((posHours - absH) * 60);
          const timeStr = absM > 0 ? `${absH}h ${absM}m` : `${absH}h`;
          setTimeDiffText(`You are ${timeStr} behind IST`);
        }
      } catch {
        setTimeDiffText("Global Remote Collaboration");
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 sm:p-7 bg-[#0D1D3A]/60 border border-[#1E3A5F]/80 rounded-2xl flex flex-col gap-6 shadow-sm relative overflow-hidden backdrop-blur-sm group hover:border-[#38BDF8]/40 transition-all duration-300">
      {/* Subtle background ambient mesh */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#0067FE]/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header telemetry line */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F]/60">
        <div className="flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold">
            Location &amp; Radar Telemetry
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#001238] border border-[#1E3A5F] text-[#CBD5E1]">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isWorkingHours ? "bg-emerald-400 animate-pulse" : "bg-[#38BDF8]"
            }`}
          />
          {isWorkingHours ? "ACTIVE NOW" : "STANDBY (IST)"}
        </span>
      </div>

      {/* Stylized Dark Radar Map Visualization */}
      <div className="relative w-full h-44 rounded-xl bg-[#000E29] border border-[#1E3A5F]/80 overflow-hidden flex items-center justify-center select-none shadow-inner">
        {/* Background Radar Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* Concentric Radar Rings centered at Nashik coordinates */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full border border-[#38BDF8]/20 animate-ping duration-1000" />
          <div className="absolute w-36 h-36 rounded-full border border-[#38BDF8]/20" />
          <div className="absolute w-56 h-56 rounded-full border border-[#38BDF8]/10 border-dashed" />
          <div className="absolute w-80 h-80 rounded-full border border-[#1E3A5F]/40" />

          {/* Radar Sweep Needle */}
          <div
            className="absolute w-44 h-44 rounded-full pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, rgba(56, 189, 248, 0.25) 0deg, transparent 60deg, transparent 360deg)",
              animation: "spin 6s linear infinite",
            }}
          />
        </div>

        {/* Stylized Geographic Map Outline Marker */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          viewBox="0 0 400 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Schematic coastline and border vector arcs */}
          <path
            d="M 60,30 Q 120,40 180,30 T 320,40 T 380,80 Q 340,130 280,150 T 160,160 T 50,110 Z"
            stroke="#1E3A5F"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 120,60 Q 200,70 260,110"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>

        {/* Center Target Beacon: Nashik, Maharashtra */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/* Ping Rings */}
            <span className="absolute w-8 h-8 rounded-full bg-[#38BDF8]/30 animate-ping" />
            <span className="absolute w-5 h-5 rounded-full bg-[#0067FE]/50" />
            {/* Center Core Dot */}
            <span className="relative w-3 h-3 rounded-full bg-[#38BDF8] border-2 border-white shadow-[0_0_12px_#38BDF8]" />
          </div>

          {/* Floating Location Tag */}
          <div className="mt-2.5 px-3 py-1 rounded-md bg-[#00081C]/90 border border-[#38BDF8]/40 backdrop-blur-md shadow-lg flex items-center gap-1.5 font-mono text-[11px] text-white">
            <MapPin className="w-3 h-3 text-[#38BDF8] shrink-0" />
            <span className="font-bold tracking-wide">NASHIK, MH</span>
            <span className="text-[#38BDF8] text-[9px] font-semibold tracking-wider uppercase bg-[#0D1D3A] px-1 py-0.2 rounded border border-[#1E3A5F]">
              IN
            </span>
          </div>
        </div>

        {/* Top-Right Coordinates HUD */}
        <div className="absolute top-2.5 right-3 font-mono text-[10px] text-[#38BDF8]/80 bg-[#00081C]/75 px-2 py-0.5 rounded border border-[#1E3A5F]/60">
          LAT 19.99° N // LON 73.79° E
        </div>

        {/* Bottom-Left Regional Anchor */}
        <div className="absolute bottom-2.5 left-3 font-mono text-[10px] text-[#94A3B8] bg-[#00081C]/75 px-2 py-0.5 rounded border border-[#1E3A5F]/60">
          REGION: MAHARASHTRA // UTC+05:30
        </div>
      </div>

      {/* Primary Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
        {/* Nashik Local IST Time */}
        <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#94A3B8]">
            <span className="text-[10px] uppercase flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#38BDF8]" />
              Local Time (IST)
            </span>
            <span className="text-[9px] text-[#38BDF8] font-bold">UTC+5:30</span>
          </div>
          <span className="text-white font-bold text-base tracking-wide font-mono">
            {istTime || "Loading..."}
          </span>
          <span className="text-[10px] text-[#94A3B8]">
            {isWorkingHours ? "Standard Active Business Hours" : "Off-Hours • Async Responses Active"}
          </span>
        </div>

        {/* Visitor Timezone Sync */}
        <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#94A3B8]">
            <span className="text-[10px] uppercase flex items-center gap-1">
              <Globe className="w-3 h-3 text-[#38BDF8]" />
              Your Local Time
            </span>
            <span className="text-[9px] text-[#94A3B8] truncate max-w-[90px]">
              {visitorTz ? visitorTz.split("/").pop()?.replace(/_/g, " ") : "Local"}
            </span>
          </div>
          <span className="text-[#38BDF8] font-bold text-base tracking-wide font-mono">
            {visitorTime || "--:--"}
          </span>
          <span className="text-[10px] text-emerald-400 font-medium">
            {timeDiffText}
          </span>
        </div>
      </div>

      {/* Geolocation Telemetry Breakdown */}
      <div className="p-3.5 rounded-xl bg-[#07152F] border border-[#1E3A5F] flex flex-col gap-2.5 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E3A5F]/50">
          <span className="text-[#94A3B8] text-[11px] uppercase">Base City</span>
          <span className="text-white font-semibold">Nashik, Maharashtra</span>
        </div>
        <div className="flex items-center justify-between pb-2 border-b border-[#1E3A5F]/50">
          <span className="text-[#94A3B8] text-[11px] uppercase flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#38BDF8]" />
            Coordinates
          </span>
          <span className="text-[#38BDF8] font-semibold">{DEVELOPER_INFO.coordinates.lat}, {DEVELOPER_INFO.coordinates.lng}</span>
        </div>
        <div className="flex items-center justify-between pb-2 border-b border-[#1E3A5F]/50">
          <span className="text-[#94A3B8] text-[11px] uppercase">Timezone</span>
          <span className="text-white font-semibold">{DEVELOPER_INFO.timezone}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#94A3B8] text-[11px] uppercase">Work Model</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            100% Worldwide Remote
          </span>
        </div>
      </div>

      {/* External Map Action */}
      <div className="pt-1 flex items-center justify-between text-xs font-mono">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Nashik+Maharashtra+India"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#38BDF8] hover:text-white transition-colors duration-200 group/link"
        >
          <span>VIEW NASHIK ON GOOGLE MAPS</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>

        <span className="text-[#64748B] text-[11px]">
          MH • INDIA
        </span>
      </div>
    </div>
  );
}
