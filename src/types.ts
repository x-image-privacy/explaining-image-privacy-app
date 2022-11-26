// My responsible circle packing data type
export type KeyWord = { name: string; color?: string; value: number };
export type Category = { name: string; color?: string; children: KeyWord };
export type BubbleCategory = {
  name: string;
  color?: string;
  children: Category;
};

// Histogram category item data type
export type word = { name: string; uv: number };
export type HistorgamCategory = word[];

// My responsible chord data type
export type ChordCategory = number[][];
