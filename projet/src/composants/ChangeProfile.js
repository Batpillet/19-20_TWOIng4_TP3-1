import React from "react";

function ChangeProfile(props) {
    const{profil, parameter} = props;

    return (
        <div className="px-1">
            <button className="btn btn-danger" onClick={() => parameter(profil.id)}> {profil.prenom}</button>
        </div>
    );
}

export default ChangeProfile;