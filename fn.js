const axios = require('axios');
const Invfunctions = {

    getInvestorbyid: async(id) => {
        const investors = await axios.get('http://localhost:3000/api/investors/'+id)
        return investors;
        },

	getInvestors: async () => {
        const investors = await axios.get('http://localhost:3000/api/investors/')
        return investors;
        },


    createInvestor: async requestBody => {
        const investor = await axios.post("http://localhost:3000/api/investors/",requestBody);
        return investor;
        },


        updateInvestor: async (id,requestBody) => {
            const investor = await axios.put(`http://localhost:3000/api/investors/${id}`,requestBody)
     return investor;
            },

    // updateInvestor: async (id) => {
    //             const investor = await axios.put('http://localhost:3000/api/investors/'+id)
    //             return investor;
    //             },

    // updateInvestor: async (id,requestBody) => {
    //                 return axios.put(`http://localhost:3000/api/investors/${id}`,requestBody+id)
    //                 },


    DeleteInvestor: async (id) => {
                    const investor = await axios.delete('http://localhost:3000/api/investors/'+id);
                    return investor;
                    },
    
        
};
module.exports = Invfunctions;

