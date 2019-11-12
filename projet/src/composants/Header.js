import React, { Component } from 'react'

class Liste extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-extend-sm navbar-dark bg-danger mb-3 py-0">
                    <div className="container">
                        <a href="#" className="navbar-brand">
                            Profils
                        </a>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                 Accueil
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Liste;