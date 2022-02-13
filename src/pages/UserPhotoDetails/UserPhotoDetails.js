import React from 'react';

const UserPhotoDetails = ({photo: {id, albumId, title, url, thumbnailUrl}}) => {
    return (
        <div>

            <div>
                <img src={`${url}`} width={'600px'}
                     alt="Poster"/>
                <div>ID: {id}.</div>
                <div>ALBUM ID: {albumId}</div>
                <div>Title: {title}</div>
                <div>
                    <img src={`${thumbnailUrl}`} width={'150px'}
                         alt="Poster"/>
                </div>
            </div>
        </div>
    );
};

export default UserPhotoDetails;

