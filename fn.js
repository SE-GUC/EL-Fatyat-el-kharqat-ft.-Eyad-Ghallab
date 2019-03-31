const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions= {

     
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
}