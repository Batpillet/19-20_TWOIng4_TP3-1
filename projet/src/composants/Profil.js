import React, { Component } from 'react';

class Profil extends Component {
    
    constructor(props){
        super(props); 

        this.state={
            black: true
        }
    }

    changeColor(){
        this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "black" : "white";
      return (
      <div className="card card-body mb-3 mt-3" style={{background: "#3b5998"}}>
          <ul className="list-group">
              <h3 align="center" className="card-title" style={{color: "white"}}>Profil</h3>
              <div className="row justify-content-center">
                
                <img src={this.props.infos.photo} className="card-img-top" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px' }} />
              </div>
              <li className="list-group-item" style={{background: "#87CEFA"}}><b>Prenom : </b>{this.props.infos.prenom}</li>
              <li className="list-group-item" style={{background: "#87CEFA"}}><b>Nom : </b>{this.props.infos.nom}</li>
              <li className="list-group-item" style={{background: "#87CEFA"}}><b>Date de naissance : </b>{this.props.infos.date}</li> 
              <a className={btn_class} className="list-group-item" style={{background: "#87CEFA"}}><button className="btn btn-success"> Changer le style </button></a>             
          </ul>
      </div>   
      )
    }
  }

export default Profil; 