"use client";

import { useEffect, useRef, useState } from "react";
import { initGallery3D } from "./src/gallery3d.js";
import "./CharactersCarousel.css";

interface CharactersCarouselProps {
  className?: string;
}

export default function CharactersCarousel({
  className = "",
}: CharactersCarouselProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Prevent double initialization in React strict mode
    if (initRef.current) return;

    const initGallery = async () => {
      if (!canvasRef.current) {
        setDebugInfo("Canvas ref is null");
        return;
      }

      if (!containerRef.current) {
        setDebugInfo("Container ref is null");
        return;
      }

      try {
        let canvasCheckInterval: NodeJS.Timeout;
        setDebugInfo("Initializing gallery...");

        // Log canvas and container info for debugging
        const canvas = canvasRef.current;
        const container = containerRef.current;

        console.log("CharactersCarousel Debug:", {
          canvas: {
            element: canvas,
            id: canvas.id,
            className: canvas.className,
            offsetWidth: canvas.offsetWidth,
            offsetHeight: canvas.offsetHeight,
            clientWidth: canvas.clientWidth,
            clientHeight: canvas.clientHeight,
            style: {
              width: canvas.style.width,
              height: canvas.style.height,
              position: canvas.style.position,
              display: canvas.style.display,
              visibility: canvas.style.visibility,
            },
          },
          container: {
            element: container,
            offsetWidth: container.offsetWidth,
            offsetHeight: container.offsetHeight,
            clientWidth: container.clientWidth,
            clientHeight: container.clientHeight,
            boundingClientRect: container.getBoundingClientRect(),
          },
        });

        // Monitor canvas DOM presence
        const checkCanvasPresence = () => {
          const canvasInDOM = document.getElementById(
            "characters-carousel-canvas",
          );
          const canvasStillConnected = canvas.isConnected;
        };

        // Check immediately and after gallery init
        checkCanvasPresence();
        canvasCheckInterval = setInterval(checkCanvasPresence, 100);

        // Ensure canvas is visible and properly sized
        canvas.style.display = "block";
        canvas.style.visibility = "visible";

        await initGallery3D(canvasRef);
        initRef.current = true;
        setIsInitialized(true);
        setDebugInfo("Gallery initialized successfully");

        // Final check after initialization
        setTimeout(() => {
          if (canvasCheckInterval!) {
            clearInterval(canvasCheckInterval);
          }
        }, 2000);
      } catch (err) {
        console.error("Gallery initialization error:", err);
        setDebugInfo(
          `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
        );
      }
    };

    // Add a small delay to ensure the DOM is fully ready
    const timer = setTimeout(initGallery, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Note: The gallery3d.js doesn't expose a cleanup method,
      // so we rely on React's unmounting to clean up
      // Consider adding a cleanup export to gallery3d.js for proper disposal
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`characters-carousel-container ${className}`}
      id="characters-carousel-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "400px", // Ensure minimum height
      }}
    >
      <canvas
        id="characters-carousel-canvas"
        ref={canvasRef}
        className="characters-carousel-canvas"
        style={{
          display: "block",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
