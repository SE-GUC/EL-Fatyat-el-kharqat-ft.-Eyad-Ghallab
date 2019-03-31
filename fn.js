const axios = require('axios');
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
       
	GetEntity: async () => {

        const Entity = await axios.get('http://localhost:5353/api/ExternalEntities')
        return Entity
        },
        
        PostEntity: async () => {
                const schema ={  
                        name:"Mary",
                        username:"ammar_ah",
                        password:"ahumkcnsjkabjhbssnaknsdk"
                };
                const Entity= await axios.post('http://localhost:5353/api/ExternalEntities/' , schema)
                return Entity
                },

                PutEntity: async () => {
                        const schema ={  
                                name: "ghallab",
                                username: "mariam-amer",
                                password: "2324355"
        
                        };
                        const Entity = await axios.put('http://localhost:5353/api/ExternalEntities/5c9ffc9f364a8b2010aef4cc' , schema)
                        return Entity
                        },

                        DeleteEntity: async () => {
                        
                                const Entity = await axios.delete('http://localhost:5353/api/ExternalEntities/5c9ffc9f364a8b2010aef4cc')
                                return Entity
                                },
};
module.exports = functions;