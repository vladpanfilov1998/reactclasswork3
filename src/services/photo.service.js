import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getById:(userId)=>axiosService.get(`${urls.albums}/${userId}/${urls.photos}`).then(value => value.data)
}


