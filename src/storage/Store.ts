import { configureStore } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { deckSlice } from './Card/CardStorage';
import { userDataSlice } from './User/UserStorage';


const store = configureStore({
    reducer:{
        userData:userDataSlice.reducer,
        deckData:deckSlice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>;

export const selectUserData = (state:RootState) => state.userData
export const CardDeck = (state:RootState) => state.deckData
export default store