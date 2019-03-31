
const axios = require("axios");
//naxios.defaults.adapter= require("axios/lib/adapters/https");
const lawyer_funcs={
    getLawyers: async () =>{
        const lawyers = await axios.get("http://localhost:3000/api/Lawyer/");
        
        return lawyers;
    },
    createLawyer: async() => {
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
    
};
module.exports= lawyer_funcs;