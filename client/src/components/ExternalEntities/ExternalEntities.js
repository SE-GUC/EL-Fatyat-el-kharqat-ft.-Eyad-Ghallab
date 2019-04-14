import React, {Component} from 'react';
class ExternalEntities extends Component{
  constructor(){
    super();
this.state={
  externalentities:[]
}
  }
  componentDidMount(){
    fetch('/api/ExternalEntities')
    .then(res => res.json())
    .then(ExternalEntity => this.setState({externalentities: ExternalEntity.data}, () => console.log('External Entities fetched',this.state.externalentities)));
  }
  render(){
    return (
      <div>
        <h2>All External Entities</h2>
        <ul>
          {this.state.externalentities.map(externalentity =>
            <li key = {externalentity._id}
            > {externalentity.name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}
export default ExternalEntities;