import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     editAutoParts:null
}

const EditAutoParts = createSlice({
    initialState,
    name:"editAutoParts",
    reducers:{
        setEditParts:(state,action)=>{
             state.editAutoParts = action.payload
        }
    }

})

export const {setEditParts} = EditAutoParts.actions
export  default EditAutoParts.reducer