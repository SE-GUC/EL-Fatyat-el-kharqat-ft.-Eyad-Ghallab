const axios = require('axios')
updateinv: async id => {
    const inv = await axios.put(
    "http://localhost:3000/api/investors/" + id 
    );
    return inv

}