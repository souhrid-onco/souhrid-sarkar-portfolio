"use client";
import { useEffect, useRef } from "react";

class Cell {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  color: string;
  connections: number = 0;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.baseRadius = Math.random() * 3 + 1.5; // Slightly larger for better visibility
    this.radius = this.baseRadius;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    // Clinical cold theme colors: glowing cyans, teals, faint purples for plasticity
    const colors = [
      "rgba(6, 182, 212, 0.6)", // cyan
      "rgba(13, 148, 136, 0.6)", // teal
      "rgba(139, 92, 246, 0.3)", // faint violet
      "rgba(15, 23, 42, 0.8)"  // dark slate
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    
    // Add glow effect for highly connected/active cells (plasticity)
    if (this.connections > 3 || this.radius > this.baseRadius * 1.5) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
    } else {
      ctx.shadowBlur = 0;
    }
    
    ctx.fill();
    ctx.closePath();
  }

  update(canvasWidth: number, canvasHeight: number, mouse: { x: number; y: number }, isHovering: boolean) {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges smoothly
    if (this.x < 0 || this.x > canvasWidth) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvasHeight) this.vy = -this.vy;

    // Interactive cellular plasticity: cells react dynamically to the cursor
    if (isHovering) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDist = 150;
      if (distance < maxDist) {
        // Cells are gently "attracted" or "repelled" representing plasticity
        // We'll use a mix of gentle repulsion and swelling
        const force = (maxDist - distance) / maxDist;
        
        // Repel slightly
        this.x -= (dx / distance) * force * 1.5;
        this.y -= (dy / distance) * force * 1.5;

        // Swell (cellular plasticity/activation)
        this.radius = Math.min(this.baseRadius * 3, this.radius + 0.2);
      } else {
        // Return to normal size
        this.radius = Math.max(this.baseRadius, this.radius - 0.1);
      }
    } else {
       // Return to normal size when mouse leaves
       this.radius = Math.max(this.baseRadius, this.radius - 0.05);
    }
  }
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cells: Cell[] = [];
    let animationFrameId: number;

    const mouse = { x: -1000, y: -1000 };
    let isHovering = false;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cells = [];
      // Reduce density slightly for better performance
      const numCells = Math.floor((canvas.width * canvas.height) / 12000); 
      for (let i = 0; i < numCells; i++) {
        cells.push(new Cell(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      // Create trailing fluid effect (cytoplasm/tissue fluid)
      ctx.fillStyle = "rgba(8, 15, 30, 0.15)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reset connections count
      cells.forEach(c => c.connections = 0);

      // Draw connections (networking/signaling concept)
      for (let i = 0; i < cells.length; i++) {
        const cellI = cells[i];
        const distToMouseI = isHovering 
            ? Math.sqrt(Math.pow(cellI.x - mouse.x, 2) + Math.pow(cellI.y - mouse.y, 2)) 
            : Infinity;
        const isNearMouse = distToMouseI < 150;

        for (let j = i + 1; j < cells.length; j++) {
          const cellJ = cells[j];
          const dx = cellI.x - cellJ.x;
          const dy = cellI.y - cellJ.y;
          const distSq = dx * dx + dy * dy;

          // Connect cells when close (10000 = 100^2)
          if (distSq < 10000) {
            cellI.connections++;
            cellJ.connections++;
            
            ctx.beginPath();
            const distance = Math.sqrt(distSq);
            let opacity = 1 - distance / 100;
            
            // Boost opacity if near mouse
            if (isNearMouse) {
                opacity = Math.min(1, opacity * 2);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Violet connection near cursor
                ctx.lineWidth = 1;
            } else {
                ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.5})`; // Default cyan
                ctx.lineWidth = 0.5;
            }
            
            ctx.moveTo(cellI.x, cellI.y);
            ctx.lineTo(cellJ.x, cellJ.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw cells last so they appear above lines
      cells.forEach((cell) => {
        cell.update(canvas.width, canvas.height, mouse, isHovering);
        cell.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-90 transition-opacity duration-1000"
    />
  );
}
