import React, {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import UserPhotoDetails from "../UserPhotoDetails/UserPhotoDetails";
import {photoService} from "../../services/photo.service";
import css from "../../App.module.css";


const UserPhotoPage = () => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        photoService.getById(id).then(value => setPhotos([...value]));
    }, [id]);

    return (
        <div>
            {photos && (

                <div>
                    {photos.map(photo => <UserPhotoDetails key={photo.id} photo={photo}/>)}
                </div>
            )}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

);
};

export default UserPhotoPage;

