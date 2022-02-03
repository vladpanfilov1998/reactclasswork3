import React from 'react';
import {Link} from "react-router-dom";


const UserPhotoDetails = ({photo: {id, albumId, title}}) => {
    return (
        <div>
            <div>ID: {id}.</div>
            <div>ALBUM ID: {albumId}</div>
            <div>Title: {title}</div>

        </div>
    );
};

export default UserPhotoDetails;

