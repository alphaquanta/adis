import { configureStore } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { applicationSlice } from './Application/ApplicationStorage';
import { deckSlice } from './Card/CardStorage';
import { chipBucketSlice } from './TTSChip/ChipStorage';
import { userDataSlice } from './User/UserStorage';


const store = configureStore({
    reducer:{
        userData:userDataSlice.reducer,
        deckData:deckSlice.reducer,
        chipBucket:chipBucketSlice.reducer,
        applicationData:applicationSlice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>;

export const UserData = (state:RootState) => state.userData
export const CardDeck = (state:RootState) => state.deckData
export const ChipBucketData = (state:RootState) => state.chipBucket.chips;
export const ApplicationData = (state:RootState) => state.applicationData;
export default store