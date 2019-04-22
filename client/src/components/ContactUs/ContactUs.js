import React, {  Component} from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ContactUs.css'
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class ContactUs extends Component {
        render() {
          return (
           <body>
<div className="box">
                
         
      <h1>Contact us on:</h1>
      <label>Address:
        No. 3, Salah Salem st., Nasr City, Cairo, 11562, Egypt.
      </label><br/>
      <label>Telephone Number:
      +202 240 55 452
      </label><br/>
      <label>Fax:
       16035</label>
       <br/>
       <form action="https://www.Facebook.com/">
       <Button variant="contained" href="#contained-buttons" >
       Facebook
      </Button>
            </form> 

            <br/>
            <form action="https://www.Instagram.com/">
            <Button variant="contained" href="#contained-buttons" >
        Instagram
      </Button>
            </form>

            <br/>
            <form action="https://www.Twitter.com/">
            <Button variant="contained" href="#contained-buttons" >
        Twitter
      </Button>
            </form>
      
                
      
              </div>
            
              </body>
          );
                  
        }
        
      }



export default  withStyles(styles)(ContactUs);