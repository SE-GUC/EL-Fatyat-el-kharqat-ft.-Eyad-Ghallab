const axios= require('axios');
axios.defaults.adapter = require ("axios/lib/adapters/http");
const formFunctions={
    getForms: async() =>{
        const SSCforms=await axios.get("http://localhost:3000/api/SSC");
        return SSCforms;
    },
    getformByID: async id =>{
        const SSCforms= await axios.get("http://localhost:3000/api/SSC/byID/"+id);
        return SSCforms;
    },
    deleteForm:async id =>{
        const SSCforms=await axios.delete(
            "http://localhost:3000/api/SSC/"+id);
            return SSCforms;
    },
    createForm:async requestBody =>{
        const SSCforms= await axios.post("http://localhost:3000/api/SSC",requestBody );
        return SSCforms;

    },
    updateForm: async (id,requestBody) =>{
        const SSCforms= await axios.put("http://localhost:3000/api/SSC/${id}" ,requestBody );
        return SSCforms;
    }

};

module.exports = formFunctions;
