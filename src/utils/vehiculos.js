import axios from 'axios';

let API_URL = 'http://localhost:8080/api/vehiculos/page'

const obtenerVehiculosPaginadas = async (page, size) => {
    try {
        const response = await axios.post(API_URL, { params: { page, size} });
        console.log("RESPONSE ", response.data.content)
        return response.data;
    } catch (error) {
        throw error;
    }
};
export default {
    obtenerVehiculosPaginadas
}