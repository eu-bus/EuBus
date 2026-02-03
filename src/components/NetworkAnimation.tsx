"use client";

import { useEffect, useRef } from "react";

interface NetworkAnimationProps {
  variant?: "blue" | "mixed";
}

export default function NetworkAnimation({ variant = "blue" }: NetworkAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100); 
    const connectionDistance = 150;
    const pulseSpeed = 0.05;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      pulse: number;
      colorBase: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseSize = Math.random() * 3 + 1; 
        this.size = this.baseSize;
        this.pulse = Math.random() * Math.PI * 2;
        
        // Color selection based on variant
        if (variant === "mixed") {
            // Mix of Blue-500 (#3b82f6) and Violet-600 (#7c3aed)
            this.colorBase = Math.random() > 0.5 ? "59, 130, 246" : "124, 58, 237";
        } else {
            // Default Blue-500
            this.colorBase = "59, 130, 246";
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.pulse += pulseSpeed;
        this.size = this.baseSize + Math.sin(this.pulse) * 1; 
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
        
        const opacity = 0.3 + (Math.sin(this.pulse) + 1) / 4; 
        ctx.fillStyle = `rgba(${this.colorBase}, ${opacity})`;
        ctx.fill();
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.colorBase}, 0.5)`;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      ctx.lineWidth = 0.5;
      ctx.shadowBlur = 0; 
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            
            const lineBase = variant === "mixed" ? "139, 92, 246" : "100, 116, 139"; 
            
            ctx.strokeStyle = `rgba(${lineBase}, ${opacity * 0.2})`; 
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            if (Math.sin(Date.now() / 500 + i) > 0.95) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${particles[i].colorBase}, ${opacity})`;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
       if(!canvas.parentElement) return;
       width = canvas.width = canvas.parentElement.offsetWidth;
       
       const parentHeight = canvas.parentElement.offsetHeight;
       const isMobile = window.innerWidth < 768;
       
       // Limit height on mobile to max 200vh to prevent performance issues with very long sections
       height = canvas.height = isMobile 
         ? Math.min(parentHeight, window.innerHeight * 2) 
         : parentHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    // Initial resize to ensure correct size
    handleResize();

    return () => {
        resizeObserver.disconnect();
        cancelAnimationFrame(animationId);
    };
  }, [variant]); 

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
