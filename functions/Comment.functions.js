const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
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

}
}

module.exports = functions;
