import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {albumService} from "../../services/album.service";
import UserAlbumsPage from "../UserAlbumsDetailsPage/UserAlbumsDetailsPage";


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