import React from 'react';
import {Link} from "react-router-dom";


const UserAlbumsDetailsPage = ({album: {id, userId, title}}) => {
    return (
        <div>
            <div>ID: {id}.</div>
            <div>USER ID: {userId}</div>
            <div>Title: {title}</div>
            <Link to={id.toString()}>
                <button>PHOTO</button>
            </Link>
        </div>
    );
};

export default UserAlbumsDetailsPage;

