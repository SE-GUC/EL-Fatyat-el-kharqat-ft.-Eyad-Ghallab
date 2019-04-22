import React, { Component } from "react";


class logout extends Component {
  

 


  type() {
    //const token = localStorage.getItem("token");

    localStorage.removeItem("token");

    
  }

  render() {
   return(
    <input
    class="button"
    type="submit"
    name=""
    value="Sign Out"
    onClick={() => {
      this.type();
    }}
  />
   )
  }
}
export default logout;
