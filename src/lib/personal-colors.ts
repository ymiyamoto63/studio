export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface NamedColor {
  name: string;
  rgb: RgbColor;
}

export type Season = "SPRING" | "SUMMER" | "AUTUMN" | "WINTER";

export const SPRING_COLORS: NamedColor[] = [
  { name: 'ピーチピンク', rgb: { r: 245, g: 197, b: 181 } },
  { name: 'オーロラ', rgb: { r: 235, g: 145, b: 128 } },
  { name: 'カーネーションピンク', rgb: { r: 230, g: 118, b: 135 } },
  { name: 'ウォームピンク', rgb: { r: 222, g: 73, b: 92 } },
  { name: 'スカーレット', rgb: { r: 220, g: 62, b: 59 } },
  { name: 'トマトレッド', rgb: { r: 216, g: 35, b: 50 } },
  { name: 'チャイナレッド', rgb: { r: 220, g: 62, b: 51 } },
  { name: 'アイリス', rgb: { r: 94, g: 81, b: 145 } },
  { name: 'パンジー', rgb: { r: 112, g: 97, b: 155 } },
  { name: 'ロンドントワイライト', rgb: { r: 2, g: 34, b: 44 } },
  { name: 'ターコイズ', rgb: { r: 0, g: 165, b: 156 } },
  { name: 'ケンブリッジブルー', rgb: { r: 82, g: 187, b: 185 } },
  { name: 'ライトアクア', rgb: { r: 150, g: 208, b: 195 } },
  { name: 'パロットグリーン', rgb: { r: 21, g: 167, b: 72 } },
  { name: 'スプリングノート', rgb: { r: 0, g: 167, b: 86 } },
  { name: 'アップルグリーン', rgb: { r: 108, g: 183, b: 68 } },
  { name: 'スプリンググリーン', rgb: { r: 155, g: 201, b: 98 } },
  { name: 'ハニーイエロー', rgb: { r: 251, g: 215, b: 158 } },
  { name: 'カナリアイエロー', rgb: { r: 255, g: 232, b: 109 } },
  { name: 'ミモザ', rgb: { r: 254, g: 219, b: 61 } },
  { name: 'バナナイエロー', rgb: { r: 246, g: 188, b: 37 } },
  { name: 'シャンパンオレンジ', rgb: { r: 231, g: 125, b: 98 } },
  { name: 'ルミナスコーラル', rgb: { r: 228, g: 106, b: 81 } },
  { name: 'バレンシア', rgb: { r: 201, g: 61, b: 53 } },
  { name: 'フロリダゴールド', rgb: { r: 237, g: 150, b: 67 } },
  { name: 'マロン', rgb: { r: 138, g: 80, b: 47 } },
  { name: 'コーヒーブラウン', rgb: { r: 107, g: 69, b: 49 } },
  { name: 'キャメル', rgb: { r: 157, g: 102, b: 48 } },
  { name: 'ビスケット', rgb: { r: 209, g: 164, b: 118 } },
  { name: 'フローラルホワイト', rgb: { r: 253, g: 241, b: 213 } },
  { name: 'アイボリー', rgb: { r: 255, g: 245, b: 220 } },
  { name: 'カント', rgb: { r: 189, g: 190, b: 185 } },
];

