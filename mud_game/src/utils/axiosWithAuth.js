import axios from 'axios';

export const axiosWithAuth = () => {
    const Token = localStorage.getItem('Token');

    return axios.create({
      
        headers: {
           'Content-Type': 'application/json',
            Authorization: `Token ${Token}`
            
            
        }
    });
};
