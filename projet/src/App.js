import React, { Component } from 'react';
import './App.css';
import Profil from './composants/Profil';
import ChangeProfile from './composants/ChangeProfile'
import LastPost from './composants/LastPost'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { pathToFileURL } from 'url';
import Josephine from './Josephine.png'; 
import "./App.css"

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
          background: "#FFFFFF",
          photo:"Josephine.png",
          lastcomment: "Bonjour tous le monde !"
        },
        {
          id: 1, 
          nom: 'Dampierre', 
          prenom: 'Eric', 
          date: '23 septembre 1987',
          background: "#FFFFFF",
          photo: 'Eric.png',
          lastcomment: "Je suis nouveau ici, quelqu'un pour m'aider ?"
        },
        {
          id: 2,
          nom: 'Verlaine', 
          prenom: "Paul", 
          date: '30 mars 1844',
          background: "#FFFFFF",
          photo: 'Paul.png', 
          lastcomment: "Je cherche un de mes amis !"
        }
      ], 
      select: 0
    }; 
    this.handleChange= this.handleChange.bind(this); 
  }
  
  handleChange(index) 
  {
    this.setState({select: index});
  }
  
  handleClick(index){
    this.setState({select: index})
  }
  handleClickLikes(index){
    const profileCopy = this.state.profil.slice();
    profileCopy[index].likes++;
    this.setState({profil: profileCopy})
  }
  
  render(){
    
    return (
      <div>
        <nav className="navbar navbar-extend-sm navbar-dark bg-dark py-0 justify-content-end" id="navig">
        {this.state.profil.map((profil)=>
          <ChangeProfile
            key={profil.id}
            profil={profil}
            parameter={this.handleChange}
          />
          )}
          </nav>
          <div className="container" id="profil">
            <div className="row"></div>
              <Profil 
                infos = {this.state.profil[this.state.select]}
              />
            <div className="row">
              <LastPost
                lastcomment={this.state.profil[this.state.select]}
                likes={this.state.profil[this.state.select]}
                onClick={() => this.handleClickLikes(this.state.select)}
              />
            </div>
          </div>
        </div>  
        );
      }
    }
    
    export default App;
    