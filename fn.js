const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http")

const functions= {
      
	getpayment: async () => {
    const payment = await axios.get('http://localhost:3000/api/payment/')
    return payment
    },
    createpayment: async requestBody => {
            const payment = await axios.post('http://localhost:3000/api/payment/',requestBody);
                return payment;
                },
    

       
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
module.exports = functions;