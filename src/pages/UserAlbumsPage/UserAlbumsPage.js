import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import UserAlbumsDetailsPage from "../UserAlbumsDetailsPage/UserAlbumsDetailsPage";

const UserAlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumService.getById(id).then(value => setAlbums([...value]));
    }, [id]);

    return (
        <div>
            {albums.map(album => <UserAlbumsDetailsPage key={album.id} album={album}/>)}
        </div>

    );
};

export default UserAlbumsPage;

