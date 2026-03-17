"use client";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [stage, setStage] = useState<"tumor" | "healing" | "done">("tumor");

  useEffect(() => {
    // Stage 1: Tumor (Erratic, dark red/purple) -> lasts 1.5s
    const timer1 = setTimeout(() => {
      setStage("healing");
    }, 1500);

    // Stage 2: Healing (Organized, glowing cyan/teal) -> lasts 2s before fade out
    const timer2 = setTimeout(() => {
      setStage("done");
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-1000 ${stage === "healing" ? "opacity-100" : ""}`}>
      
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Core Mass */}
        <div className={`absolute w-32 h-32 rounded-full blur-xl transition-all duration-1000 ease-in-out ${
            stage === "tumor" 
            ? "bg-red-900/50 scale-100 animate-pulse" 
            : "bg-cold-cyan/30 scale-150"
        }`}></div>

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-[1500ms] ease-out ${
              stage === "tumor" ? "bg-red-500/80" : "bg-teal-400"
            }`}
            style={{
              width: stage === "tumor" ? Math.random() * 10 + 5 + "px" : "6px",
              height: stage === "tumor" ? Math.random() * 10 + 5 + "px" : "6px",
              // Chaotic clustered positioning for tumor, expanded organized circular positioning for healing
              top: stage === "tumor" 
                ? `${50 + (Math.random() - 0.5) * 40}%` 
                : `${50 + Math.sin((i / 20) * Math.PI * 2) * 45}%`,
              left: stage === "tumor" 
                ? `${50 + (Math.random() - 0.5) * 40}%` 
                : `${50 + Math.cos((i / 20) * Math.PI * 2) * 45}%`,
              boxShadow: stage === "healing" ? "0 0 10px rgba(45,212,191,0.8)" : "none",
            }}
          ></div>
        ))}

        {/* Center Text/Symbol */}
        <div className={`absolute text-white font-outfit text-2xl font-bold tracking-[0.2em] transition-all duration-1000 ${
          stage === "tumor" ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}>
          PRECISION
        </div>
      </div>
      
    </div>
  );
}
