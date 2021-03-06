import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mountainsReducer from './getAllMountains.store';
import oneMountainReducer from './getOneMountain.store';
import randomUserPicsReducer from './getRandomUserPics.store';
import loginReducer from './login.store';
import exploreMountainsReducer from './explore.store';
import unclimbedMountainsReducer from './getUnclimbedMountains.store';
import unclimbedCreateStatusReducer from './postClimbed.store';
import unclimbedUpdateStatusReducer from './putClimbed.store';
import wishlistCreateStatusReducer from './postWishlist.store';
import wishlistUpdateStatusReducer from './putWishlist.store';

const store = configureStore({
  reducer: {
    allMountains: mountainsReducer,
    oneMountain: oneMountainReducer,
    randomUserPics: randomUserPicsReducer,
    login: loginReducer,
    exploreRandomMountains: exploreMountainsReducer,
    unclimbedMountains: unclimbedMountainsReducer,
    unclimbedCreate: unclimbedCreateStatusReducer,
    unclimbedUpdate: unclimbedUpdateStatusReducer,
    wishlistCreate: wishlistCreateStatusReducer,
    wishlistUpdate: wishlistUpdateStatusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const allMountainSelector = (state: RootState) => state.allMountains;
export const oneMountainSelector = (state: RootState) => state.oneMountain;
export const randomUserPicsSelector = (state: RootState) => state.randomUserPics;
export const loginSelector = (state: RootState) => state.login;
export const unclimbedMountainsSelector = (state: RootState) => state.unclimbedMountains;
export const randomMountainSelector = (state: RootState) => state.exploreRandomMountains;
export const createClimbedSelector = (state: RootState) => state.unclimbedCreate;
export const updateClimbedSelector = (state: RootState) => state.unclimbedUpdate;
export const createWishSelector = (state: RootState) => state.wishlistCreate;
export const updateWishSelector = (state: RootState) => state.wishlistUpdate;

export default store;
