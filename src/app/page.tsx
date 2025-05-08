"use client";

import { useState, ChangeEvent, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ColorPickerImage } from '@/components/color-picker-image';
import { ColorAnalysisResults } from '@/components/color-analysis-results';
import type { RgbColor, Season, NamedColor } from '@/lib/personal-colors';
import { findClosestPersonalColor } from '@/lib/personal-colors';
import { UploadCloudIcon, PaletteIcon, SparklesIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function PersonalColorAnalyzerPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<RgbColor | null>(null);
  const [closestMatch, setClosestMatch] = useState<{ season: Season; color: NamedColor } | null>(null);
  const { toast } = useToast();
  
  // client-side rendering for Math.random
  const [randomPlaceholder, setRandomPlaceholder] = useState<string>('');
  useEffect(() => {
    setRandomPlaceholder(`https://picsum.photos/800/600?random=${Math.random()}`);
  }, []);


  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Image Too Large",
          description: "Please upload an image smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a JPG, PNG, WEBP, or GIF image.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        setSelectedColor(null); // Reset selected color when new image is uploaded
        setClosestMatch(null); // Reset closest match
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorSelect = (color: RgbColor) => {
    setSelectedColor(color);
    const match = findClosestPersonalColor(color);
    setClosestMatch(match);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-background text-foreground">
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center mb-2">
            <SparklesIcon className="w-10 h-10 text-primary mr-2" />
            <h1 className="text-4xl font-bold tracking-tight">Personal Color Analyzer</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Discover your personal color season by analyzing colors from your images.
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-8">
        <div className="bg-card p-6 rounded-xl shadow-xl border border-border">
          <label htmlFor="image-upload" className="w-full">
            <Button asChild variant="outline" className="w-full py-6 border-dashed border-2 hover:border-primary hover:bg-accent transition-all duration-200 cursor-pointer">
              <div>
                <UploadCloudIcon className="w-8 h-8 mb-2 text-primary" />
                <span className="text-lg font-medium">Upload Image</span>
                <p className="text-sm text-muted-foreground">Click or drag & drop (JPG, PNG, WEBP, GIF up to 5MB)</p>
              </div>
            </Button>
            <Input 
              id="image-upload" 
              type="file" 
              accept="image/jpeg,image/png,image/webp,image/gif" 
              onChange={handleImageUpload} 
              className="sr-only" 
            />
          </label>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-card p-4 rounded-xl shadow-xl border border-border">
            <ColorPickerImage imageUrl={imageUrl} onColorSelect={handleColorSelect} />
          </div>
          <div className="bg-card p-4 rounded-xl shadow-xl border border-border">
             <ColorAnalysisResults selectedColor={selectedColor} closestMatch={closestMatch} />
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Personal Color Analyzer. All rights reserved.</p>
        <p className="mt-1">Powered by Next.js and ShadCN UI.</p>
      </footer>
    </div>
  );
}
