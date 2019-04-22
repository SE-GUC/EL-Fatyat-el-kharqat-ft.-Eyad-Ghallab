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
       <label>Share On</label>
       <form action="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.gafi.gov.eg%2FEnglish%2FPages%2Fcontact-us.aspx&t=Contact%20Us/">
       <Button type =" submit" variant="contained" >
       Facebook
      </Button>
            </form> 

            
           
            <br/>
            <form action="https://twitter.com/intent/tweet?original_referer=http://www.gafi.gov.eg/English/Pages/contact-us.aspx&text=Contact%20Us&url=http://www.gafi.gov.eg/English/Pages/contact-us.aspx">
            <Button type =" submit" variant="contained"  >
        Twitter
      </Button>
            </form>
      
                
      
              </div>
            
              </body>
          );
                  
        }
        
      }



export default  withStyles(styles)(ContactUs);