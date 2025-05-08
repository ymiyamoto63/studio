"use client";

import type { RgbColor, Season, NamedColor } from '@/lib/personal-colors';
import { rgbToHex } from '@/lib/personal-colors';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ColorAnalysisResultsProps {
  selectedColor: RgbColor | null;
  closestMatch: { season: Season; color: NamedColor } | null;
}

const seasonStyles: Record<Season, string> = {
  SPRING: 'bg-green-200 text-green-800 border-green-400',
  SUMMER: 'bg-blue-200 text-blue-800 border-blue-400',
  AUTUMN: 'bg-orange-200 text-orange-800 border-orange-400',
  WINTER: 'bg-purple-200 text-purple-800 border-purple-400',
};

const seasonNames: Record<Season, string> = {
  SPRING: 'Spring',
  SUMMER: 'Summer',
  AUTUMN: 'Autumn',
  WINTER: 'Winter',
};

export function ColorAnalysisResults({ selectedColor, closestMatch }: ColorAnalysisResultsProps) {
  if (!selectedColor) {
    return (
      <Card className="w-full max-w-md mx-auto mt-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-center">Color Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            Click on the image with the color picker tool to analyze a pixel.
          </p>
        </CardContent>
      </Card>
    );
  }

  const hexValue = rgbToHex(selectedColor);

  return (
    <Card className="w-full max-w-md mx-auto mt-6 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-center">Color Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-md bg-muted">
          <span className="font-medium text-foreground">Selected Color:</span>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md border"
              style={{ backgroundColor: hexValue }}
              aria-label={`Color swatch for ${hexValue}`}
            />
            <span className="font-mono text-sm">{hexValue}</span>
          </div>
        </div>

        <div className="p-3 rounded-md bg-muted">
          <p className="font-medium text-foreground mb-1">RGB Value:</p>
          <p className="text-sm text-muted-foreground">
            R: {selectedColor.r}, G: {selectedColor.g}, B: {selectedColor.b}
          </p>
        </div>

        {closestMatch && (
          <>
            <div className="p-3 rounded-md bg-muted">
              <p className="font-medium text-foreground mb-1">Closest Named Color:</p>
              <div className="flex items-center justify-between">
                 <span className="text-sm text-muted-foreground">{closestMatch.color.name}</span>
                 <div
                    className="w-5 h-5 rounded-md border"
                    style={{ backgroundColor: rgbToHex(closestMatch.color.rgb) }}
                    aria-label={`Color swatch for ${closestMatch.color.name}`}
                  />
              </div>
            </div>
            <div className="p-3 rounded-md bg-muted flex items-center justify-between">
              <p className="font-medium text-foreground">Personal Color Season:</p>
              <Badge className={`${seasonStyles[closestMatch.season]} px-3 py-1 text-sm`}>
                {seasonNames[closestMatch.season]}
              </Badge>
            </div>
          </>
        )}
        {!closestMatch && (
           <div className="p-3 rounded-md bg-muted">
            <p className="text-muted-foreground text-center">Could not determine personal color season.</p>
           </div>
        )}
      </CardContent>
    </Card>
  );
}
