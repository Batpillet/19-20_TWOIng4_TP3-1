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
              <h3 align="center">Profil</h3>
              <img src={this.props.infos.photo} align="center"/>
              <li className="list-group-item"><b>Prenom : </b>{this.props.infos.prenom}</li>
              <li className="list-group-item"><b>Nom : </b>{this.props.infos.nom}</li>
              <li className="list-group-item"><b>Date de naissance : </b>{this.props.infos.date}</li>                
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