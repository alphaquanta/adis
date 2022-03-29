import { configureStore } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { userDataSlice } from './User/UserStorage';


const store = configureStore({
    reducer:{
        userData:userDataSlice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>;

export const selectUserData = (state:RootState) => state.userData

export default store