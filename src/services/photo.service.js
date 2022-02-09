import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getById:(albumId)=>axiosService.get(`/${urls.photos}?userId=${albumId}`).then(value => value.data)
}


