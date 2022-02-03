import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getById:(userId)=>axiosService.get(`${urls.users}/${userId}${urls.albums}`).then(value => value.data)
}

