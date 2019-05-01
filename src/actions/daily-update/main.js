import { url } from '../../config/url-config'

export const addDailyUpdate = async (data) => {
    await fetch(`${url}/daily/add-update`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const listDailyUpdate = async (data) => {
    const res = await fetch(`${url}/daily/list-update/${data.year}/${data.month}/${data.clinicId}`, {
        mehtod: 'GET',
        mode: 'cors',
    })
    const json = await res.json();
    return json;
}