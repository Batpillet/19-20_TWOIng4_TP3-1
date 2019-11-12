import React, { Component } from 'react';
import './App.css';
import Header from './composants/Header'
import Profil from './composants/Profil';
import ChangeProfile from './composants/ChangeProfile'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state={
    profil: [
      {
        id: 1,
        nom: 'Dupond', 
        prenom: 'Josephine', 
        date: '12 Avril 1976'
      },
      {
        id: 2, 
        nom: 'Dampierre', 
        prenom: 'Eric', 
        date: '23 septembre 1987'
      },
      {
        id: 3,
        nom: 'Verlaine', 
        prenom: "Paul", 
        date: '30 mars 1844'
      }
    ]
  }

  handleChangeProfile = (id) => {
    this.setState({currentID : id});
};

  render(){
    return (
      <div className="container">
      <Header />
      {this.state.profil.map(profil =>
        <Profil 
          key={profil.id}
          prenom={profil.prenom}
          nom={profil.nom}
          date={profil.date}
          onChangeProfile={this.handleChangeProfile}
        />
        )}
      
      </div>
    );
  }
}

export default App;
