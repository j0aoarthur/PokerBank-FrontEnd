// Arquivo que possui a instância de axios que deve ser utilizada para fazer requisições para a API do Back-End
import axios from "axios";


// Mudar de acordo com sistema de deploy
// Se for localhost, usar o localhost
const BASE_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});
