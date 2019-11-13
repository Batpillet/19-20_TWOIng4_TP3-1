import React from "react";
import { throwStatement } from "@babel/types";

class LastPost extends React.Component {
    render() {
        return(
            <div className="card card-body mb-3">
                <ul className="list-group">
                    <p><b>Derniere publication :</b> </p>
                    <li className="list-group-item">{this.props.lastcomment.lastcomment}</li>
                    <a className="list-group-item"><button onClick={this.props.onClick}> 👍 C'est super ! </button></a>
                    <li className="list-group-item">J'aime : {this.props.like}</li>
                </ul>
            </div>
        );
    }
}

export default LastPost;