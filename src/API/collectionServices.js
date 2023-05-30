import axios from "axios";


export default class useCollectionServices {

    static  async getCollection (){
        try {
            const response = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection')
            return response.data
        }catch (e){
            alert("Error getNewCollection")
        }
    }
    static  async createCollection(newCollection){
              try {
                  const response = await axios.post('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection', newCollection)
                  return response.data
              }
              catch (e){
                  alert("Error createCollection")
              }
    }
    static  async updateCollection(id,body){
        try {
            const response = await axios.put(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection/${id}`, body)
            return response
        }
        catch (e){
            alert("Error updateCollection")
        }
    }
    static  async deleteCollection(id){
        try {
            const response = await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection/${id}`)
            return response
        }
        catch (e){
            alert("Error deleteCollection")
        }
    }
}
