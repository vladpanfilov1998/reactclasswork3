import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import UserPhotoDetails from "../UserPhotoDetails/UserPhotoDetails";
import {photoService} from "../../services/photo.service";

const UserPhotoPage = () => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        photoService.getById(id).then(value => setPhotos([...value]));
    }, [id]);

    return (
        <div>
            {photos &&
            (photos.map(photo => <UserPhotoDetails key={photo.id} album={photo}/>))
            }
        </div>

    );
};

export default UserPhotoPage;

