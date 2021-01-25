const filtersReducerDefaultState = {
    title: ''
};

export const filterByTitle = (title = '') => ({
    type: 'FILTER_TITLE',
    title
});

export const clearFilter = () => ({
    type: 'CLEAR_FILTER',
    defaultFilter: filtersReducerDefaultState
});