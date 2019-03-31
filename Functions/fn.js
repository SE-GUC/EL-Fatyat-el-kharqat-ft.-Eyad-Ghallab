const axios = require('axios');
axios.defaults.adapter = require("axios/lib/adapters/http");

const functions = {
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

  

}; 
module.exports = functions;
