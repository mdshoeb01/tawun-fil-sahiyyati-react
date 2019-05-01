const { url } = require('../../config/url-config');

export const addExpense = async (data) => {
    await fetch(`${url}/amount/add-expense`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}

export const listExpense = async (data) => {
    const res = await fetch(`${url}/amount/list/${data.year}/${data.month}`, {
        method: 'GET',
        mode: 'cors',
    });
    const json = await res.json();
    return json;
}