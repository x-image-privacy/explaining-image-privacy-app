import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion } from '@chakra-ui/react';

import CategoryItem from './CategoryItem';

const CategoryExplanations: FC = () => {
  const { t } = useTranslation();

  return (
    <Accordion allowToggle>
      <CategoryItem
        title={t('IDENTITY_CATEGORY')}
        content={t('IDENTITY_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('SEXUAL_ORIENTATION_CATEGORY')}
        content={t('SEXUAL_ORIENTATION_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('POLITICAL_OPINIONS_CATEGORY')}
        content={t('POLITICAL_OPINIONS_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('WEALTH_CATEGORY')}
        content={t('WEALTH_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('SOCIAL_STATUS_AND_ACTIVITIES_CATEGORY')}
        content={t('SOCIAL_STATUS_AND_ACTIVITIES_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('RELIGIONS_CATEGORY')}
        content={t('RELIGIONS_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('ETHNICITY_CATEGORY')}
        content={t('ETHNICITY_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('HEALTH_CATEGORY')}
        content={t('HEALTH_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('JOB_CATEGORY')}
        content={t('JOB_CATEGORY_CONTENT')}
      />
      <CategoryItem
        title={t('EMOTIONS_CATEGORY')}
        content={t('EMOTIONS_CATEGORY_CONTENT')}
      />
    </Accordion>
  );
};
export default CategoryExplanations;
