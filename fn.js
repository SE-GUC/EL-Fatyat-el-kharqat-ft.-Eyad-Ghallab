const axios = require("axios");
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




  getAdmins: async () => {
    const schema = {
      name: "adasd"
    }; // to add schema if post or put
    const comment = await axios.get(
      "http://localhost:3000/api/Admin/" //get the Admin
    );
    return comment;
  },
  CreateAdmins: async () => {
    const schema = {
      "id":"22",
      "name":"sarahhh"  ,
      "email":"ayhaga@hotmail.com",
      "address":"asdasda",
      "username":"sarashh",
      "password":"56789"
                  
    };
    const comment = await axios.post(
      "http://localhost:3000/api/Admin/",
      schema
    );
    return comment;
  },
  UpdateAdmins: async () => {
    const schema = {
      name: "sherif"
    };
    const comment = await axios.put(
      "http://localhost:3000/api/Admin/5c9e446641e8ded00065edf3",
      schema
    );
    return comment;
  },
  DeleteAdmins: async () => {
    const comment = await axios.delete(
      "http://localhost:3000/api/Admin/5c965fc07042f10c2ac2ebd7"
    );
    return comment;

}};


module.exports = functions
