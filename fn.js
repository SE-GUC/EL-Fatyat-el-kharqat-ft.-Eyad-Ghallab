const axios = require('axios');
const functions = {
    createForm: async requestBody => {
    
        const form = await axios.post('http://localhost:3000/api/SPC/create', requestBody); 
        return form
        },
    getSpcForms: async () => {
        const spcforms = await axios.get('http://localhost:3000/api/SPC/all')
        return spcforms
        },
    getFormbyid: async(id) => {
            const Forms = await axios.get('http://localhost:3000/api/SPC/'+id)
            return Forms;
            },
	getUserStory: async ()  => {
        const form = await axios.get('http://localhost:3000/api/SPC');
        return form
        },
    deleteForm: async (id)  => {
            const form = await axios.delete('http://localhost:3000/api/SPC/'+id);
            return form
            },
    
        
    updateForm: async (id, requestBody)  => {
        const form = await axios.put('http://localhost:3000/api/SPC/${id}', requestBody);
        return form
        },
};
module.exports = functions;
