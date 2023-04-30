
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    autoPartsList:[]
}

const CreateAutoParts = createSlice({
    name:"productList",
    initialState,
    reducers:{
        setProduct:(state,action) => {
            state.autoPartsList = action.payload
        },
        deleteProduct :(state,action)=>{
            state.autoPartsList.forEach((item,index)=>{
                 if(item._id === action.payload){
                    state.autoPartsList.splice(item._id,1)
                 }
            })
           // state.BmwProductList.filter(item => item._id !== action.payload)
        }

    }
})

export const {setProduct,deleteProduct} = CreateAutoParts.actions
export  default CreateAutoParts.reducer