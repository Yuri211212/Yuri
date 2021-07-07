import React from 'react';
import { useSelector } from 'react-redux';

import { getCategory } from '../store/category/selectors';

import { ProgressBarMain } from '../components/ProgressBarMain';

export const ProgressBarContainer = () => {
    const { category } = useSelector((state) => getCategory(state));
    const filterCategory = category.filter((item) => item.checked);
    const completedCategory = (100 * filterCategory.length) / category.length;
    
    return <ProgressBarMain completedCategory={completedCategory} />
};
