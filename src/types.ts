// My responsible circle packing data type
export type KeyWord = { name: string; color?: string; value: number };
export type Category = { name: string; color?: string; children: KeyWord[] };
export type BubbleCategory = {
  name: string;
  color?: string;
  children: Category[];
};

// Histogram category item data type
export type word = { name: string; uv: number };
export type HistorgamCategory = word[];

// My responsible chord data type
export type ChordCategory = number[][];


export enum CategoryNames {
  Identity = 'identity',
  SexualOrientations = 'sexual_orientations',
  PoliticalOpinions = 'political_opinions',
  Wealth = 'wealth',
  SocialStatusAndActivities = 'social_status_and_activities',
  Religions = 'religions',
  Ethnicity = 'ethnicity',
  Health = 'health',
  Job = 'job',
  Emotions = 'emotions',
}
// raw catgory data
export type RawCategoryData = {
  [Property in `${CategoryNames}`]: string[];
};

export type ImageKeywords = { keyword: string; coef: number };

export type CategoryData = {
  [Property in `${CategoryNames}`]?: ImageKeywords[];
} & {
  [key: string]: ImageKeywords[];
};
