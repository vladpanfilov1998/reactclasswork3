import {Link} from "react-router-dom";
import React from "react";

const UserDetailsPage = ({user: {id, name}}) => {

    return (

        <div>
            <div>ID: {id}.</div>
            <div>NAME: {name}</div>
            <Link to={id.toString()}>
                <button>USER DETAILS</button>
            </Link>
            <Link to={`${id.toString()}/albums`}>
                <button>USER ALBUMS</button>
            </Link>
        </div>

    );
};

export {UserDetailsPage};