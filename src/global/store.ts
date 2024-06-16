import axios from "axios";

const BASE_URL = "http://localhost:8000/";

export default {
  actions: {
    listSales(product: any, start_date: any, end_date: any){
      return new Promise((resolve, reject)=>{
          axios.get(BASE_URL + "sales",{
            params:{
              product,
              start_date,
              end_date
            }
          })
          .then((response)=> resolve(response.data))
          .catch((error)=> reject(error))
      })
    },
  }
}