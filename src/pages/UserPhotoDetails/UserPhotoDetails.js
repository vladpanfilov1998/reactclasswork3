import React from 'react';

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

