import { url } from '../../config/url-config'

export const GETAVAILABLE = 'GETAVAILABLE'

export const getAvailable = () => {
    return async (dispatch) => {
        const res = await fetch(`${url}/available`, {
            method: 'GET',
            mode: 'cors',
        })
        const data = await res.json();
        dispatch({
            type: GETAVAILABLE,
            payload: data,
        })
    }
}