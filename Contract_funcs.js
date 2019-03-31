const axios = require('axios');
const Contractfunctions = {

     
	getContracts: async () => {
        const contracts = await axios.get('http://localhost:3000/api/Contract/')
        return contracts;
        },


    createContract: async requestBody => {
        const contract = await axios.post("http://localhost:3000/api/Contract/",requestBody);
        return contract;
        },

    // updateContract: async (id,requestBody) => {
    //                 return axios.put(`http://localhost:3000/api/Contract/${id}`,requestBody+id)
    //                 },

    // updateContract: async () => {
    //     const schema = {
    //         First_party_name: "dalia"
    //     };
    //         const contract = await axios.put("http://localhost:3000/api/Contract/5c9f942a7eb72fe1a8df1467",schema);
    //     return contract;

    //     },

    


    DeleteContract: async (id) => {
                    const contract = await axios.delete('http://localhost:3000/api/Contract/'+id);
                    return contract;
                    },
    
        
};
module.exports = Contractfunctions;