export const SUMMER_COLORS: NamedColor[] = [
  { name: 'ベビーピンク', rgb: { r: 249, g: 220, b: 228 } },
  { name: 'パステルピンク', rgb: { r: 238, g: 176, b: 199 } },
  { name: 'オールドローズ', rgb: { r: 218, g: 171, b: 187 } },
  { name: 'イタリアンローズ', rgb: { r: 234, g: 145, b: 165 } },
  { name: 'ローズピンク', rgb: { r: 233, g: 149, b: 182 } },
  { name: 'チェリーピンク', rgb: { r: 230, g: 116, b: 135 } },
  { name: 'ストロベリーレッド', rgb: { r: 207, g: 31, b: 61 } },
  { name: 'クールレッド', rgb: { r: 197, g: 32, b: 55 } },
  { name: 'ウォーターメロンローズ', rgb: { r: 200, g: 56, b: 86 } },
  { name: 'ディープレッド', rgb: { r: 180, g: 29, b: 66 } },
  { name: 'ラズベリー', rgb: { r: 149, g: 68, b: 117 } },
  { name: 'ペールライラック', rgb: { r: 223, g: 192, b: 210 } },
  { name: 'ラベンダー', rgb: { r: 148, g: 142, b: 185 } },
  { name: 'ラベンダーブルー', rgb: { r: 113, g: 140, b: 186 } },
  { name: 'ビーンズブルー', rgb: { r: 129, g: 156, b: 192 } },
  { name: 'セフィアブルー', rgb: { r: 93, g: 159, b: 202 } },
  { name: 'ペールアクア', rgb: { r: 199, g: 232, b: 241 } },
  { name: 'ウェッジウッドブルー', rgb: { r: 59, g: 108, b: 167 } },
  { name: 'キャンパスブルー', rgb: { r: 46, g: 121, b: 177 } },
  { name: 'インクブルー', rgb: { r: 32, g: 58, b: 107 } },
  { name: 'ビリジアン', rgb: { r: 0, g: 139, b: 129 } },
  { name: 'エメラルドグリーン', rgb: { r: 0, g: 149, b: 122 } },
  { name: 'ミントグリーン', rgb: { r: 121, g: 198, b: 187 } },
  { name: 'シトラスイエロー', rgb: { r: 255, g: 239, b: 140 } },
  { name: 'パーリーウッド', rgb: { r: 208, g: 170, b: 152 } },
  { name: 'シャンパーニュ', rgb: { r: 179, g: 151, b: 138 } },
  { name: 'ココア', rgb: { r: 98, g: 75, b: 71 } },
  { name: 'ローズブラウン', rgb: { r: 102, g: 79, b: 72 } },
  { name: 'ダークブルーフォグ', rgb: { r: 55, g: 77, b: 86 } },
  { name: 'アッシュグレイ', rgb: { r: 111, g: 141, b: 150 } },
  { name: 'ブルーミスト', rgb: { r: 220, g: 227, b: 232 } },
  { name: 'オフホワイト', rgb: { r: 248, g: 247, b: 246 } },
];

export const AUTUMN_COLORS: NamedColor[] = [
  { name: 'ペールアプリコット', rgb: { r: 246, g: 196, b: 157 } },
  { name: 'サーモンピンク', rgb: { r: 230, g: 116, b: 106 } },
  { name: 'バーミリオン', rgb: { r: 224, g: 84, b: 53 } },
  { name: 'ダークトマトレッド', rgb: { r: 208, g: 48, b: 54 } },
  { name: 'ダークカーディナル', rgb: { r: 196, g: 49, b: 42 } },
  { name: 'テラコッタ', rgb: { r: 163, g: 51, b: 45 } },
  { name: 'プラム', rgb: { r: 106, g: 57, b: 120 } },
  { name: 'ナイルブルー', rgb: { r: 72, g: 159, b: 162 } },
  { name: 'ティールブルー', rgb: { r: 0, g: 101, b: 111 } },
  { name: 'ダークロンドントワイライト', rgb: { r: 37, g: 35, b: 41 } },
  { name: 'ボトルグリーン', rgb: { r: 17, g: 63, b: 42 } },
  { name: 'オリーブドラブ', rgb: { r: 95, g: 105, b: 89 } },
  { name: 'オリーブグリーン', rgb: { r: 97, g: 109, b: 60 } },
  { name: 'モスグリーン', rgb: { r: 134, g: 132, b: 85 } },
  { name: 'スプラウト', rgb: { r: 103, g: 170, b: 124 } },
  { name: 'シャルトルーズグリーン', rgb: { r: 135, g: 175, b: 63 } },
  { name: 'クロムイエロー', rgb: { r: 243, g: 179, b: 41 } },
  { name: 'マスタード', rgb: { r: 204, g: 133, b: 49 } },
  { name: 'ゴールデンオレンジ', rgb: { r: 237, g: 150, b: 54 } },
  { name: 'アプリコットオレンジ', rgb: { r: 231, g: 124, b: 86 } },
  { name: 'タイガーリリー', rgb: { r: 221, g: 101, b: 42 } },
  { name: 'スパニッシュオレンジ', rgb: { r: 231, g: 122, b: 57 } },
  { name: 'アラゴンオレンジ', rgb: { r: 197, g: 101, b: 47 } },
  { name: 'アーモンドシェル', rgb: { r: 174, g: 106, b: 46 } },
  { name: 'チョコレートブラウン', rgb: { r: 98, g: 74, b: 55 } },
  { name: 'ダークブラウン', rgb: { r: 74, g: 59, b: 43 } },
  { name: 'ブラウンオリーブ', rgb: { r: 116, g: 105, b: 80 } },
  { name: 'クロワッサン', rgb: { r: 177, g: 137, b: 87 } },
  { name: 'サンドベージュ', rgb: { r: 199, g: 177, b: 135 } },
  { name: 'コルク', rgb: { r: 202, g: 177, b: 124 } },
  { name: 'モスグレイ', rgb: { r: 184, g: 177, b: 147 } },
  { name: 'オイスターホワイト', rgb: { r: 255, g: 237, b: 202 } },
];

