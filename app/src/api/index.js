
import {getToken} from '../auth'
const token = getToken()

const baseURL ='https://fitnesstrac-kr.herokuapp.com/api/'

export const fetchUserData = async () => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();

        return data

    } catch (error) {
        console.error(error);
    }
}