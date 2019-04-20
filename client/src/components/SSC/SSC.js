
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

    
  render(){
    return (
      <div>
        <h2>All SSC Forms</h2>
        <ul>
          {this.state.sscs.map((SSC, index)=>
          <div>
            <li key = {SSC._id}
             > {SSC.Company_name}  
             <button onClick= {() => {this.payment(SSC._id)}}> pay   </button>  
            </li>
            <li key = {SSC.key}>
                
            <button onClick={() => this.handleShowStatus(index)}>SHOW status</button>
          </li>
          <li key = {SSC.key}>
          {SSC.showStatus && SSC.Status}
          </li>
          </div>
            
            )}
      </ul> 
<h1>You Should pay: {this.state.payment}</h1>
      </div>
    )
  }
}
export default SSC;


