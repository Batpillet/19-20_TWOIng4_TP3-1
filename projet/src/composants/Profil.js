import React, { Component } from 'react'; 


class Profil extends Component {
    
    constructor(props){
        super(props); 
    }

    handleChangeColor(){
        document.body.style= 'background: green;'; 
    }

    render(){
        
      return (
      <div className="card card-body mb-3">
          <ul className="list-group">
              <li className="list-group-item">Prenom : {this.props.infos.prenom}</li>
              <li className="list-group-item">Nom : {this.props.infos.nom}</li>
              <li className="list-group-item">Date de naissance : {this.props.infos.date}</li>                
          </ul>
      </div>   
      )
      
        /*<div className="Profil">
            {this.state.users.map(users => (
                <div align= "center">
                    <button onClick={this.handleClick}>{users.prenom}</button>
                </div>
            
        ))}*/
            
           // <button onClick={this.changeColor}>Change style</button>
       
      
    }
  }

export default Profil; 