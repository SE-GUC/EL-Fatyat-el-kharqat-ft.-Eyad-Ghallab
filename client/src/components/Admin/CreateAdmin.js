import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
var unirest = require('unirest');
//const {Translate} = require('@google-cloud/translate');
//const translate = new Translate();
//var bodyParser=require('body-parser');



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    flexBasis: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class CreateAdmin extends Component {

 constructor() {
    super();
    this.handlenameChange =  this.handlenameChange.bind(this);
    this.handleemailChange =  this.handleemailChange.bind(this);
    this.handleaddressChange =  this.handleaddressChange.bind(this);
    this.handleusernameChange=  this.handleusernameChange.bind(this) ;
    this.handlepasswordChange=  this.handlepasswordChange.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this);
    this.state ={
    name:"",
    address : "",
    email:"",	
    username:	"",	
    password : "",
    showPassword: false,
   }
 } 
 handlenameChange(e){
    this.setState({name: e.target.value })

  }
  handleaddressChange(e){
      this.setState({address: e.target.value })

    }
  
  handleemailChange(e){
    this.setState({email: e.target.value })

  }
 
  handleusernameChange(e){
    this.setState({username: e.target.value })

  }
  handlepasswordChange(e){
      this.setState({password: e.target.value })

    }
  
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

  handleSubmit(e){
    e.preventDefault();
    let databody = {
           
"name":this.state.name,	
"address":this.state.address,
"email":this.state.email,	
"username":	this.state.username,
"password":this.state.password,	
  
    }
    return fetch('/api/Admin', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 

  }
//   translate(e) {
//     console.log("hii")
//     var url =
//        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q="+  encodeURI(e)+'';
// //console.log(url[0][0][0])
//        const result= JSON.parse(fetch(url).getcontenttext()).
//         then(result[0][0][0]);
//         console.log(result[0][0][0])

         
        //.then(res => res.json(url.data))
       // .then(url => this.setState({ url:url.data}, () => console.log('Admins fetched',this.state.url)));
       //fetch(url
        
       // body: JSON.stringify(url),
        //headers: {
          //  'Content-Type': 'application/json'
        //},
   // })
    //var translatedText = result[0][0][0];
    //return result

      // //var sourceText = ''
      // if (e.parameter){
      //  var sourceText =e
      //  // e.parameter;
      // }
      
      // var sourceLang = 'en';
      // if (e.parameter.source){
      //   sourceLang = e
      //   //e.parameter.source;
      // }
    
      // var targetLang = 'ar';
      // if (e.target){
      //   targetLang = e.target;
      // }
      
      /* Option 1 */
      //var LanguageApp;
      
      //var translatedText = LanguageApp.translate(sourceText, sourceLang, targetLang)
      
      /* Option 2 */  
      
    //   var url =
    //    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=" + encodeURI(e);
    //   //var UrlFetchApp;          
      
    //   var result = JSON.parse(url.getContentText());
    
      
    //  var translatedText = result[0][0][0];
      
    //   // 
    //   return translatedText
    
 // }
 
//   get(e){
//   //const e 
//  const target= 'ar' 
//  //const model='nmt' 
//  const options = {
//     to: target,
//    // model: model,
//   };
//   let [translations] =  translate.translate(e, options);
// translations = Array.isArray(translations) ? translations : [translations];
// console.log('Translations:');
// translations.forEach((translation, i) => {
//   console.log(`${e[i]} => (${target}) ${translation}`);
// });

// }

  render() {
   
    
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Admin</h3>
           
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Name"
          value={this.state.name}
          
          onChange={this.handlenameChange}
          
          
        />
        </div> 
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Address"
          value={this.state.address}
          onChange={this.handleaddressChange}
          
        />
        </div> 
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Email"
          value={this.state.email}
          onChange={this.handleemailChange}
          
        />
        </div> 
        <div className="form-group">
                <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="User Name"
          value={this.state.username}
          onChange={this.handleusernameChange}
          
        />
        </div>
        <div className="form-group">
        <FormControl >
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handlepasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        <div className="form-group">
                    <input type="submit" 
                      value="Submit" 
                      className="btn btn-primary"/>
                    
                </div>
               
        </form>
       
        
        
        
          
        
       
       
       
        </div>
    )
  }
}
export default withStyles (styles)(CreateAdmin);