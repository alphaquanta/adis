import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChipBucket, TTSChip } from "./ChipTypes";
import uuid from 'react-native-uuid';

const initialChipBucket: ChipBucket = {
    chips : []
} 

export const chipBucketSlice = createSlice({
    name: 'chipBucket',
    initialState: initialChipBucket,
    reducers:
    {
        addChip:(chipBucket,action:PayloadAction<string>)=>
        {
            chipBucket?.chips.push({chipWord:action.payload,chipID:uuid.v4().toString()})
            return chipBucket
        },
        removeChip:(chipBucket,action:PayloadAction<string>)=>
        {
            chipBucket.chips = chipBucket?.chips.filter(item => 
                {
                    return (item.chipID != action.payload) 
                })
            return chipBucket;
        },
        clearChips:(chipBucket,action:PayloadAction<undefined>) =>
        {
            chipBucket.chips = [];
            return chipBucket;
        }
    }
})

export const {addChip,removeChip,clearChips} = chipBucketSlice.actions
