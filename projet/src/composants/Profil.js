import React, { Component } from 'react';


class Profil extends Component {
    
    constructor(props){
        super(props); 
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
    }
  }

export default Profil; 