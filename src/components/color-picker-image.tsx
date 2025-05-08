
"use client";

import Image from 'next/image';
import type { MouseEvent } from 'react';
import { useRef, useState, useEffect } from 'react';
import type { RgbColor } from '@/lib/personal-colors';

interface ColorPickerImageProps {
  imageUrl?: string;
  onColorSelect: (color: RgbColor) => void;
}

export function ColorPickerImage({ imageUrl, onColorSelect }: ColorPickerImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (imageUrl && imageRef.current) {
      setIsImageLoaded(false);
      const img = imageRef.current;
      // Ensure existing onload/onerror are cleared before assigning new ones
      img.onload = null;
      img.onerror = null;

      img.onload = () => {
        setIsImageLoaded(true);
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
          }
        }
      };
      img.onerror = () => {
        console.error("Error loading image.");
        setIsImageLoaded(false);
      }
      // Setting src should happen after onload/onerror are set
      img.src = imageUrl; 
    } else if (!imageUrl) {
      // Reset image loaded state if imageUrl is removed
      setIsImageLoaded(false);
    }
  }, [imageUrl]);

  const handleCanvasClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !isImageLoaded) return;

    const rect = canvas.getBoundingClientRect();
    // Account for display scaling of the canvas
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    
    const actualX = Math.floor(x);
    const actualY = Math.floor(y);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixel = ctx.getImageData(actualX, actualY, 1, 1).data;
    onColorSelect({ r: pixel[0], g: pixel[1], b: pixel[2] });
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {imageUrl ? (
        <>
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className={`w-full h-auto rounded-lg shadow-md ${isImageLoaded ? 'cursor-crosshair' : 'cursor-default'} ${!isImageLoaded ? 'hidden' : ''}`}
            aria-label="Image for color picking. Click to select a color."
          />
          {/* Hidden image tag for loading and getting natural dimensions */}
          <img ref={imageRef} src={imageUrl} alt="Uploaded for analysis" className="hidden" crossOrigin="anonymous" />
          {isImageLoaded === false && ( // Show loading only when imageUrl is present but not yet loaded
            <div className="w-full h-64 bg-muted rounded-lg shadow-md flex items-center justify-center">
              <p className="text-muted-foreground">Loading image...</p>
            </div>
          )}
        </>
      ) : (
        <div 
          className="w-full aspect-[4/3] bg-muted rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4"
          data-ai-hint="upload placeholder"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground mb-2 opacity-50"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
          <p className="text-muted-foreground">Upload an image to begin color analysis.</p>
          <p className="text-xs text-muted-foreground mt-1">Click the "Upload Image" button.</p>
        </div>
      )}
    </div>
  );
}

