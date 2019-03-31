
const axios = require("axios");
//naxios.defaults.adapter= require("axios/lib/adapters/https");
const lawyer_funcs={
    getLawyers: async () =>{
        const lawyers = await axios.get("http://localhost:3000/api/Lawyer/");
        
        return lawyers;
    },
    CReateLawyer: async() => {
        const schema = {
        "fullname": "Hania gamel",
        "email": "Hania@yahoo.com",
        "phonenumber": "01111111111",
        "legaltype": "Legal",
        "birthdate": "1966-12-31T22:00:00.000Z",
        "noOfPreviousCases": 50,
        "gender": "female",
        "username": "Hania1998",
        "password": "Hania1998"
        }
        const lawyer= await axios.post("http://localhost:3000/api/Lawyer/", schema );
        return lawyer;
    },
    createLawyer: async requestBody => {
        const lawyer = await axios.post('http://localhost:3000/api/Lawyer/createlawyer', requestBody)
        return lawyer
        },
        getLawyer: async () => {
            const lawyer = await axios.get('http://localhost:3000/api/Lawyer/')
            return lawyer
            },
        updateLawyer: async (id) => {
            const lawyer = await axios.put('http://localhost:3000/api/Lawyer/id'+id)
            return lawyer
            },
        deleteLawyer: async (id) => {
            const lawyer = await axios.delete('http://localhost:3000/api/Lawyer/'+id)
            return lawyer
            }, 
        getSSC: async () => {
            const ssc = await axios.get('http://localhost:3000/api/Lawyer/find/SSC')
            return ssc
             }, 
        getSPC: async () => {
            const spc = await axios.get('http://localhost:3000/api/Lawyer/find/SPC')
            return spc
             },  
             getlawyerbyid: async(id) => {
                const lawyer = await axios.get('http://localhost:3000/api/Lawyer/'+id)
                return lawyer;
                }, 
              
    
};
module.exports= lawyer_funcs;