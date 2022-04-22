import { configureStore } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { deckSlice } from './Card/CardStorage';
import { chipBucketSlice } from './TTSChip/ChipStorage';
import { userDataSlice } from './User/UserStorage';


const store = configureStore({
    reducer:{
        userData:userDataSlice.reducer,
        deckData:deckSlice.reducer,
        chipBucket:chipBucketSlice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>;

export const selectUserData = (state:RootState) => state.userData
export const CardDeck = (state:RootState) => state.deckData
export const chipBucket = (state:RootState) => state.chipBucket.chips;
export default store