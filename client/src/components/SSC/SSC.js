// import React, { Component } from 'react';






// //import './SPC.css'

// class lolywork extends Component {
//     constructor(){
//         super();
//     this.state={
//      // spcs:[],
//       SSC:[]
//     }
// }

// // getspc(){
// //   fetch('http://localhost:5000/api/SPC/all')
// //   .then(res => res.json())
// //   .then(SPCform => this.setState({spcs: SPCform.data}, () => console.log('SPC fetched',this.state.spcs)));
// // }

// getssc(){
//   fetch('http://localhost:5000/api/SSC/all')
//   .then(res => res.json())
//   .then(ssc => this.setState({SSC: ssc.data}, () => console.log('SSC fetched' ,this.state.SSC)));
// }




// render (){

// return(

// <div>
// {/* <h2> Forms </h2> */}
// {/* <button onClick={()=>{this.getspc()}}> SPC forms </button> 
// <ul>
// {this.state.spcs.map(spc =>
//   <li key = {spc._id}
//   > Facility_name: {spc.Facility_name}  
//    ,Governorate: {spc.Governorate}<br/> , City:{spc.City}<br/> , Facility_Address:{spc.Facility_Address}<br/> , Facility_Phone_Number:{spc.Facility_Phone_Number}<br/> , Fax:{spc.Fax}<br/> , Capital_Currency:{spc.Capital_Currency}<br/> ,capital:{spc.capital}<br/> ,investorname:{spc.investorname}<br/> ,Gender:{spc.Gender}<br/> ,Nationality:{spc.Nationality}<br/> ,
//   TypeOf_IdentityProof: {spc.TypeOf_IdentityProof}<br/> ,investor_nationalid:{spc.investor_nationalid}<br/> ,BirthDate:{spc.BirthDate}<br/> ,
//   Phone_Number:{spc.Phone_Number}<br/> ,Investor_Fax:{spc.Investor_Fax}<br/> ,email:{spc.email}<br/> ,Investor_Address:{spc.Investor_Address}<br/> ,
//   Form_Date:{spc.Form_Date}<br/> ,Locked:{spc.Locked}<br/> ,Lawyer_review:{spc.Lawyer_review}<br/> ,is_the_external_entities_notified:{spc.is_the_external_entities_notified}<br/>,  
//   Status:{spc.Status} 
//   </li>
  
//       )}
//   </ul>  */}
  
//   <button onClick={()=>{this.getssc()}}> SSC forms </button> 
//   <ul>
//     {this.state.SSC.map(ssc =>
//       <li key = {ssc._id}
//       >Company_name: {ssc.Company_name} 
//        ,investor name:{ssc.investorname} ,Governorate: {ssc.Governorate}<br/> , City:{ssc.City}<br/> , Company_Address:{ssc.Company_Address}<br/> , Company_Phone_Number:{ssc.Company_Phone_Number}<br/> , Fax:{ssc.Fax}<br/> , Capital_Currency:{ssc.Capital_Currency}<br/> ,capital:{ssc.capital}<br/> ,investorname:{ssc.investorname}<br/> ,Gender:{ssc.Gender}<br/> ,Nationality:{ssc.Nationality}<br/> ,
//       TypeOf_IdentityProof: {ssc.TypeOf_IdentityProof}<br/> ,investor_nationalid:{ssc.investor_nationalid}<br/> ,BirthDate:{ssc.BirthDate}<br/> ,
//       Phone_Number:{ssc.Phone_Number}<br/> ,Investor_Fax:{ssc.Investor_Fax}<br/> ,email:{ssc.email}<br/>,
//       Status:{ssc.Status} 
//       </li>
//           )}
         

//       </ul> 
// </div>
// )
// }
// }


















import React, {Component} from 'react';

import './SSC.css'
class SSC extends Component{
  constructor(){
    super();
this.state={
  sscs:[],
  payment:""

}

  }
  componentDidMount(){
    fetch('/api/SSC/all')
   .then(res => res.json())
    .then(SSC => this.setState({sscs: SSC.data}, () => console.log('SSC fetched', this.state.sscs)));
  }
 
  payment(id){
     
    if(this.state.payment !== ""){
         
        this.setState({payment: "" })}
    fetch('/api/SSC/'+ id+ '/find')
    .then(res => res.json())
    .then(pay => this.setState({paymenet: pay.data},()=> console.log('you should pay',this.state.paymenet)));

 }


 

 handleShowStatus = (index) => {
  this.setState(prevState => {
    const newState = {
      ...prevState,
    }
    newState.sscs[index] = {
      ...prevState.sscs[index],
      showStatus: true,
    };
    return newState;
    }
    
  )};
  
   getssc(){
    fetch('http://localhost:5000/api/SSC/:id')
    .then(res => res.json())
    .then(ssc => this.setState({sscs: ssc.data}, () => console.log(this.state.sscs)));
  }
 
  handleShowInfo = (index) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
      }
      newState.sscs[index] = {
        ...prevState.sscs[index],
        showStatus: true,
      };
      return newState;
      }
      
    )};
  

    
  render(){
    return (
      <div>
        <h2>All SSC Forms</h2>
        <ul>
          {this.state.sscs.map((SSC, index)=>
          <div>
            <li key = {SSC._id}
             > {SSC.Company_name}  
             <button onClick= {() => {this.payment(SSC._id)}}> pay  </button>  
            </li>
            <li key = {SSC.key}>
                
            <button onClick={() => this.handleShowStatus(index)}>SHOW status</button>
          </li>
          <li key = {SSC.key}>
          {SSC.showStatus && SSC.Status}
          </li>
           
{/*         
          <button onClick={()=>this.getssc()}>SHOW </button> 
         
    {this.state.SSC.map(SSC ,index=>
      <li key = {SSC._id}
      >Company_name: {SSC.Company_name} 
       ,investor name:{SSC.investorname} ,Governorate: {SSC.Governorate}<br/> , City:{SSC.City}<br/> 
       , Company_Address:{SSC.Company_Address}<br/> , Company_Phone_Number:{SSC.Company_Phone_Number}<br/> 
       , Fax:{SSC.Fax}<br/> , Capital_Currency:{SSC.Capital_Currency}<br/> ,capital:{SSC.capital}<br/> 
       ,investorname:{SSC.investorname}<br/> ,Gender:{SSC.Gender}<br/> ,Nationality:{SSC.Nationality}<br/> ,
      TypeOf_IdentityProof: {SSC.TypeOf_IdentityProof}<br/> ,investor_nationalid:{SSC.investor_nationalid}<br/>
       ,BirthDate:{SSC.BirthDate}<br/> ,
      Phone_Number:{SSC.Phone_Number}<br/> ,Investor_Fax:{SSC.Investor_Fax}<br/> ,email:{SSC.email}<br/>,
      Status:{SSC.Status} 
      </li>
          )} */}
        
      
          
          </div>
            
            )}
      </ul> 
<h1>You Should pay: {this.state.payment}</h1>
      </div>
    )
  }
}
export default SSC;


