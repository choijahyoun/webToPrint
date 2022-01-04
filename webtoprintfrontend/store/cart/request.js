import axios from 'axios'


const cartRequest = ()=>
    axios
    .get(`${process.env.apiurl}/cart`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
    .then(response=>
        {
            console.log(response.data);
            return response;
        }
    )
    .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
    });


const cartSaveRequest = (token, form)=>
    axios
    .post(`${process.env.apiurl}/cart`,
    {

    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
    .then(response=>
        {
            console.log(response.data);
            return response;
        }
    )
    .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
    });

export {cartRequest, cartSaveRequest}