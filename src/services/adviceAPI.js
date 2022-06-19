import axios from 'axios';

const API = 'https://api.adviceslip.com/advice';

async function getAdvice(){
    try {
        const response = await axios.get(API);
        const {slip} =  response.data;
        return slip;
    } catch (error) {
        console.log(error);
    }
}

export default getAdvice;