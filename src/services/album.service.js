import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getById:(id)=>axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}

