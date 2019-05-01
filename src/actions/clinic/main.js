import { url } from '../../config/url-config'

export const GETCLINICS = 'GETCLINICS'

export const getClinics = () => {
    return async (dispatch) => {
        const res = await fetch(`${url}/clinic/list`, {
            method: 'GET',
            mode: 'cors',
        })
        const data = await res.json();
        dispatch({
            type: GETCLINICS,
            payload: data,
        })
    }
}

export const addClinic = async (data) => {
    await fetch(`${url}/clinic/add`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }, data);
}