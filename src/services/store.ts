import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import productsReducer from 'features/productsReducer';
import todo from '../features/todo';

export const store = configureStore({
  reducer: {
    todo,
    products: productsReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
