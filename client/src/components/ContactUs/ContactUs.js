import React, {  Component} from "react";
import './ContactUs.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            
              <div className="container">
                
         
      <h1>Contact us On:</h1>
      <label>Adress:
        No. 3, Salah Salem st., Nasr City, Cairo, 11562, Egypt.
      </label><br/>
      <label>telephone number:
      +202 240 55 452
      </label><br/>
      <label>FAX:
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

            <br/>
            <form action="https://www.GAFI.com/">
            <Button variant="contained" href="#contained-buttons" >
        GAFI
      </Button>
            </form>
      
                
      
              </div>
            
      
          );
                  
        }
        
      }



export default  withStyles(styles)(ContactUs);