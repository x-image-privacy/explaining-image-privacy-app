export type KeyWord = { name: string; color?: string; value: number };
export type Category = { name: string; color?: string; children: KeyWord };
export type BubbleCategory = {
  name: string;
  color?: string;
  children: Category;
};
