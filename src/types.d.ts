export type Wheater = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  wheater: Wheater;
  visibility: Visibility;
  comment: string;
}
