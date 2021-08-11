import axios from 'axios';

export const fetchData = async (text,page) => {
    
    return await axios.get(`https://breakingbadapi.com/api/characters?name=${text}&page=${page}`)
}