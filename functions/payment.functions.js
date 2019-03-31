const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions= {

       
    UpdatePayment: async ()=>{
        const schema={
            Name:"SABA7O"
        };
        const payment = await axios.put(
          "http://localhost:3000/api/payment/5c9fccab48b9a15f5c33f0ac",
          schema
        );
        return payment;
    },
    Deletepayment: async ()=>{
        const payment = await axios.delete(
          "http://localhost:3000/api/payment/5c9fccab48b9a15f5c33f0ac"
        );
        return payment;
    }
}