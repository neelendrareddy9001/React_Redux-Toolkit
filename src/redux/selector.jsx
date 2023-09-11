import { createSelector } from '@reduxjs/toolkit';

export const selectTaskReducer = (store) => store.taskReducers;

export const selectTaskData = createSelector(selectTaskReducer, (data) => ({
  ...data,
}));
