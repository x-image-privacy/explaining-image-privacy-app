import { FC } from 'react';

import { Select } from '@chakra-ui/react';

import imageLabels from '../data/image_label.json';
import { CategoryData } from '../types';
import { fetchImageData, splitKeywordsInCategories } from '../utils/imageData';

type Props = {
  imageId: string;
  setImageId: (imageId: string) => void;
  setImageCategories: (categoryData: CategoryData) => void;
};

const ImageSelect: FC<Props> = ({
  imageId,
  setImageId,
  setImageCategories,
}) => (
  <Select
    onChange={({ target }) => {
      const newImageId = target.value;
      setImageId(newImageId);
      fetchImageData(newImageId, (imageKeywords) => {
        setImageCategories(splitKeywordsInCategories(imageKeywords));
      });
    }}
    value={imageId}
  >
    {Object.keys(imageLabels).map((k, i) => (
      <option key={k} value={k}>
        {`Image ${i + 1}`}
      </option>
    ))}
  </Select>
);
export default ImageSelect;
