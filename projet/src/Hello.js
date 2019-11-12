import React from 'react';
import './App.css';

class Hello extends React.Component{
  render(){
    return (
      <div>
        Hello {this.props.prenom}
      </div>
      );
    }
  }

  export default Hello; 