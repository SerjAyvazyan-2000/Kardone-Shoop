
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    partsCount:0
}

const AutoPartsCount = createSlice({
    name:"basketList",
    initialState,
    reducers:{
        countPlus:(state,action) => {
            state.partsCount =  state.partsCount + action.payload

        },
        countMinus:(state,action) => {
            state.partsCount = state.partsCount - action.payload

        },


    }
})

export const {countPlus,countMinus} = AutoPartsCount.actions
export  default AutoPartsCount.reducer