export const WINTER_COLORS: NamedColor[] = [
  { name: 'パウダーピンク', rgb: { r: 235, g: 215, b: 225 } },
  { name: 'ボンボールピンク', rgb: { r: 227, g: 96, b: 140 } },
  { name: 'オペラモーヴ', rgb: { r: 224, g: 130, b: 171 } },
  { name: 'アザレアピンク', rgb: { r: 221, g: 58, b: 116 } },
  { name: 'マゼンタ', rgb: { r: 219, g: 57, b: 135 } },
  { name: 'ラズベリーレッド', rgb: { r: 150, g: 31, b: 97 } },
  { name: 'トゥルーレッド', rgb: { r: 180, g: 33, b: 55 } },
  { name: 'カーニバルレッド', rgb: { r: 180, g: 35, b: 62 } },
  { name: 'ローズレッド', rgb: { r: 183, g: 36, b: 74 } },
  { name: 'バーガンディ', rgb: { r: 125, g: 41, b: 63 } },
  { name: 'オーベルジーヌ', rgb: { r: 65, g: 33, b: 98 } },
  { name: 'ロイヤルパープル', rgb: { r: 68, g: 44, b: 121 } },
  { name: 'パウダーパープル', rgb: { r: 207, g: 204, b: 221 } },
  { name: 'ノクターン', rgb: { r: 8, g: 0, b: 32 } },
  { name: 'ロイヤルブルー', rgb: { r: 26, g: 77, b: 144 } },
  { name: 'ウルトラマリン', rgb: { r: 33, g: 79, b: 133 } },
  { name: 'コバルトブルー', rgb: { r: 0, g: 116, b: 176 } },
  { name: 'ターコイズブルー', rgb: { r: 0, g: 168, b: 211 } },
  { name: 'アクアブルー', rgb: { r: 172, g: 220, b: 236 } },
  { name: 'アクアティント', rgb: { r: 226, g: 243, b: 248 } },
  { name: 'パイングリーン', rgb: { r: 21, g: 82, b: 71 } },
  { name: 'フォレストグリーン', rgb: { r: 0, g: 97, b: 66 } },
  { name: 'レモンイエロー', rgb: { r: 254, g: 238, b: 16 } },
  { name: 'ライトニングイエロー', rgb: { r: 245, g: 236, b: 88 } },
  { name: 'レモンティント', rgb: { r: 249, g: 248, b: 213 } },
  { name: 'クリスタルベージュ', rgb: { r: 247, g: 238, b: 221 } },
  { name: 'ダークバーガンディ', rgb: { r: 42, g: 1, b: 16 } },
  { name: 'チャコールグレイ', rgb: { r: 39, g: 46, b: 50 } },
  { name: 'ブラック', rgb: { r: 11, g: 10, b: 8 } },
  { name: 'ミディアムグレイ', rgb: { r: 158, g: 159, b: 158 } },
  { name: 'シルバーグレイ', rgb: { r: 203, g: 204, b: 203 } },
  { name: 'スノーホワイト', rgb: { r: 255, g: 255, b: 255 } },
];

export const ALL_SEASON_COLORS: Record<Season, NamedColor[]> = {
  SPRING: SPRING_COLORS,
  SUMMER: SUMMER_COLORS,
  AUTUMN: AUTUMN_COLORS,
  WINTER: WINTER_COLORS,
};

function colorDistance(color1: RgbColor, color2: RgbColor): number {
  const dr = color1.r - color2.r;
  const dg = color1.g - color2.g;
  const db = color1.b - color2.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

export function findClosestPersonalColor(
  targetColor: RgbColor
): { season: Season; color: NamedColor; distance: number } | null {
  let closestMatch: { season: Season; color: NamedColor; distance: number } | null = null;
  let minDistance = Infinity;

  for (const season of Object.keys(ALL_SEASON_COLORS) as Season[]) {
    for (const namedColor of ALL_SEASON_COLORS[season]) {
      const distance = colorDistance(targetColor, namedColor.rgb);
      if (distance < minDistance) {
        minDistance = distance;
        closestMatch = { season, color: namedColor, distance };
      }
    }
  }
  return closestMatch;
}

export function rgbToHex(color: RgbColor): string {
  const { r, g, b } = color;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
