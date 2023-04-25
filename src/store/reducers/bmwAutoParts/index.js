
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    BmwProductList:[]
}

const BmwAutoParts = createSlice({
    name:"productList",
    initialState,
    reducers:{
        setProduct:(state,action) => {
            state.BmwProductList = action.payload
        },
        deleteProduct :(state,action)=>{
            state.BmwProductList.forEach((item,index)=>{
                 if(item._id === action.payload){
                    state.BmwProductList.splice(item._id,1)
                 }
            })
           // state.BmwProductList.filter(item => item._id !== action.payload)
        }

    }
})

export const {setProduct,deleteProduct} = BmwAutoParts.actions
export  default BmwAutoParts.reducer