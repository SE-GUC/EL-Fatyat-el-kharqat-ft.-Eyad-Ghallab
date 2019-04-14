import React, {  Component} from "react";
import './ContactUs.css';



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
               <button type="submit">Facebook<img src="" /></button>
            </form>
            <br/>
            <form action="https://www.Instagram.com/">
               <button type="submit">Instagram<img src="" /></button>
            </form>
            <br/>
            <form action="https://www.Twitter.com/">
               <button type="submit">Twitter<img src="" /></button>
            </form>
            <br/>
            <form action="https://www.GAFI.com/">
               <button type="submit">GAFI<img src="" /></button>
            </form>
      
                
      
              </div>
            
      
          );
                  
        }
        
      }



export default ContactUs;