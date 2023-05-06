import {useMemo} from "react";


const useSortProducts = (sort,productList) => {

    const sortedProductList = useMemo(() => {

        if (sort) {
            return [...productList].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return productList;
    }, [sort, productList])

    return sortedProductList
}


export const useProducts = (productList,sort,query) =>{
    const sortedProduct = useSortProducts(sort,productList)

    const sortedAndSearchedProductList = useMemo(() => {
        return sortedProduct.filter(product => product.name.toLowerCase().includes(query))
    }, [query, sortedProduct])

    return sortedAndSearchedProductList
}