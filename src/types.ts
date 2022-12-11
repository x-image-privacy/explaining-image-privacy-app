// My responsible circle packing data type
export type KeyWord = { name: string; color?: string; value: number };
export type Category = { name: string; color?: string; children: KeyWord[] };
export type BubbleCategory = {
  name: string;
  color?: string;
  children: Category[];
};

export type ImageKeyword = { keyword: string; confidence: number };

// My responsible chord data type
export type ChordCategory = number[][];

export enum CategoryNames {
  Identity = 'identity',
  SexualOrientations = 'sexual_orientations',
  PoliticalOpinions = 'political_opinions',
  Wealth = 'wealth',
  SocialStatusAndActivities = 'social_status_and_activities',
  Religion = 'religion',
  Ethnicity = 'ethnicity',
  Health = 'health',
  Job = 'job',
  Emotions = 'emotions',
  NotApplicable = 'not_applicable',
}
// raw catgory data
export type RawCategoryData = {
  [Property in `${CategoryNames}`]: string[];
};

export type CategoryData = {
  [Property in `${CategoryNames}`]?: ImageKeyword[];
} & {
  [key: string]: ImageKeyword[];
};
