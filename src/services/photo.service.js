import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getById:(userId)=>axiosService.get(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`).then(value => value.data)
}


