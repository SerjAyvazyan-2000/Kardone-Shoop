import axios from "axios";

export default class useAutoPartsServices {

    static async createAutoParts(newAutoParts) {
        try {
            const response = await axios.post('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts', newAutoParts)
            return response.data
        }
        catch (error){
            alert(" error createAutoParts")
        }

    }
    static async getAutoParts() {
        try {
            const response = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts')
            return response.data

        }catch (error){
            alert(" error getAutoParts")

        }

    }

    static async getProductId(id) {
        try {
            const response = await axios.get(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts/${id}`)
            return response.data

        }catch (error){
            alert(" error getProductId")

        }

    }
    static async deleteAutoParts(id) {
        try {
            const response = await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts/${id}`)
            return response.data
        }catch (error){
            alert(" error deleteAutoParts")
        }

    }
    static async updateAutoParts(id,body) {
        try {
            const response = await axios.put(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts/${id}`, body)
            return response.data
        }catch (error){
            alert(" error updateAutoParts")
        }
    }
}

