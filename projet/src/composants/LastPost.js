import React from "react";

class LastPost extends React.Component {
    render() {
        return(
            <div className="card card-body mb-3">
                <ul className="list-group">
                    <p><b>Derniere publication :</b> </p>
                    <li className="list-group-item">{this.props.lastcomment.lastcomment}</li>
                    <a className="list-group-item"><button onClick={this.props.onClick}> 👍 C'est super ! </button></a>
                </ul>
            </div>
        );
    }
}

export default LastPost;