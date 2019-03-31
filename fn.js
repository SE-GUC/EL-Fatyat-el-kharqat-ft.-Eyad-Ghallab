
const axios = require('axios');
const Contractfunctions = {

    getContractsbyid: async(id) => {
        const contracts = await axios.get('http://localhost:3000/api/Contract/'+id)
        return contracts;
        },

	getContracts: async () => {
        const contracts = await axios.get('http://localhost:3000/api/Contract/')
        return contracts;
        },


    createContract: async requestBody => {
        const contract = await axios.post("http://localhost:3000/api/Contract/",requestBody);
        return contract;
        },

    updateContract: async (id,requestBody) => {
                    const contract = await axios.put(`http://localhost:3000/api/Contract/${id}`,requestBody)
             return contract
                    },

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

  getNotification: async () => {
    const schema = {
      name: "adasd"
    }; // to add schema if post or put
    const Notification = await axios.get(
      "http://localhost:3000/api/Notification/" 
    );
    return Notification;
  },

  getNotificationByID: async id => {
    const schema = {
      name: "adasd",
      User_id: 1
    }; 
    const Notification = await axios.get(
      "http://localhost:3000/api/Notification/" + schema.User_id
    );
    return Notification;
  },


  CreateNotification: async () => {
    const schema = {
        "investor_Email": "test@gmail.com",
        "MSG": "Update the form please",
        "reviewer_Name":"sarah",
        "notify_number":"2",
        "User_id":"1"     
                  
    };
    const Notification = await axios.post(
      "http://localhost:3000/api/Notification/",
      schema
    );
    return Notification;
  },
  UpdateNotifications: async ()=>{
    const schema={
        Name:"SABA7O"
    };
    const Notification = await axios.put(
      "http://localhost:3000/api/notifications/",
      schema
    );
    return Notification;
},
DeleteNotification: async ()=>{
    const Notification = await axios.delete(
      "http://localhost:3000/api/notifications/"
    );
    return Notification;
}

      
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

  getReviewer: async () => {
        const Reviewer = await axios.get('http://localhost:3000/api/Reviewer/');
        return Reviewer;
        },

    createReviewer: async requestBody => {
        const Reviewer = await axios.post('http://localhost:3000/api/Reviewer/',requestBody);
            return Reviewer;
            },

     
    UpdateReviewer: async ()=>{
        const schema={
            Name:"SABA7O"
        };
        const Reviewer = await axios.put(
          "http://localhost:3000/api/Reviewer/5c95fb2833d0a715c880fae8",
          schema
        );
        return Reviewer;
    },
    DeleteReviewer: async ()=>{
        const Reviewer = await axios.delete(
          "http://localhost:3000/api/Reviewer/5c95fb2833d0a715c880fae8"
        );
        return Reviewer;
    }

  getComments: async () => {
    const schema = {
      name: "adasd"
    }; // to add schema if post or put
    const comment = await axios.get(
      "http://localhost:3000/api/Comment/5c9e38939113afcd6f20ec5e" //get the comment
    );
    return comment;
  },

  CreateComments: async () => {
    const schema = {
      name: "Ghallab",
      comment: "newnew"
    };
    const comment = await axios.post(
      "http://localhost:3000/api/Comment/",
      schema
    );
    return comment;
  },
  UpdateComments: async () => {
    const schema = {
      name: "omar"
    };
    const comment = await axios.put(
      "http://localhost:3000/api/Comment/5c9e32e48155cecd3ff121a9",
      schema
    );
    return comment;
  },
  DeleteComments: async () => {
    const comment = await axios.delete(
      "http://localhost:3000/api/Comment/5c9e32e48155cecd3ff121a9"
    );
    return comment;

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

},


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
module.exports = functions;




