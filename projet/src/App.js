import React, { Component } from 'react';
import './App.css';
import Header from './composants/Header'
import Profil from './composants/Profil';
import ChangeProfile from './composants/ChangeProfile'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

    constructor(props){
      super(props); 
    

    this.state={
      profil: [
        {
          id: 0,
          nom: 'Dupond', 
          prenom: 'Josephine', 
          date: '12 Avril 1976',
          background: "#FFFFFF"
        },
        {
          id: 1, 
          nom: 'Dampierre', 
          prenom: 'Eric', 
          date: '23 septembre 1987',
          background: "#FFFFFF"
        },
        {
          id: 2,
          nom: 'Verlaine', 
          prenom: "Paul", 
          date: '30 mars 1844',
          background: "#FFFFFF"
        }
      ], 
      select: 0
    }; 
    this.handleSwitch= this.handleSwitch.bind(this); 
  }

  handleSwitch(index) 
	{
		this.setState({select: index});
	}

  render(){
    const currentProfil = this.state.profil[this.state.select]

    return (
      <div>
        <nav className="navbar navbar-extend-sm navbar-dark bg-dark mb-3 py-0 justify-content-end" id="navig">
        {this.state.profil.map((profil)=>
        <ChangeProfile
                key={profil.id}
                profil={profil}
                parameter={this.handleSwitch}
              />
        )}
        </nav>
        <div className="container">
      
        <Profil 
          infos = {this.state.profil[this.state.select]}
        />
        
      </div>
      </div>
    );
  }
}

export default App;
