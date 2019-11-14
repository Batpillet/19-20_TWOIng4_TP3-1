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
          photo:'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043250-avatar-child-girl-kid_113270.png',
          lastcomment: "Bonjour tous le monde !",
          likes: 0
        },
        {
          id: 1, 
          nom: 'Dampierre', 
          prenom: 'Eric', 
          date: '29 Aout 1982',
          background: "#FFFFFF",
          photo: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043240-avatar-bad-breaking-chemisrty-heisenberg_113279.png',
          lastcomment: "Je l'ai regardé, il m'a regardé, je l'ai regardé, il m'a regardé. Bref, je suis devant un miroir",
          likes: 0
        },
        {
          id: 2,
          nom: 'Verlaine', 
          prenom: "Paul", 
          date: '30 Mars 1844',
          background: "#FFFFFF",
          photo: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png', 
          lastcomment: "Je cherche un de mes amis !",
          likes: 0
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
      <div id="cool">
        <nav className="navbar navbar-extend-sm navbar-dark bg-dark py-0 justify-content-end" id="navig">
        {this.state.profil.map((profil)=>
          <ChangeProfile
            key={profil.id}
            profil={profil}
            parameter={this.handleChange}
          />
          )}
          </nav>
          <div className="container-fluid" id="profil">
            <div className="row">
              <Profil 
                infos = {this.state.profil[this.state.select]}
              />
            </div>
            <div className="row">
              <LastPost
                lastcomment={this.state.profil[this.state.select]}
                like={this.state.profil[this.state.select].likes}
                onClick={() => this.handleClickLikes(this.state.select)}
              />          
            </div>
          </div>
        </div>  
        );
      }
    }
    
    export default App;
    