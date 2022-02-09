import React, {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import UserAlbumsDetailsPage from "../UserAlbumsDetailsPage/UserAlbumsDetailsPage";
import css from "../../App.module.css";

const UserAlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getById(id).then(value => setAlbums([...value]));
    }, [id]);

    return (
        <div>
            {albums && (
                <div>
                    {albums.map(album => <UserAlbumsDetailsPage key={album.id} album={album}/>)}
                </div>
            )}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserAlbumsPage;

