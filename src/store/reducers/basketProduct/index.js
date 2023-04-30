
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    basketList:[]
}

const BasketProduct = createSlice({
    name:"basketList",
    initialState,
    reducers:{
        setProduct:(state,action) => {
            state.basketList = [...state.basketList,action.payload]
            // state.basketList.push(action.payload)
        },
        // deleteProduct :(state,action)=>{
        //     state.autoPartsList.forEach((item,index)=>{
        //          if(item._id === action.payload){
        //             state.autoPartsList.splice(item._id,1)
        //          }
        //     })
        //    state.BmwProductList.filter(item => item._id !== action.payload)
        // }
        localProduct:(state,action)=>{
            const localWentList =  JSON.parse(localStorage.getItem('wentBasket'))
            if( localWentList){
                state.basketList = [...state.basketList,localWentList]

            }
        }

    }
})

export const {setProduct,localProduct,deleteProduct} = BasketProduct.actions
export  default BasketProduct.reducer